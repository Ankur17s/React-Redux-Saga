import { takeEvery, put } from 'redux-saga/effects'
import { PRODUCT_LISTING, SEARCH_PRODUCT, SET_PRODUCT_LIST } from './constant';

function* getproducts() {
    let data = yield fetch('http://localhost:3000/products')
    data = yield data.json();
    // console.log("call api here", data);
    yield put({type: SET_PRODUCT_LIST, data: data})
}

function* searchProducts(data) {
    let result = yield fetch(`http://localhost:3000/products?q=${data.query}`);
    result = yield result.json();
    console.log("search is working", data);
    yield put({type: SET_PRODUCT_LIST, data: result})
}

function* productSaga() {
    yield takeEvery(PRODUCT_LISTING, getproducts);
    yield takeEvery(SEARCH_PRODUCT, searchProducts);
}

export default productSaga;