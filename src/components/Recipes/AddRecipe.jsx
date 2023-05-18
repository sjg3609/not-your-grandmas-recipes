import { useState, useEffect } from 'react-redux';
import { useDispatch } from 'react-redux';



function AddRecipe() {

    const dispatch = useDispatch();

    const handleRecipeName = (event) => {
        event.preventDefault();
        const action = { type: 'SET_RECIPE_NAME', payload: event.target.value };
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

    const submitRecipe = (event) => {
        event.preventDefault();
        dispatch({ type: 'SET_RECIPE' });
    }

    return (
        <div className="addRecipes">
            <h1>Add Recipe!</h1>
            <form>
                Category:
                <br />
                <input type="text" placeholder="Category" />
                <br />
                Recipe Name:
                <br />
                <input type="text" placeholder="Recipe Name" onChange={handleRecipeName} />
                <br />
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
                <div className="instructionsFields">
                    Instructions:
                    <br />
                    <input type="text" placeholder="Instructions" onChange={handleInstructionsChange} />
                    <br />
                    <input type="text" placeholder="Instructions" onChange={handleInstructionsChange}/>
                    <br />
                    <input type="text" placeholder="Instructions" onChange={handleInstructionsChange}/>
                    <br />
                    <input type="text" placeholder="Instructions" onChange={handleInstructionsChange}/>
                    <br />
                    <input type="text" placeholder="Instructions" onChange={handleInstructionsChange}/>
                    <br />
                    <input type="text" placeholder="Instructions" onChange={handleInstructionsChange}/>
                    <br />
                    <input type="text" placeholder="Instructions" onChange={handleInstructionsChange}/>
                    <br />
                    <input type="text" placeholder="Instructions" onChange={handleInstructionsChange}/>
                    <br />
                </div>
                <input type="submit" onSubmit={submitRecipe} />
            </form>
        </div>
    )
}

export default AddRecipe;