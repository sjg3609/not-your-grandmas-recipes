import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { Paper, Button } from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

function RecipeCard() {

    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    const recipe = useSelector(store => store.recipeDetails);
    const recipeNotes = useSelector(store => store.noteReducer);


    useEffect(() => {
        dispatch({ type: 'FETCH_DETAILS', payload: id });
        dispatch({ type: 'FETCH_NOTES', payload: id });
        // fetchNotes();
        console.log(recipeNotes);
        if (recipeNotes.length > 0) {
            console.log('Notes are set')
        }
    }, [id]);


    const deleteRecipe = () => {
        axios.delete(`/api/recipes/${recipe.id}`).then((response) => {
            console.log(response);
            history.goBack();
        }).catch((error) => {
            console.log(`Error in DELETE ${error}`);
            alert('Something went wrong!');
        });
        // deleteNote();
    }


    const addNote = (id) => {
        history.push(`/addNote/${id}`);
    }

    const deleteNote = (id) => {
        dispatch({ type: 'DELETE_NOTE', payload: recipeNotes.id })
    }

    const editRecipe = (id) => {
        history.push(`/editRecipe/${id}`);
    }

    const goBack = () => {
        history.goBack('/recipes');
        dispatch({ type: 'FETCH_RECIPES', payload: id });
    }


    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === '#423E3D',
        ...theme.typography.body2,
        padding: theme.spacing(3),
        margin: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        width: 800,
        maxWidth: 'auto',
        maxHeight: 'auto',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    }));

    return (
        <div className="recipeCard">
            <Item>
                <h1>{recipe.recipe_name}</h1>
                <hr /><br />
                <Button variant="contained" onClick={goBack}>Go Back</Button>
                {
                    recipe.length === 0 ? (
                        <div>
                            <h1>Loading...</h1>
                        </div>
                    ) : (
                        <div key={recipe.id}>
                            <h3>Ingredients</h3>
                            <ol style={{ textAlign: 'center', listStylePosition: 'inside' }}>
                                {recipe.ingredients.split(',').map((list, index) => (
                                    <li key={index}>{list.trim()}</li>
                                ))}
                            </ol>
                            <h3>Instructions</h3>
                            <p>{recipe.instructions}</p>

                            {
                                recipeNotes.length === 0 ? (
                                    <></>
                                ) : (
                                    <div className="notesDiv">
                                        {
                                            recipeNotes.map(note =>
                                                <div key={note.id}>
                                                    <h3>Notes:</h3>
                                                    <p>{note.notes}</p>
                                                    <IconButton style={{ alignItems: 'right' }} size="small"><DeleteIcon /></IconButton>
                                                </div>
                                                //  <Button  variant="contained" size="small" onClick={() => deleteNote(note.id)}>Delete</Button>
                                            )
                                        }
                                    </div>
                                )
                            }


                            <br />
                            <div className="recipeCardButtons" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                <Button onClick={() => addNote(recipe.id)}>Add Note</Button>
                                {' '}
                                <Button onClick={() => editRecipe(recipe.id)}>Edit Recipe</Button>
                                {' '}
                                <Button onClick={deleteRecipe}>Delete Recipe</Button>
                                <p style={{ display: 'flex', float: 'right', paddingRight: '20px' }}>Submitted by: {recipe.username}</p>
                            </div>
                            {/* <Button variant="contained" size="small" onClick={() => addNote(recipe.id)}>Add Note</Button>
                            {' '}
                            <Button variant="contained" size="small" onClick={() => editRecipe(recipe.id)}>Edit Recipe</Button>
                            {' '}
                            <Button variant="contained" size="small" onClick={deleteRecipe}>Delete Recipe</Button>
                            <p style={{ display: 'flex', float: 'right', paddingRight: '20px' }}>Submitted by: {recipe.username}</p> */}
                        </div>
                    )
                }
            </Item>

        </div>
    )
}

export default RecipeCard;