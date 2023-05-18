import { Link } from 'react-router-dom';
import RecipeCard from './RecipeCard';


function RecipesPage() {

    return (
        <>
            <h1>Recipes</h1>
            <nav className="recipePage"> Categories
                <ul>
                    <li><Link>Breakfast</Link></li>
                    <li><Link>Casseroles</Link></li>
                    <li><Link>Desserts</Link></li>
                </ul>
            </nav>
            <RecipeCard />
        </>
    )
}

export default RecipesPage;