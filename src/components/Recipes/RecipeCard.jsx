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
        history.goBack();
    }

    return (
        <div className="recipeCard">
            <h1>Recipe Card {id} </h1>
            <button onClick={goBack}>Go Back</button>
            <div key={recipes.id}>
                <h3>{recipes.recipe_name}</h3>
                <h4>Ingredients</h4>
                <p>{recipes.ingredients}</p>
                <h4>Instructions</h4>
                <p>{recipes.instructions}</p>
                <h4>Notes:</h4>
                <p>{recipes.notes}</p>
                <button>Add Note</button>
                <button>Edit Recipe</button>
                <button>Delete Recipe</button>
            </div>
            {/* {
                recipes.map(recipe => {
                    return (
                       
                    )
                })
            } */}

        </div>
    )
}

export default RecipeCard;