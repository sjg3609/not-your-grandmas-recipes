import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';


function RecipeCard() {

    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    const recipes = useSelector(store => store.recipesReducer);

    console.log(recipes);

    useEffect(() => {
        dispatch({ type: 'FETCH_DETAILS', payload: id });
    }, [])

    const goBack = () => {
        history.goBack('/recipes');
    }

    return (
        <div className="recipeCard">
            <h1>Recipe Card {id} </h1>
            <button onClick={goBack}>Go Back</button>
            {
                recipes.map(recipe => {
                    return (
                        <div key={recipe.id}>
                            <h3>{recipe.recipe_name}</h3>
                            <h4>Ingredients</h4>
                            <p>{recipe.ingredients}</p>
                            <h4>Instructions</h4>
                            <p>{recipe.instructions}</p>
                            <h4>Notes:</h4>
                            <p>{recipe.notes}</p>
                            <button>Add Note</button>
                            <button>Edit Recipe</button>
                            <button>Delete Recipe</button>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default RecipeCard;