import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* getRecipes() {
    try {
        const recipes = yield axios.get('/api/recipes');
        yield put({ type: 'SET_RECIPES', payload: recipes.data });
    } catch {
        console.log('Get all error');
    }
}

function* recipeDetails(action) {
    try {
        const recipe = yield axios.get(`/api/recipes/${action.payload}`)
        if (recipe.data.length > 0) {
            yield put({ type: 'SET_DETAILS', payload: recipe.data[0] });
        }
    } catch (error) {
        console.log(`Error in recipeDetails ${error}`);
    }
}

function* recipeSaga() {
    yield takeEvery('FETCH_RECIPES', getRecipes);
    yield takeEvery('FETCH_DETAILS', recipeDetails);
}

export default recipeSaga;