import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';


function RecipeCard() {

    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    const recipe = useSelector(store => store.recipesReducer);

    useEffect(() => {
        dispatch({ type: 'FETCH_RECIPES' });
    }, [])

    const goBack = () => {
        history.goBack('/recipes');
    }

    return (
        <div className="recipeCard">
            <h1>Recipe Card</h1>
            <button onClick={goBack}>Go Back</button>
            <h3>{recipe.recipe_name}</h3>
            <p>{recipe.ingredients}</p>
            <p>{recipe.instructions}</p>
            <p>{recipe.notes}</p>
            <button>Add Note</button>
            <button>Edit Recipe</button>
            <button>Delete Recipe</button>
        </div>
    )
}

export default RecipeCard;