import axios from 'axios';
import { put } from 'redux-saga/effects';

export const LOAD_POSTS = 'LOAD_POSTS';
export const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
export const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';

export const LOAD_POST = 'LOAD_POST';
export const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
export const LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';

export const CREATE_POST = 'CREATE_POST';
export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS';
export const CREATE_POST_FAILURE = 'CREATE_POST_FAILURE';

const initialState = {
    posts: {
        postsData: [],
        loading: false,
        loaded: false,
        error: null
    },
    post: {
        postData: {},
        loading: false,
        loaded: false,
        error: null
    },
    createPost: {
        loading: false,
        loaded: false,
        error: null
    },
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case LOAD_POSTS:
            return {
                ...state,
                posts: {
                    ...state.postsData,
                    loading: true
                }
            };
        case LOAD_POSTS_SUCCESS:
            return {
                ...state,
                posts: {
                    ...state.posts,
                    loading: false,
                    loaded: true,
                    posts: action.posts
                }
            };
        case LOAD_POSTS_FAILURE:
            return {
                ...state,
                posts: {
                    ...state.postsData,
                    error: action.error,
                    loading: false
                }
            };
        case LOAD_POST:
            return {
                ...state,
                post: {
                    ...state.post,
                    loading: true
                }
            };
        case LOAD_POST_SUCCESS:
            return {
                ...state,
                post: {
                    ...state.post,
                    loading: false,
                    loaded: true,
                    postData: action.post
                }
            };
        case LOAD_POST_FAILURE:
            return {
                ...state,
                post: {
                    ...state.post,
                    loading: false,
                    error: action.error
                }
            };
        case CREATE_POST:
            return {
                ...state,
                createPost: {
                    ...state.createPost,
                    loading: true
                }
            };
        case CREATE_POST_SUCCESS:
            return {
                ...state,
                createPost: {
                    ...state.createPost,
                    loading: false,
                    loaded: true,
                    createPost: action.createPost
                },
                posts: {
                    ...state.posts,
                    posts: [action.createPost, ...state.posts.posts]
                }
            };
        case CREATE_POST_FAILURE:
            return {
                ...state,
                createPost: {
                    ...state.createPost,
                    error: action.error
                }
            };
        default:
            return state;
    }
}

export function loadPosts() {
    return {
        type: LOAD_POSTS,
    };
}

export function loadPostsSuccess(posts) {
    return {
        type: LOAD_POSTS_SUCCESS,
        posts
    };
}

export function loadPostsFailure(error) {
    return {
        type: LOAD_POSTS_FAILURE,
        error
    };
}

export function loadPost(postId) {
    return {
        type: LOAD_POST,
        postId
    };
}

export function loadPostFailure(error) {
    return {
        type: LOAD_POST_FAILURE,
        error
    };
}

export function loadPostSuccess(post) {
    return {
        type: LOAD_POST_SUCCESS,
        post
    };
}

export function createPost(createPost) {
    return {
        type: CREATE_POST,
        createPost
    };
}

export function createPostSuccess(createPost) {
    return {
        type: CREATE_POST_SUCCESS,
        createPost
    };
}

export function createPostFailure(error) {
    return {
        type: CREATE_POST_FAILURE,
        error
    };
}

export function* watchLoadPosts() {
    try {
        const response = yield axios.get(`https://jsonplaceholder.typicode.com/posts`);
        yield put(loadPostsSuccess(response.data));
    } catch (e) {
        yield put(loadPostsFailure(e));
    }
}

export function* watchLoadPost({ postId }) {
    try {
        const response = yield axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        yield put(loadPostSuccess(response.data));
    } catch (e) {
        yield put(loadPostFailure(e));
    }
}

export function* watchCreatePost({ createPost }) {
    try {
        const response = yield axios.post('https://jsonplaceholder.typicode.com/posts', { createPost });
        console.log(response, 'this is response');
        yield put(createPostSuccess(response.data.createPost));
    } catch (e) {
        yield put(createPostFailure(e));
    }
}
