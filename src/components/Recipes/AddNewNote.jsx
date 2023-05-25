import { useParams } from 'react-router-dom';
import axios from 'axios';


function AddNewNote() {

    const { id } = useParams();

    const submitNote = () => {
        axios.put(`/api/recipes/${id}`).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(`Error in PUT for notes ${error}`);
            alert('Something went wrong!');
        })
    }

    return (
        <div>
            <form>
                <div className="notesField">
                    Notes:
                    <br />
                    <input type="text" placeholder="Enter Notes" />
                </div>
            </form >
            <button type="submit" onClick={() => submitNote()} style={{ float: 'right', margin: '40px' }}>Submit</button>
        </div >
    )
}

export default AddNewNote;