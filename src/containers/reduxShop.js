import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToProducts, addToBasket, calculate, stock } from '../redux/modules/shop';
import { Button } from '../components/kit/Button/Button';

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
            <div>
                <p>لیست محصولات</p>
                {
                    products.map(product => {
                        return (
                            <div>
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
                    basket.map(basketItem => {
                        return(
                            <div>
                                <p>{basketItem.name}</p>
                                <p>{basketItem.qty}تعداد:</p>
                                <p>{basketItem.stock}موجودی:</p>
                            </div>
                        );
                    })
                }
                <p>جمع کل:{totalPrice}</p>
            </div>
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








