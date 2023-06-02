import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* getCategories() {
    try {
        const categories = yield axios.get('/api/categories');
        yield put({ type: 'SET_CATEGORIES', payload: categories.data });
    } catch {
        console.log('GET all categories error')
    }
}

function* getRecipesByCategories(action) {
    try {
        const recipes = yield axios.get(`/api/categories/${action.payload}`);
        yield put({ type: 'SET_RECIPE_BY_CATEGORY', payload: recipes.data});
    } catch (error) {
        console.log(`Error in categories for recipes ${error}`)
    }
}

function* categorySaga() {
    yield takeEvery('FETCH_CATEGORIES', getCategories);
    yield takeEvery('FETCH_RECIPES_BY_CAT', getRecipesByCategories);
}

export default categorySaga;