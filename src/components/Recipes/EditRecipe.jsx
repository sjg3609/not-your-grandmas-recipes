import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import './AddRecipe.css';


function EditRecipe() {

    const { id } = useParams();
    const recipe = useSelector(store => store.recipeDetails);
    const categories = useSelector(store => store.categoryReducer);
    const history = useHistory();
    const dispatch = useDispatch();
    const [categoryId, setCategoryId] = useState({ id });
    const [recipeName, setRecipeName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');

    const fetchCategories = () => {
        dispatch({ type: 'FETCH_CATEGORIES' });
    }

    useEffect(() => {
        fetchCategories();
    }, []);



    const submitRecipe = (event) => {
        event.preventDefault();
        dispatch({ type: 'SET_RECIPE' });
    }

    const goBack = () => {
        history.goBack();
    }

    return (
        <div >
            <h1>Edit Recipe!</h1>
            <form className="addRecipes">
                    Category:
                    <br />
                    <select onChange={(event) => setCategoryId(event.target.value)}>
                        {
                            categories.map(category => {
                                return (
                                    <option key={category.id}>{category.description}</option>
                                )
                            })
                        }
                    </select>
                    Recipe Name:
                    <br />
                    <input type="text" placeholder="Recipe Name" onChange={(event) => setRecipeName(event.target.value)} value={recipe.recipe_name} />
                    Ingredients:
                    <br />
                    <textarea type="text" placeholder="Ingredients" value={ingredients} onChange={(event) => setIngredients(event.target.value)} value={recipe.ingredients}></textarea>
                    Instructions:
                    <br />
                    <textarea type="text" placeholder="Instructions" value={instructions} onChange={(event) => setInstructions(event.target.value)} value={recipe.instructions}></textarea>
            </form>
            <button onClick={goBack} style={{ float: 'left', margin: '40px' }}>Go Back</button>
            <button onClick={() => submitRecipe()} style={{ float: 'right', margin: '40px' }}>Submit</button>
        </div>
    )
}

export default EditRecipe;