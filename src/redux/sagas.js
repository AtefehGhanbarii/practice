import { all, takeEvery } from 'redux-saga/effects';

import { REHYDRATE } from 'redux-persist';
import { watchRehydrate } from './modules/rehydrate'
import { LOAD_USER, LOAD_USERS, watchLoadUser, watchLoadUsers } from './modules/users';
// import { RESET_COUNTER, watchResetCounter } from "./modules/counter";
import { LOAD_COMMENTS, watchLoadComments } from './modules/comments';
import { LOAD_POSTS, watchLoadPosts } from './modules/posts';
import { LOAD_POST, watchLoadPost } from './modules/posts';
import { CREATE_POST, watchCreatePost } from './modules/posts';
import { DELETE_POST, watchDeletePost } from './modules/posts';

export default function* root(store) {
    yield all([
        takeEvery(REHYDRATE, watchRehydrate, store),
        takeEvery(LOAD_USERS, watchLoadUsers),
        takeEvery(LOAD_COMMENTS, watchLoadComments),
        takeEvery(LOAD_USER, watchLoadUser),
        takeEvery(LOAD_POSTS, watchLoadPosts),
        takeEvery(LOAD_POST, watchLoadPost),
        takeEvery(CREATE_POST, watchCreatePost),
        takeEvery(DELETE_POST, watchDeletePost),
        // takeEvery(RESET_COUNTER, watchResetCounter)
    ]);
}
