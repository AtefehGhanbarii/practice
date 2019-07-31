import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToProducts, addToBasket, calculate, addStock } from '../redux/modules/shop';
import { Button } from '../components/kit/Button/Button';
import styled from 'styled-components';
import { Input } from '../components/kit/Input/Input';
import Modal from '../components/kit/modal/Modal';

const Section = styled.section`
  //background-color: #eee;
  font-size: 1em;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,.2), 0 6px 20px 0 rgba(0,0,0,.19);
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 10px;
  //display: flex;
  text-align: right;
  //justify-content: space-between;
  h4 {
  background-color: #e8e8e8;
  color: #606060;
  padding: 10px 10px;
  border-radius: 5px;
  text-align: center;
  }
  p {
    font-weight: bold;
    font-size: 14px;
  }
  h3 {
    background-color: #20e020;
    padding: 14px 27px;
    border-radius: 25px;
    color: #fff;
    font-size: 16px;
    display: inline-block;
  }
  section {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,.2), 0 6px 20px 0 rgba(0,0,0,.19);
    padding: 22px 25px;
    border-radius: 16px;
    margin: 14px 14px;
  }
  
`;

const DivProduct = styled.div`
display: flex;
justify-content: space-around;
`;

const DivBsket = styled.div`
  display: flex;
  justify-content: flex-end;
  section {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,.2), 0 6px 20px 0 rgba(0,0,0,.19);
    padding: 22px 25px;
    border-radius: 16px;
    margin: 14px 14px;
  }
`;

class ReduxShop extends Component {
    state = {
        productName: '',
        productPrice: '',
        productStock: 0,
        showProductModal: false,
        productDiscount: 0
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    toggleProductModal = () => {
        this.setState({
            showProductModal: !this.state.showProductModal
        });
    };

    handleAddProduct = () => {
        //make product here
        const newProduct = {
            name: this.state.productName,
            price: this.state.productPrice,
            stock: this.state.productStock,
            discount: this.state.productDiscount,
        };
        const foundRepeatItem = this.props.products.find(product => product.name === newProduct.name);
        if (foundRepeatItem) {
            alert('کالا قبلا وارد شده است !')
        } else {
            this.props.addToProducts(newProduct);
        }
        console.log(this.state.products, 'this is products')
    };

    render() {
        const { products, basket, totalPrice, showNotifyMeAlert, totalDiscount } = this.props;
        console.log(this.props.products);
        return (
            <>
                <Section>
                    <Button
                        title="افزودن محصول"
                        onClick={this.toggleProductModal}/>

                    <Modal show={this.state.showProductModal} modalClosed={this.toggleProductModal}>
                        <button className='closeButModal' onClick={this.toggleProductModal}>close</button>
                        <p>افزودن محصول جدید</p>
                        <Input
                            title="نام محصول"
                            name="productName"
                            value={this.state.productName}
                            placeholder="نام محصول"
                            onChange={this.handleChange}
                        />
                        <Input
                            title="قیمت محصول"
                            name="productPrice"
                            value={this.state.productPrice}
                            placeholder="قیمت محصول"
                            onChange={this.handleChange}
                        />
                        <Input
                            title="تخفیف"
                            name="productDiscount"
                            value={this.state.productDiscount}
                            placeholder="تخفیف محصول"
                            onChange={this.handleChange}
                        />
                        <Input
                            title="موجودی"
                            name="productStock"
                            value={this.state.productStock}
                            placeholder="موجودی محصول"
                            onChange={this.handleChange}
                        />
                        <Button
                            title="افزودن محصول جدید"
                            onClick={this.handleAddProduct}
                        />
                    </Modal>
                    <h4>لیست محصولات</h4>
                    <DivProduct>
                        {/*products*/}
                        {
                            products.map((product, index) => {
                                return (
                                    <section key={index}>
                                        <p>{product.name}:نام محصول </p>
                                        <p>قیمت: {product.price}تومان</p>
                                        <p>موجودی: {product.stock}</p>
                                        <p>تخفیف: {product.discount}تومان</p>
                                        <Button
                                            title={product.stock ? "افزودن به سبد خرید" : "به من اطلاع بده"}
                                            onClick={() => {
                                                if (product.stock > 0) {
                                                    this.props.addToBasket(product);
                                                    this.props.calculate();
                                                } else {
                                                    this.props.addStock();
                                                    // alert('اطلاع داده شد');
                                                }
                                            }}
                                        />
                                    </section>
                                )
                            })
                        }
                    </DivProduct>
                    <h4>سبد خرید</h4>
                    <DivBsket>
                        {
                            basket.map((basketItem, index) => {
                                return (
                                    <section key={index}>
                                        <span>
                                        <p>نام محصول: {basketItem.name}</p>
                                        <p>{basketItem.qty} :تعداد </p>
                                        </span>
                                    </section>
                                );
                            })
                        }
                    </DivBsket>
                    <h3>جمع تخفیف:{totalDiscount}</h3>
                    <h3>جمع کل:{totalPrice}</h3>
                    <h3>پرداختی: {totalPrice - totalDiscount}</h3>
                </Section>
                <div>
                    {showNotifyMeAlert ? <div><p>به شما اطلاع داده شد!</p></div> : null}
                </div>
            </>
        );
    }
}

export default connect(state => ({
    products: state.shop.products,
    basket: state.shop.basket,
    totalPrice: state.shop.totalPrice,
    totalDiscount: state.shop.totalDiscount,
    showNotifyMeAlert: state.shop.showNotifyMeAlert
}), {
    addToProducts,
    addToBasket,
    calculate,
    addStock
})(ReduxShop);








