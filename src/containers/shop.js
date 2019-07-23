import React, { Component } from 'react';
import { Input } from '../components/kit/Input/Input';
import { Button } from '../components/kit/Button/Button';
import styled from "styled-components";

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
`;

class Shop extends Component {
    state = {
        productName: '',
        productPrice: '',
        products: [],
        sale: [],
        totalPrice: 0
    };

    handleSubmit = () => {
        const newItem = {
            price: this.state.productPrice,
            name: this.state.productName
        };
        const foundItem = this.state.products.find(pItem => pItem.name === newItem.name);
        if (foundItem) {
            alert('duplicat e eeeee');
        } else {
            this.setState({
                products: [...this.state.products, newItem]
            });
        }
    };

    addToBasket = (product) => {
        const { sale } = this.state;
        const foundItem = sale.find(sItem => sItem.name === product.name);
        if (foundItem) {
            const newSale = sale.filter(sItem => sItem.name !== foundItem.name);
            this.setState({
                sale: [...newSale, { ...foundItem, qty: foundItem.qty + 1 }]
            });
            this.calculate([...newSale, { ...foundItem, qty: foundItem.qty + 1 }]);
        } else {
            this.setState({
                sale: [...sale, { ...product, qty: 1 }]
            });
            this.calculate([...sale, { ...product, qty: 1 }]);
        }
    };

    calculate = (sale) => {
        const result = sale.reduce((acc, current) => {
            acc += current.price * current.qty;
            return acc;
        }, 0);
        this.setState({
            totalPrice: result
        });
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        return (
            <Section>
                {/*basket*/}
                <div>
                    <h4>سبد خرید</h4>
                    {
                        this.state.sale.map(product => {
                            return (
                                <div>
                                    <p>{product.name}:{product.price}تومان</p>
                                    <p>{product.qty}</p>
                                </div>
                            )
                        })
                    }
                    <h5>جمع کل</h5>
                    {this.state.totalPrice}
                </div>
                {/*product list*/}
                <div>
                    <h5>لیست محصولات</h5>
                    {
                        this.state.products.map(product => {
                            return (
                                <div>
                                    <p>{product.name}:{product.price}تومان</p>
                                    <Button
                                        title="افزودن به سبد خرید"
                                        onClick={() => this.addToBasket(product)}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
                {/*add product*/}
                <div>
                    <h5>افزودن محصول جدید</h5>
                    <Input
                        name="productName"
                        title="نام محصول"
                        value={this.state.productName}
                        type='text'
                        placeholder='نام محصول'
                        onChange={this.handleChange}
                    />
                    <br/>
                    <Input
                        name="productPrice"
                        title="قیمت محصول"
                        value={this.state.productPrice}
                        type='text'
                        placeholder='قیمت محصول'
                        onChange={this.handleChange}
                    />
                    <br/>
                    <Button
                        title="افزودن محصول جدید"
                        onClick={this.handleSubmit}
                    />
                </div>
            </Section>
        )
    }
}


export default Shop;


