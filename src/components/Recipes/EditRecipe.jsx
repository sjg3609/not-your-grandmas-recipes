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
    // const [categoryId, setCategoryId] = useState({ id });
    const [recipeName, setRecipeName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');

    const fetchCategories = () => {
        dispatch({ type: 'FETCH_CATEGORIES' });
    }

    useEffect(() => {
        fetchCategories();
    }, []);



    const submitRecipe = (id) => {
        dispatch({ type: 'UPDATE_RECIPE', payload:{ recipeId: id, recipe_name: recipeName, ingredients: ingredients, instructions: instructions }});
    }

    const goBack = () => {
        history.goBack();
    }

    return (
        <div >
            <h1>Edit {recipe.recipe_name}!</h1>
            <form className="editRecipes">
                {/* Going to comment this out because I don't want users to be able to change the categories in here */}
                    {/* Category:
                    <br />
                    <select onChange={(event) => setCategoryId(event.target.value)}>
                        {
                            categories.map(category => {
                                return (
                                    <option key={category.id}>{category.description}</option>
                                )
                            })
                        }
                    </select> */}
                    Recipe Name:
                    <br />
                    <br/>
                    <textarea type="text" placeholder="Recipe Name" defaultValue={recipe.recipe_name} onChange={(event) => setRecipeName(event.target.value)}></textarea>
                    <br/>
                    <br />
                    Ingredients:
                    <br />
                    <br/>
                    <textarea type="text" placeholder="Ingredients" defaultValue={recipe.ingredients} onChange={(event) => setIngredients(event.target.value)} ></textarea>
                    <br/>
                    <br />
                    Instructions:
                    <br />
                    <br />
                    <textarea type="text" placeholder="Instructions" defaultValue={recipe.instructions} onChange={(event) => setInstructions(event.target.value)} ></textarea>
            </form>
            <button onClick={goBack} style={{ float: 'left', margin: '40px' }}>Go Back</button>
            <button onClick={() => submitRecipe()} style={{ float: 'right', margin: '40px' }}>Submit</button>
        </div>
    )
}

export default EditRecipe;