import axios from 'axios';
import { put } from 'redux-saga/effects';

export const LOAD_USERS = 'LOAD_USERS';
export const LOAD_USERS_SUCCESS = 'LOAD_USERS_SUCCESS';
export const LOAD_USERS_FAILURE = 'LOAD_USERS_FAILURE';

export const LOAD_USER = 'LOAD_USER';
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
export const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';

export const CREATE_USER = 'CREATE_USER';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_FAILURE = 'CREATE_USER_FAILURE';

const initialState = {
    users: {
        users: [],
        loading: false,
        loaded: false,
        error: null
    },
    user: {
        user: {},
        loading: false,
        loaded: false,
        error: null
    },
    createUser: {
        user: {},
        loading: false,
        loaded: false,
        error: null
    },
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case LOAD_USERS:
            return {
                ...state,
                users: {
                    ...state.users,
                    loading: true
                }
            };
        case LOAD_USERS_SUCCESS:
            return {
                ...state,
                users: {
                    ...state.users,
                    loading: false,
                    loaded: true,
                    users: action.users
                }
            };
        case LOAD_USERS_FAILURE:
            return {
                ...state,
                users: {
                    ...state.users,
                    error: action.error,
                    loading: false
                }
            };
        case LOAD_USER:
            return {
                ...state,
                user: {
                    ...state.user,
                    loading: true
                }
            };
        case LOAD_USER_SUCCESS:
            return {
                ...state,
                user: {
                    ...state.user,
                    loading: false,
                    loaded: true,
                    user: action.user
                }
            };
        case LOAD_USER_FAILURE:
            return {
                ...state,
                user: {
                    ...state.user,
                    loading: false,
                    error: action.error
                }
            };
        case CREATE_USER:
            return {
                ...state,
                createUser: {
                    ...state.createUser,
                    loading: true
                }
            };
        case CREATE_USER_SUCCESS:
            return {
                ...state,
                createUser: {
                    ...state.createUser,
                    loading: false,
                    loaded: true,
                    createUser: action.createUser
                }
            };
        case CREATE_USER_FAILURE:
            return {
                ...state,
                createUser: {
                    ...state.createUser,
                    error: action.error
                }
            };
        default:
            return state;
    }
}

export function loadUsers() {
    return {
        type: LOAD_USERS,
    };
}

export function loadUsersSuccess(users) {
    return {
        type: LOAD_USERS_SUCCESS,
        users
    };
}

export function loadUsersFailure(error) {
    return {
        type: LOAD_USERS_FAILURE,
        error
    };
}

export function loadUser(userId) {
    return {
        type: LOAD_USER,
        userId
    };
}

export function loadUserFailure(error) {
    return {
        type: LOAD_USER_FAILURE,
        error
    };
}

export function loadUserSuccess(user) {
    return {
        type: LOAD_USER_SUCCESS,
        user
    };
}

export function createUser(createUser) {
    return {
        type: CREATE_USER,
        createUser
    };
}

export function createUserSuccess(createUser) {
    return {
        type: CREATE_USER_SUCCESS,
        createUser
    };
}

export function createUserFailure(error) {
    return {
        type: CREATE_USER_FAILURE,
        error
    };
}

export function* watchLoadUsers() {
    try {
        const response = yield axios.get(`https://jsonplaceholder.typicode.com/users`);
        yield put(loadUsersSuccess(response.data));
    } catch (e) {
        yield put(loadUsersFailure(e));
    }
}

export function* watchLoadUser({ userId }) {
    try {
        const response = yield axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
        yield put(loadUserSuccess(response.data));
    } catch (e) {
        yield put(loadUserFailure(e));
    }
}