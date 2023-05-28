import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import './AddRecipe.css';


function AddRecipe() {

    const dispatch = useDispatch();
    const user = useSelector(store => store.user);
    const categories = useSelector(store => store.categoryReducer);
    const [categoryId, setCategoryId] = useState({});
    const [recipeName, setRecipeName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');


    const fetchCategories = () => {
        dispatch({ type: 'FETCH_CATEGORIES' });
    }

    useEffect(() => {
        fetchCategories();
        console.log(categoryId);
        if (categories.length > 0) {
            setCategoryId({ id: categories.id })
        }
    }, []);

    // console.log(`Checking for categories`, categories);


    const submitRecipe = (event) => {
        dispatch({
            type: 'SET_NEW_RECIPE', payload: {
                user_id: user.id,
                category_id: categoryId,
                recipe_name: recipeName,
                ingredients: ingredients,
                instructions: instructions,
            }
        });
    }

    console.log(`Checking categoryId`, categoryId);

    return (
        <div>
            <h1>Add Recipe!</h1>
            {
                categories.length === 0 ? (
                    <div>
                        <h1>Loading...</h1>
                    </div>
                ) : (
                    <form className="addRecipes">
                        Category:
                        <br />
                        <select>
                            {
                                categories.map(category => {
                                    return (
                                        <option key={category.id} onChange={(event) => setCategoryId(categories.id)}>{category.description}</option>
                                    )
                                })
                            }
                        </select>
                        <br />
                        <br />
                        Recipe Name:
                        <br />
                        <textarea type="text" placeholder="Recipe Name" value={recipeName} onChange={(event) => setRecipeName(event.target.value)}></textarea>
                        <br />
                        <br />
                        Ingredients:
                        <br />
                        <br />
                        <textarea type="text" placeholder="Ingredients" value={ingredients} onChange={(event) => setIngredients(event.target.value)}></textarea>
                        <br />
                        <br />
                        Instructions:
                        <br />
                        <br />
                        <textarea type="text" placeholder="Instructions" value={instructions} onChange={(event) => setInstructions(event.target.value)}></textarea>
                        <br />
                        <br />
                        <button onClick={() => submitRecipe()} style={{ float: 'right' }}>Submit</button>
                    </form>
                )
            }


        </div >
    )
}

export default AddRecipe;