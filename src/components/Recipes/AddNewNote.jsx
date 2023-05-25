import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';


function AddNewNote() {

    const { id } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const note = useSelector(store => store.noteReducer);


    const newNote = (event) => {
        event.preventDefault();
        dispatch({ type: 'NEW_NOTE ', payload: event.target.value });
    }

    const submitNote = () => {
        axios.post(`/api/recipes/${id}`).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(`Error in POST for notes ${error}`);
            alert('Something went wrong!');
        })
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
                    <input type="text" placeholder="Enter Notes" style={{ width: '60%', height: '100px', padding: '12px 20px' }} onChange={newNote} />
                </div>
            </form >
            <button onClick={() => submitNote()} style={{ float: 'right', margin: '40px' }}>Submit</button>
            <button onClick={goBack}>Go Back</button>
        </div >
    )
}

export default AddNewNote;