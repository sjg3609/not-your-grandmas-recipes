import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* getCategories() {
    try {
        const categories = yield axios.get('/api/categories');
        yield put({ type: 'SET_CATEGORIES', payload: categories.data })
    } catch {
        console.log('GET all categories error')
    }
}

function* categorySaga() {
    yield takeEvery('FETCH_CATEGORIES', getCategories);
}

export default categorySaga;