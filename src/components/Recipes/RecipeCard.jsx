import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

function RecipeCard() {

    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    const recipe = useSelector(store => store.recipeDetails);

    console.log('Checking recipe details', recipe);

    const fetchDetails = () => {
        dispatch({ type: 'FETCH_DETAILS', payload: id });
    }

    useEffect(() => {
        dispatch({ type: 'FETCH_DETAILS', payload: id });
    }, []);

    const deleteRecipe = () => {
        axios.delete(`/api/recipes/${recipe.id}`).then((response) => {
            console.log(response);
            fetchDetails()
            history.goBack();
        }).catch((error) => {
            console.log(`Error in DELETE ${error}`);
            alert('Something went wrong!');
        })
    }

    const addNote = () => {
        history.push(`/addNote/${id}`);
        // TODO: Finish this so that the notes push to /recipes
    }

    const editRecipe = (id) => {
        history.push(`/editRecipe/${id}`);
        // TODO: Finish this so that the forms prepopulate with the data from the recipe card
    }

    const goBack = () => {
        history.goBack();
    }

    return (
        <div className="recipeCard">
            <h1>Recipe Card {id} </h1>
            <button onClick={goBack}>Go Back</button>
            <div key={recipe.id}>
                <h3>{recipe.recipe_name}</h3>
                <h4>Ingredients</h4>
                <p>{recipe.ingredients}</p>
                <h4>Instructions</h4>
                <p>{recipe.instructions}</p>
                <h4>Notes:</h4>
                <p>{recipe.notes}</p>
                <button onClick={addNote}>Add Note</button>
                <button onClick={() => editRecipe(recipe.id)}>Edit Recipe</button>
                <button onClick={deleteRecipe}>Delete Recipe</button>
            </div>
        </div>
    )
}

export default RecipeCard;