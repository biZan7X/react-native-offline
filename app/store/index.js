//& REDUX
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
//& SAGA
import createSagaMiddleware from '@redux-saga/core';
//& OFFLINE SUPPORT
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import reducers from '../reducer';
import middlewares from '../sagas';

const sagaMiddlewares = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(sagaMiddlewares)),
);

sagaMiddlewares.run(middlewares);

export const persistor = persistStore(store);
