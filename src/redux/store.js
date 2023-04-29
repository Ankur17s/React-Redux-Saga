// in Store we stores all the redux data 
// import {createStore} from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import productSaga from './productSaga';
import rootReducer from './rootReducer';
import createSagaMiddleware from '@redux-saga/core';

// from here we inject the function to our application

const sagaMiddleware = createSagaMiddleware();
// const store = createStore(rootReducer);
const store = configureStore(
    {
        reducer: rootReducer,
        middleware: () => [sagaMiddleware]
    }
)

sagaMiddleware.run(productSaga)

export default store;