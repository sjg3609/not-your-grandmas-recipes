import { put, take, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* addNewRecipe() {
    try {
        const newRecipe = yield axios.post('/api/recipes');
        yield put({ type: 'SET_RECIPE', payload: newRecipe });
    } catch (error) {
        console.log(`Error in addNewRecipe POST recipes ${error}`);
    }
}

function* addNewNote(action) {
    try {
        yield axios.post(`/api/recipes`);
        yield put({ type: 'SET_NEW_RECIPE' });
        action.setNewNoteToAdd('');
    } catch (error) {
        console.log(`Error in addNewNote ${error}`);
        alert('Something went wrong!');
    }
}

function* addNewRecipeSaga() {
    yield takeEvery('SET_NEW_RECIPE', addNewRecipe);
    yield takeEvery('NEW_NOTE', addNewNote);
}

export default addNewRecipeSaga;