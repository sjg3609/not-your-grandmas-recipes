import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* editRecipe(action) {
    try {
        yield axios.put(`/api/recipes`, action.payload);
        yield put({ type: 'FETCH_RECIPES'});
    } catch (error) {
        console.log(`Error in PUT for editRecipe`, error);
    }
}


function* editRecipeSaga() {
    yield takeEvery('UPDATE_RECIPE', editRecipe)
}

export default editRecipeSaga;