import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* getNotes(action) {
    try {
        const notes = yield axios.get(`/api/notes/${action.payload}`);
        yield put({ type: 'NOTE_DETAILS', payload: notes.data });
        // Trying to conditionally show only the notes that are present in database for each recipe
        // if (notes.data = []) {
        //     console.log('Checking notes in getNotes', notes.data[0])
        //     yield put({ type: 'NOTE_DETAILS', payload: notes.data });
        // } else {
        //     yield put({ type: 'NOTE DETAILS', payload: notes.data });
        // }
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