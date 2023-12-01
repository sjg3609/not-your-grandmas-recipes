import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
// import './AddRecipe.css';
import { TextField, Button, FormControl } from '@mui/material';


function EditRecipe() {

    const { id } = useParams();
    const recipe = useSelector(store => store.recipeDetails);
    const history = useHistory();
    const dispatch = useDispatch();
    const [recipeName, setRecipeName] = useState(recipe.recipe_name);
    const [ingredients, setIngredients] = useState(recipe.ingredients);
    const [instructions, setInstructions] = useState(recipe.instructions);


    useEffect(() => {
        if (recipe.length > 0) {
            console.log('recipe is present');
        }
    }, []);


    const submitRecipe = (id) => {
        console.log(recipeName, ingredients, instructions);
        dispatch({
            type: 'UPDATE_RECIPE',
            payload: {
                recipe_name: recipeName,
                ingredients: ingredients,
                instructions: instructions,
                id: id
            }
        });
        history.goBack();
    }

    const goBack = () => {
        history.goBack();
    }



    return (
        <div className="editRecipes">
            <center>
                <h1>Editing {recipe.recipe_name}</h1>
                <br />
                <br />
                <FormControl fullWidth >
                    <h2>Recipe Name:</h2>
                    <br />
                    <TextField type="text" placeholder="Recipe Name" value={recipeName} onChange={(event) => setRecipeName(event.target.value)}></TextField>
                    <br />
                    <h2>Ingredients:</h2>
                    <br />
                    <TextField multiline rows={15} sx={{ width: '800px' }} type="text" placeholder="Ingredients" value={ingredients} onChange={(event) => setIngredients(event.target.value)} ></TextField>
                    <br />
                    <h2>Instructions:</h2>
                    <br />
                    <TextField multiline rows={15} sx={{ width: '800px' }} type="text" placeholder="Instructions" value={instructions} onChange={(event) => setInstructions(event.target.value)} ></TextField>
                </FormControl>
                <br />
                <br />
                <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <Button variant="contained" onClick={goBack} style={{}}>Go Back</Button>
                    {'  '}
                    <Button variant="contained" onClick={() => submitRecipe(id)} style={{}}>Submit</Button>
                </div>

            </center>

        </div>
    )
}

export default EditRecipe;