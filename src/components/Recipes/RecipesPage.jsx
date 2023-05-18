import { Link } from 'react-router-dom';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import RecipeCard from './RecipeCard';


function RecipesPage() {

    const dispatch = useDispatch();
    const recipes = useSelector(store => store.recipes);

    console.log('Checking for recipes', recipes);

    useEffect(() => {
        dispatch({ type: 'FETCH_RECIPES' });
    }, []);

    return (
        <div>
            <h1>Recipes</h1>
            <nav className="recipePage"> Categories
                <ul>
                    <li><Link>Breakfast</Link></li>
                    <li><Link>Casseroles</Link></li>
                    <li><Link>Desserts</Link></li>
                </ul>
            </nav>
            {/* {
                recipes.map(recipe => {
                    return (
                        <div key={recipe.id}>
                            <h4>{recipe.name}</h4>
                            <h5>{recipe.ingredients}</h5>
                            <h5>{recipe.instructions}</h5>
                            <h5>{recipe.notes}</h5>
                        </div>
                    )

                })
            } */}
            <RecipeCard />
        </div>
    )
}

export default RecipesPage;