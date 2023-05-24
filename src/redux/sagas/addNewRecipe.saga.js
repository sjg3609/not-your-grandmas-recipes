import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* addNewRecipe() {
    try {
        const newRecipe = yield axios.post('/api/recipes');
        yield put({ type: 'SET_RECIPE', payload: newRecipe });
    } catch (error) {
        console.log(`Error in POST recipes ${error}`);
    }
}

export default addNewRecipe;