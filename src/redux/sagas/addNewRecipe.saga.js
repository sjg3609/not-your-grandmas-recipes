import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* addNewRecipe() {
    try {
        const newRecipe = yield axios.post('/api/recipes');
        yield put({ type: 'SET_RECIPE', payload: newRecipe });
    } catch (error) {
        console.log(`Error in addNewRecipe POST recipes ${error}`);
    }
}

function* addNewRecipeSaga() {
    yield takeEvery('SET_NEW_RECIPE', addNewRecipe);
}

export default addNewRecipeSaga;