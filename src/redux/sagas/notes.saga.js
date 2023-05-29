import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* getNotes(action) {
    try {
        const notes = yield axios.get(`/apis/notes/${action.payload}`);
        if (notes.data.length > 0) {
            yield put({ type: 'NOTE_DETAILS', payload: notes.data[0] });
        }
    } catch (error) {
        console.log(`Error in getNotes ${error}`);
    }
}

function* addNewNote(action) {
    try {
        yield axios.post(`/api/notes`, action.payload);
        yield put({ type: 'FETCH_RECIPES' });
        action.setNewNoteToAdd('');
    } catch (error) {
        console.log(`Error in addNewNote ${error}`);
        alert('Something went wrong!');
    }
}

function* notesSaga() {
    yield takeEvery( 'FETCH_NOTES', getNotes);
    yield takeEvery('NEW_NOTE', addNewNote);
}

export default notesSaga;