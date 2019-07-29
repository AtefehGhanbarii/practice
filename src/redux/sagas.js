import { all, takeEvery } from 'redux-saga/effects';

import { REHYDRATE } from 'redux-persist';
import {watchRehydrate} from './modules/rehydrate'
// import { RESET_COUNTER, watchResetCounter } from "./modules/counter";

export default function* root(store) {
    yield all([
        takeEvery(REHYDRATE, watchRehydrate , store),
        // takeEvery(RESET_COUNTER, watchResetCounter)
    ]);
}
