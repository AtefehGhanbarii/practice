import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga'
import storage from 'redux-persist/lib/storage';
import reducers from './reducers';
import sagas from './sagas';

export default function create() {
    const persistConfig = {
        key: 'root',
        storage: storage,
        whitelist: ['counter'],
        blacklist: []
    };

    const persistReducers = persistReducer(persistConfig, reducers);
    const sagaMiddleWare = createSagaMiddleware();

    const store =  createStore(persistReducers, applyMiddleware(sagaMiddleWare));
    const persistor = persistStore(store);

    store.rootTask = sagaMiddleWare.run(sagas, store);

    return {
        store,
        persistor
    };
}