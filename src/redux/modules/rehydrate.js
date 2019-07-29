import {multiadd}  from "./counter";
import {put } from 'redux-saga/effects';

export function* watchRehydrate (store){
    console.log('inja 10 ta ezafe beshe');
    yield store.dispatch(multiadd(15));
}