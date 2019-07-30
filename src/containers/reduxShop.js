import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToProducts, addToBasket, calculate, stock } from '../redux/modules/shop';
import { Button } from '../components/kit/Button/Button';
import styled from 'styled-components';

const Section = styled.section`
  //background-color: #eee;
  font-size: 1em;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,.2), 0 6px 20px 0 rgba(0,0,0,.19);
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 10px;
  display: flex;
  text-align: right;
  justify-content: space-between;
  h4 {
  background-color: #e8e8e8;
  color: #606060;
  padding: 10px 10px;
  border-radius: 5px;
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
  }
`;

class ReduxShop extends Component {
    componentDidMount() {
        this.props.addToProducts({ name: 'tv', price: 1000, stock: 10 });
        this.props.addToProducts({ name: 'pc', price: 4000, stock: 5 });
    }

    render() {
        const { products, basket, totalPrice } = this.props;
        console.log(this.props);
        console.log(this.state);
        return (
            <Section>
                <p>لیست محصولات</p>
                {
                    products.map((product, index) => {
                        return (
                            <div key={index}>
                                <p>{product.name}</p>
                                <p>قیمت:{product.price}</p>
                                <p>موجودی: {product.stock}</p>
                                <Button
                                     title="افزودن به سبد خرید"
                                    onClick={() => {
                                        this.props.addToBasket(product);
                                        this.props.calculate();
                                        this.props.stock();
                                    }}
                                />

                            </div>
                        )
                    })
                }
                <p>سبد خرید</p>
                {
                    basket.map((basketItem, index) => {
                        return(
                            <div key={index}>
                                <p>{basketItem.name}</p>
                                <p>{basketItem.qty}تعداد:</p>
                            </div>
                        );
                    })
                }
                <p>جمع کل:{totalPrice}</p>
            </Section>
        );
    }
}

export default connect(state => ({
    products: state.shop.products,
    basket: state.shop.basket,
    totalPrice: state.shop.totalPrice
}), {
    addToProducts,
    addToBasket,
    calculate,
    stock
})(ReduxShop);








