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

    useEffect(() => {
        dispatch({ type: 'FETCH_DETAILS', payload: id });
    }, []);

    const deleteRecipe = (id) => {
        axios.delete(`/api/recipes/${id}`).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(`Error in DELETE ${error}`);
            alert('Something went wrong!');
        })
    }

    const addNote = () => {
        axios.put(`/api/recipes`).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(`Error in PUT for notes ${error}`);
            alert('Something went wrong!');
        })
    }

    const editRecipe = (id) => {
        history.push(`/editRecipe/${id}`);

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
                <button onClick={editRecipe}>Edit Recipe</button>
                <button onClick={deleteRecipe}>Delete Recipe</button>
            </div>
        </div>
    )
}

export default RecipeCard;