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

    const getRecipes = (id) => {
        console.log('In getRecipes for categories')
        dispatch({ type: 'FETCH_RECIPES', payload: id });
    }

    useEffect(() => {
        fetchCategories();
        getRecipes();
    }, []);

    const recipeDetails = (id) => {
        console.log('In recipeDetails');
        history.push(`/recipeCard/${id}`)
    }

    return (
        <div className="recipePage">
            <h1>Recipes</h1>
            <nav className="categoryNav" style={{textalign: 'center',}}>
                {/* Categories */}
                <h4 className="categoriesHeader" style={{padding: '25px', top: '10px'}}>Categories</h4>
                {
                    categories.map(category => {
                        return (
                            <ul className="categories">
                                <l1 onClick={() => getRecipes(category.id)}>{category.description}</l1>
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
                                <h4 onClick={() => recipeDetails(recipe.id)}>{recipe.recipe_name}</h4>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default RecipesPage;