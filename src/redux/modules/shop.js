const ADD_TO_PRODUCTS = 'ADD_TO_PRODUCTS';
const ADD_TO_BASKET = 'ADD_TO_BASKET';
const CALCULATE = 'CALCULATE';
const STOCK = 'STOCK';

const initialState = {
    totalPrice: 0,
    totalDiscount: 0,
    products: [],
    basket: [],
    stock: 0
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case ADD_TO_PRODUCTS:
            return {
                ...state,
                products: [...state.products, action.product]
            };
        case ADD_TO_BASKET:
            const foundItem = state.basket.find(basketItem => action.product.name === basketItem.name);
            const newProducts = state.products.map((productItem) => {
                const newStock = productItem.stock - 1;
                if (newStock < 0 && productItem.name === action.product.name) {
                    alert('Mojoodi kafi nist!!!');
                    return productItem;
                }
                if (productItem.name === action.product.name) {
                    return {
                        ...productItem,
                        stock: newStock
                    }
                }
                return productItem;
            });
            if (foundItem) {
                const newBasket = state.basket.filter(basketItem => basketItem.name !== foundItem.name);
                return {
                    ...state,
                    basket: [...newBasket, { ...foundItem, qty: foundItem.qty + 1 }],
                    products: newProducts
                };
            }
            return {
                ...state,
                basket: [...state.basket, { ...action.product, qty: 1 }],
                products: newProducts
            };
        case CALCULATE:
            const result = state.basket.reduce((acc, current) => {
                acc += current.price * current.qty;
                return acc;
            }, 0);
            console.log(result, 'this is result');
            return {
                ...state,
                totalPrice: result
            };
        default:
            return state;
    }
}

export function addToProducts(product) {
    return {
        type: ADD_TO_PRODUCTS,
        product
    };
}

export function addToBasket(product) {
    return {
        type: ADD_TO_BASKET,
        product
    };
}

export function calculate() {
    return {
        type: CALCULATE
    };
}

export function stock() {
    return {
        type: STOCK
    };
}
