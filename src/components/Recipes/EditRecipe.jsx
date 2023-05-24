import { useState, useEffect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import './AddRecipe.css';


function EditRecipe() {

    const recipes = useSelector(store => store.recipesReducer);
    const category = useSelector (store => store.categoryReducer);

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
        <div >
            <h1>Edit Recipe!</h1>
            <form className="addRecipes">
                <div className="categoryDiv"> 
                    Category:
                    <br />
                    <input type="text" placeholder="Category" onChange={categoryChange} defaultValue={category.description}/>
                    <br />
                    Recipe Name:
                    <br />
                    <input type="text" placeholder="Recipe Name" onChange={handleRecipeName} value={recipes.recipe_name}/>
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
                Notes:
                <div className="notesField">
                    <input type="text" placeholder="Enter Notes" />
                </div>
            </form>
            <button type="submit" onClick={() => submitRecipe()} style={{float: 'right', margin: '40px'}}>Submit</button>
        </div>
    )
}

export default EditRecipe;