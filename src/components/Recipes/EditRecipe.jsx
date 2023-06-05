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
    const [recipeName, setRecipeName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');


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
            <h1>Editing {recipe.recipe_name}</h1>
            <FormControl fullWidth >
                Recipe Name:
                <br />
                <br />
                <TextField type="text" placeholder="Recipe Name" defaultValue={recipe.recipe_name} onChange={(event) => setRecipeName(event.target.value)}></TextField>
                <br />
                <br />
                Ingredients:
                <br />
                <br />
                <TextField  multiline rows={15} sx={{width: '800px'}}  type="text" placeholder="Ingredients" defaultValue={recipe.ingredients} onChange={(event) => setIngredients(event.target.value)} ></TextField>
                <br />
                <br />
                Instructions:
                <br />
                <br />
                <TextField multiline rows={15} sx={{width: '800px'}} type="text" placeholder="Instructions" defaultValue={recipe.instructions} onChange={(event) => setInstructions(event.target.value)} ></TextField>
            </FormControl>
            <br />
            <Button onClick={goBack} style={{ float: 'left', marginLeft: '45%' }}>Go Back</Button>
            {'  '}
            <Button onClick={() => submitRecipe(id)} style={{ float: 'right', marginRight: '45%' }}>Submit</Button>
        </div>
    )
}

export default EditRecipe;