import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import axios from 'axios';


function AddNewNote() {

    const { id } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const [newNoteToAdd, setNewNoteToAdd] = useState({ note: ''});
    const note = useSelector(store => store.noteReducer);


    const newNote = (event) => {
        event.preventDefault();
        setNewNoteToAdd({...newNoteToAdd, note: event.target.value });
    }

    const submitNote = () => {
        dispatch({ type: 'NEW_NOTE', payload: newNoteToAdd, setNewNoteToAdd: setNewNoteToAdd });
        history.goBack();
    }

    console.log('Checking note', note);


    const goBack = () => {
        history.goBack();
    }

    return (
        <div>

            <form>
                <div className="notesField">
                    Notes:
                    <br />
                    <input type="text" value={newNoteToAdd.note} placeholder="Enter Notes" style={{ width: '60%', height: '100px', padding: '12px 20px' }} onChange={newNote} />
                </div>
            </form >
            <button onClick={() => submitNote()} style={{ float: 'right', margin: '40px' }}>Submit</button>
            <button onClick={goBack}>Go Back</button>
        </div >
    )
}

export default AddNewNote;