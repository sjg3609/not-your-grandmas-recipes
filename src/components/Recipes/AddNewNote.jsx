import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';


function AddNewNote() {

    const { id } = useParams();
    const history = useHistory();

    const submitNote = () => {
        axios.put(`/api/recipes/${id}`).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(`Error in PUT for notes ${error}`);
            alert('Something went wrong!');
        })
    }


    const goBack = () => {
        history.goBack();
    } 
    
    return (
        <div>
            
            <form>
                <div className="notesField">
                    Notes:
                    <br />
                    <input type="text" placeholder="Enter Notes" style={{ width: '60%', height: '100px', padding: '12px 20px' }} />
                </div>
            </form >
            <button type="submit" onClick={() => submitNote()} style={{ float: 'right', margin: '40px' }}>Submit</button>
            <button onClick={goBack}>Go Back</button>
        </div >
    )
}

export default AddNewNote;