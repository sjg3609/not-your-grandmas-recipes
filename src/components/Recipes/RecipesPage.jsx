import { Link } from 'react-router-dom';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import RecipeCard from './RecipeCard';


function RecipesPage() {

    const dispatch = useDispatch();
    const recipes = useSelector(store => store.recipesReducer);
    const categories = useSelector(store => store.categoryReducer);

    console.log('Checking for recipes', recipes);
    console.log('Check categories', categories);

    const fetchCategories = () => {
        dispatch({ type: 'FETCH_CATEGORIES' });
    }

    useEffect(() => {
        dispatch({ type: 'FETCH_RECIPES' });
        fetchCategories();
    }, []);

    return (
        <div>
            <h1>Recipes</h1>
            <h4>Categories</h4>
            <nav className="recipePage"> 
                    {
                        categories.map(category => {
                            return (
                                <ul>
                                    <l1>{category.description}</l1>
                                </ul>
                            )
                        })
                    }
            </nav>
        </div>
    )
}

export default RecipesPage;