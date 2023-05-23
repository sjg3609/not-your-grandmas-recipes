import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import RecipeCard from './RecipeCard';


function RecipesPage() {

    const dispatch = useDispatch();
    const history = useHistory();
    const recipes = useSelector(store => store.recipesReducer);
    const categories = useSelector(store => store.categoryReducer);
    const [recipeCategory, setRecipeCategory] = useState();
    const { id } = useParams();

    console.log('Checking for recipes', recipes);
    console.log('Check categories', categories);

    const fetchCategories = () => {
        dispatch({ type: 'FETCH_CATEGORIES' });
    }

    useEffect(() => {
        // dispatch({ type: 'FETCH_RECIPES' });
        fetchCategories();
    }, []);

    const getRecipes = (id) => {
        console.log('In getRecipes for categories')
        dispatch({ type: 'FETCH_RECIPES', payload: id });
        // history.push('/recipeCard');
    }

    const recipeDetails = (id) => {
        console.log('In recipeDetails');
        history.push(`/recipeCard/${id}`)
    }

    return (
        <div>
            <h1>Recipes</h1>
            <h4>Categories</h4>
            <nav className="recipePage">
                {
                    categories.map(category => {
                        return (
                            <ul>
                                <l1 onClick={() => getRecipes(category.id) }>{category.description}</l1>
                            </ul>
                        )
                    })
                }
            </nav>
            <div className="recipes">
                {
                    recipes.map(recipe => {
                        return (
                            <div key={recipe.id}>
                                <h3 onClick={() => recipeDetails(recipe.id)}>{recipe.recipe_name}</h3>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default RecipesPage;