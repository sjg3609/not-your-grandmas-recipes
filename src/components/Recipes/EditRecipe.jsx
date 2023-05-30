import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import './AddRecipe.css';


function EditRecipe() {

    const { id } = useParams();
    const recipe = useSelector(store => store.recipeDetails);
    const history = useHistory();
    const dispatch = useDispatch();
    const [recipeName, setRecipeName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');


    useEffect(() => {

    }, []);



    const submitRecipe = () => {
        dispatch({
            type: 'UPDATE_RECIPE',
            payload: {
                // id: id,
                recipe_name: recipeName,
                ingredients: ingredients,
                instructions: instructions,
            }
        });
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
                <br />
                <textarea type="text" placeholder="Recipe Name" defaultValue={recipe.recipe_name} onChange={(event) => setRecipeName(event.target.value)}></textarea>
                <br />
                <br />
                Ingredients:
                <br />
                <br />
                <textarea type="text" placeholder="Ingredients" defaultValue={recipe.ingredients} onChange={(event) => setIngredients(event.target.value)} ></textarea>
                <br />
                <br />
                Instructions:
                <br />
                <br />
                <textarea type="text" placeholder="Instructions" defaultValue={recipe.instructions} onChange={(event) => setInstructions(event.target.value)} ></textarea>
            </form>
            <br />
            <button onClick={goBack} style={{ float: 'left', marginLeft: '45%' }}>Go Back</button>
            <button onClick={() => submitRecipe(id)} style={{ float: 'right', marginRight: '45%' }}>Submit</button>
        </div>
    )
}

export default EditRecipe;