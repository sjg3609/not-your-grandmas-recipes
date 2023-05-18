import { useState, useEffect } from 'react-redux';
import { useDispatch } from 'react-redux';
import './AddRecipe.css';


function AddRecipe() {

    const dispatch = useDispatch();

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

    const submitRecipe = (event) => {
        event.preventDefault();
        dispatch({ type: 'SET_RECIPE' });
    }

    return (
        <div className="addRecipes">
            <h1>Add Recipe!</h1>
            <form>
                <div className="categoryDiv"> 
                    Category:
                    <br />
                    <input type="text" placeholder="Category" onChange={categoryChange} />
                    <br />
                    Recipe Name:
                    <br />
                    <input type="text" placeholder="Recipe Name" onChange={handleRecipeName} />
                    <br />
                </div>
               
                <div className="ingredientsFields">
                    Ingredients:
                    <br />
                    <input type="text" placeholder="Ingredients" onChange={handleIngredientChange} />
                    <br />
                    <input type="text" placeholder="Ingredients" onChange={handleIngredientChange} />
                    <br />
                    <input type="text" placeholder="Ingredients" onChange={handleIngredientChange} />
                    <br />
                    <input type="text" placeholder="Ingredients" onChange={handleIngredientChange} />
                    <br />
                    <input type="text" placeholder="Ingredients" onChange={handleIngredientChange} />
                    <br />
                    <input type="text" placeholder="Ingredients" onChange={handleIngredientChange} />
                    <br />
                    <input type="text" placeholder="Ingredients" onChange={handleIngredientChange} />
                    <br />
                    <input type="text" placeholder="Ingredients" onChange={handleIngredientChange} />
                    <br />
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                Instructions:
                <div className="instructionsFields">
                    <input type="text" placeholder="Instructions" onChange={handleInstructionsChange} />
                    <br />
                    <input type="text" placeholder="Instructions" onChange={handleInstructionsChange} />
                    <br />
                    <input type="text" placeholder="Instructions" onChange={handleInstructionsChange} />
                    <br />
                    <input type="text" placeholder="Instructions" onChange={handleInstructionsChange} />
                    <br />
                    <input type="text" placeholder="Instructions" onChange={handleInstructionsChange} />
                    <br />
                    <input type="text" placeholder="Instructions" onChange={handleInstructionsChange} />
                    <br />
                    <input type="text" placeholder="Instructions" onChange={handleInstructionsChange} />
                    <br />
                    <input type="text" placeholder="Instructions" onChange={handleInstructionsChange} />
                    <br />
                </div>
                <input type="submit" onSubmit={submitRecipe} />
            </form>
        </div>
    )
}

export default AddRecipe;