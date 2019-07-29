const ADD_TO_PRODUCTS = 'ADD_TO_PRODUCTS';
const ADD_TO_BASKET = 'ADD_TO_BASKET';
const CALCULATE = 'CACULATE';

const initialState = {
    totalPrice: 0,
    totalDiscount: 0,
    products: [],
    basket: []
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case ADD_TO_PRODUCTS:
            return {
                ...state,
                products: [...state.products, action.product]
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

