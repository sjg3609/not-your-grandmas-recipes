import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* addNewRecipe(action) {
    try {
        yield axios.post('/api/recipes', action.payload);
        yield put({ type: 'SET_RECIPE' });
    } catch (error) {
        console.log(`Error in addNewRecipe POST recipes ${error}`);
    }
}

function* addNewRecipeSaga() {
    yield takeEvery('SET_NEW_RECIPE', addNewRecipe);
}

export default addNewRecipeSaga;