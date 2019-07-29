import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToProducts }from '../redux/modules/shop'

class ReduxShop extends Component {
    componentDidMount() {
        this.props.addToProducts({ name: 'tv', price: 1000 });
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <p>Redux Shop</p>
            </div>
        );
    }
}

export default connect(state => ({
    products: state.shop.products
}), {
    addToProducts
})(ReduxShop);