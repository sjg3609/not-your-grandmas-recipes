import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* getRecipes (action) {
    try {
        const recipes = yield axios.get('/api/recipes');
        yield put({ type: 'SET_RECIPES', payload: recipes.data});
    } catch {
        console.log('Get all error');
    }
}

function* recipeSaga() {
    yield takeEvery('FETCH_RECIPES', getRecipes);
}

export default recipeSaga;