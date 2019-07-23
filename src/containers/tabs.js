import React, { Component } from 'react';

class Tabs extends Component {
    render() {
        const products = [
            { name: 'محصول اول', count: 3 },
            { name: 'محصول دوم', count: 5 },
            { name: 'محصول سوم', count: 8 },
        ];
        return (
            <div>
                <p>محصولات</p>
                {
                    products.map((product) => {
                        return (
                            <p>{product.name}</p>
                        )
                    })
                }
            </div>
        );
    }
}

export default Tabs;