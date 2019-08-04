
import axios from 'axios';
import { put } from 'redux-saga/effects'

export const LOAD_COMMENTS = 'LOAD_COMMENTS';
export const LOAD_COMMENTS_SUCCESS = 'LOAD_COMMENTS_SUCCESS';
export const LOAD_COMMENTS_FAILURE = 'LOAD_COMMENTS_FAILURE';

const initialState = {
    comments: [],
    loading: false,
    loaded: false,
    error: null
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case LOAD_COMMENTS:
            return {
                ...state,
                loading: true,
            };
        case LOAD_COMMENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                comments: action.comments
            };
        case LOAD_COMMENTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
}

export function loadComments() {
    return {
        type: LOAD_COMMENTS
    };
}

export function loadCommentsSuccess(comments) {
    return {
        type: LOAD_COMMENTS_SUCCESS,
        comments
    };
}

export function loadCommentsFailure(error) {
    return {
        type: LOAD_COMMENTS_FAILURE,
        error
    };
}

export function* watchLoadComments() {
    try {
        const response = yield axios.get('https://jsonplaceholder.typicode.com/comments');
        yield put(loadCommentsSuccess(response.data))
    } catch (e) {
        yield put(loadCommentsFailure(e));
    }
}






