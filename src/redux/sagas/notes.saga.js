import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* getNotes(action) {
    try {
        const notes = yield axios.get(`/api/notes/${action.payload}`);
        if (notes.data.length > 0) {
            console.log('Checking notes', notes.data[0])
            yield put({ type: 'NOTE_DETAILS', payload: notes.data });
        } else if (notes.data.length = []) {
            yield put({ type: 'NOTE DETAILS', payload: [] });
        }
    } catch (error) {
        console.log(`Error in getNotes ${error}`);
    }
}

function* addNewNote(action) {
    try {
        yield axios.post(`/api/notes`, action.payload);
    } catch (error) {
        console.log(`Error in addNewNote ${error}`);
        alert('Something went wrong!');
    }
}

function* deleteNote(action) {
    try {
        yield axios.delete(`/api/notes/${action.payload}`)
    } catch (error) {
        console.log(`Error in deleteNote ${error}`);
        alert('Something went wrong!');
    }
}

function* notesSaga() {
    yield takeEvery( 'FETCH_NOTES', getNotes);
    yield takeEvery('NEW_NOTE', addNewNote);
    yield takeEvery('DELETE_NOTE', deleteNote);
}

export default notesSaga;