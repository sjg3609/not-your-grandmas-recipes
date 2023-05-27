import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import './AddRecipe.css';


function AddRecipe() {

    const dispatch = useDispatch();
    const user = useSelector(store => store.user);
    const categories = useSelector(store => store.categoryReducer);

    // const [newRecipe, setNewRecipe] = useState();

    const fetchCategories = () => {
        dispatch({ type: 'FETCH_CATEGORIES' });
    }

    useEffect(() => {
        fetchCategories();
    }, []);

    console.log(`Checking for categories`, categories);

    const handleRecipeName = (event) => {
        event.preventDefault();
        const action = { type: 'SET_RECIPE_NAME', payload: event.target.value };
        dispatch(action);
    }

    const handleIngredientChange = (event) => {
        event.preventDefault();
        const action = { type: 'SET_INGREDIENTS', payload: event.target.value };
        dispatch(action);
    }

    const handleInstructionsChange = (event) => {
        event.preventDefault();
        const action = { type: 'SET_INSTRUCTIONS', payload: event.target.value };
        dispatch(action);
    }

    const categoryChange = (event) => {
        dispatch({ type: 'SET_CATEGORY', payload: event.target.value });
    }

    // Was trying to see if I could get it to push without using the async await first and it still is not working as intended
    const submitRecipe = (event) => {
        // dispatch({ type: 'SET_NEW_RECIPE' });
        // event.preventDefault();
        // dispatch({ type: 'SET_RECIPE' });
        axios({
            method: 'POST',
            url: '/api/recipes',
            data: {
                user_id: user.id,
                category: categoryChange,
                recipe_name: handleRecipeName,
                ingredients: handleIngredientChange,
                instructions: handleInstructionsChange,

            }
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(`Error in POST for newRecipe ${error}`)
            alert('Something went wrong!');
        })
    }

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
                                <option key={category.id}>{category.description}</option>
                            )
                        })
                    }
                </select>

                Recipe Name:
                <br />
                <input type="text" placeholder="Recipe Name" onChange={handleRecipeName} />
                Ingredients:
                <br />
                <textarea type="text" placeholder="Ingredients" onChange={handleIngredientChange}>
                </textarea>
                Instructions:
                <br />
                <textarea type="text" placeholder="Instructions" onChange={handleInstructionsChange}></textarea>
                <br />
            </form>
            <button onClick={() => submitRecipe()} style={{ float: 'right', margin: '40px' }}>Submit</button>
        </div>
    )
}

export default AddRecipe;