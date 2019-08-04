import { all, takeEvery } from 'redux-saga/effects';

import { REHYDRATE } from 'redux-persist';
import { watchRehydrate } from './modules/rehydrate'
import { LOAD_USER, LOAD_USERS, watchLoadUser, watchLoadUsers } from './modules/users';
// import { RESET_COUNTER, watchResetCounter } from "./modules/counter";
import { LOAD_COMMENTS, watchLoadComments } from './modules/comments';

export default function* root(store) {
    yield all([
        takeEvery(REHYDRATE, watchRehydrate, store),
        takeEvery(LOAD_USERS, watchLoadUsers),
        takeEvery(LOAD_COMMENTS, watchLoadComments),
        takeEvery(LOAD_USER, watchLoadUser)
        // takeEvery(RESET_COUNTER, watchResetCounter)
    ]);
}
