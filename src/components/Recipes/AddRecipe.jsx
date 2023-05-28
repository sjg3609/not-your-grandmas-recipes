import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import './AddRecipe.css';


function AddRecipe() {

    const dispatch = useDispatch();
    const user = useSelector(store => store.user);
    const categories = useSelector(store => store.categoryReducer);
    const [categoryId, setCategoryId] = useState({id: categories.id});
    const [recipeName, setRecipeName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');


    const fetchCategories = () => {
        dispatch({ type: 'FETCH_CATEGORIES' });
    }

    useEffect(() => {
        fetchCategories();
    }, []);

    console.log(`Checking for categories`, categories);


    const submitRecipe = (event) => {
        dispatch({ type: 'SET_NEW_RECIPE', payload: {
            user_id: user.id,
            category_id: categoryId,
            recipe_name: recipeName,
            ingredients: ingredients,
            instructions: instructions,
        } });
    }

    console.log(`Checking categoryId`, categoryId);

    return (
        <div>
            <h1>Add Recipe!</h1>
            <form className="addRecipes">
                Category:
                <br />
                <select>
                    {
                        categories.map(category => {
                            return (
                                <option key={category.id} onChange={(event) => setCategoryId(categories.div)}>{category.description}</option>
                            )
                        })
                    }
                </select>
                Recipe Name:
                <br />
                <input type="text" placeholder="Recipe Name" value={recipeName} onChange={(event) => setRecipeName(event.target.value)} />
                Ingredients:
                <br />
                <textarea type="text" placeholder="Ingredients" value={ingredients} onChange={(event) => setIngredients(event.target.value)}></textarea>
                Instructions:
                <br />
                <textarea type="text" placeholder="Instructions" value={instructions} onChange={(event) => setInstructions(event.target.value)}></textarea>
                <br />
            </form>
            <button onClick={() => submitRecipe()} style={{ float: 'right', margin: '40px' }}>Submit</button>
        </div>
    )
}

export default AddRecipe;