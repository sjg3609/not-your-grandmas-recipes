import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { TextField, Button } from '@mui/material';


function AddNewNote() {

    const { id } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const [newNoteToAdd, setNewNoteToAdd] = useState('');
    // const note = useSelector(store => store.noteReducer);
    const user = useSelector(store => store.user);
    const recipe = useSelector(store => store.recipeDetails);

    console.log(recipe.id, user.id);

    const submitNote = () => {
        dispatch({
            type: 'NEW_NOTE', payload: {
                user_id: user.id,
                recipe_id: recipe.id,
                notes: newNoteToAdd
            }
        });
        history.goBack();
    }

    // console.log('Checking note', note);


    const goBack = () => {
        history.goBack();
    }

    return (
        <div className="noteDiv">
            <h2 style={{ textAlign: 'center' }}>Add Note:</h2>
            <form>
                <div className="addNotes">
                    <TextField type="text" value={newNoteToAdd} onChange={(event) => setNewNoteToAdd(event.target.value)} placeholder="Enter Notes" style={{ width: '60%', height: '100px', padding: '12px 20px' }} />
                </div>
            </form >
            <div className='recipeCardButtons'>
                <Button variant="contained" onClick={() => submitNote()} style={{ float: 'right', margin: '40px' }}>Submit</Button>
                <Button variant="contained" onClick={goBack} style={{ float: 'left', margin: '40px' }}>Go Back</Button>

            </div>

        </div >
    )
}

export default AddNewNote;