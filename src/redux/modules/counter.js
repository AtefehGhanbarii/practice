//actions
export const DECREAMENT = 'DECREAMENT';
export const INCREAMENT = 'INCREAMENT';
export const RESET_COUNTER = 'RESET_COUNTER';
export const MULTI_ADD = 'MULTI_ADD';

const initialState = {
    count: 0
};

//reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case INCREAMENT:
            return {
                ...state,
                count: state.count + 1
            };
        case DECREAMENT:
            return {
                ...state,
                count: state.count - 1
            };
        case MULTI_ADD:
            return {
                ...state,
                count: state.count + action.number
            };
        case RESET_COUNTER:
            return {
                ...state,
                count: 0
        };
        default:
            return state;
    }
}

//action cerators
export function increament() {
    return {
        type: INCREAMENT
    };
}

export function decreament() {
    return {
        type: DECREAMENT
    };
}

export function multiadd(number){
    return {
        type: MULTI_ADD,
        number
    };
}

export function resetCounter() {
    return {
        type: RESET_COUNTER
    };
}

