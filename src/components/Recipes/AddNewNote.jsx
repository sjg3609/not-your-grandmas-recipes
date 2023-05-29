import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import axios from 'axios';


function AddNewNote() {

    const { id } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const [newNoteToAdd, setNewNoteToAdd] = useState('');
    // const note = useSelector(store => store.noteReducer);


    const submitNote = () => {
        dispatch({ type: 'NEW_NOTE', payload: { notes: newNoteToAdd }});
        // history.goBack();
    }

    // console.log('Checking note', note);


    const goBack = () => {
        history.goBack();
    }

    return (
        <div>
            <h3 style={{ textAlign: 'center' }}>Add Note:</h3>
            <form>
                <div className="addNotes">
                    <input type="text" value={newNoteToAdd} onChange={(event) => setNewNoteToAdd(event.target.value)} placeholder="Enter Notes" style={{ width: '60%', height: '100px', padding: '12px 20px' }} />
                </div>
            </form >
            <button onClick={() => submitNote()} style={{ float: 'right', margin: '40px' }}>Submit</button>
            <button onClick={goBack} style={{ float: 'left', margin: '40px' }}>Go Back</button>
        </div >
    )
}

export default AddNewNote;