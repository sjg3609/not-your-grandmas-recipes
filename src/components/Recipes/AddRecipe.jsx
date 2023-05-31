import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './AddRecipe.css';
import { TextField, Button, Select, MenuItem, InputLabel, FormControl } from '@mui/material';


function AddRecipe() {

    const history = useHistory();
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
            setCategoryId(categories[0].id)
        }
    }, []);


    const setCategory = (event) => {
        setCategoryId(event.target.value);
        console.log(event);
    }

    const submitRecipe = () => {
        dispatch({
            type: 'SET_NEW_RECIPE', 
            payload: {
                user_id: user.id,
                category_id: categoryId,
                recipe_name: recipeName,
                ingredients: ingredients,
                instructions: instructions,
            }
        });
        history.push('/recipes');
    }

    console.log(`Checking categoryId`, categoryId);

    return (
        <div className="addRecipes">
            <h1>Add Recipe!</h1>
            {
                categories.length === 0 ? (
                    <div>
                        <h1>Loading...</h1>
                    </div>
                ) : (
                    <FormControl  fullWidth>
                        <InputLabel id="demo-simple-select-helper-label">Category</InputLabel>
                        <Select onChange={(setCategory)} labelId="demo-simple-select-helper-label" label="Category" style={{width: '210px'}}>
                            
                            {
                                categories.map(category => {
                                    return (
                                        <MenuItem style={{width: 'auto'}}key={category.id} value={category.id}>{category.description}</MenuItem>
                                    )
                                })
                            }
                        </Select>
                        <br />
                        <br />
                        <TextField type="text" placeholder="Recipe Name" value={recipeName} onChange={(event) => setRecipeName(event.target.value)}></TextField>
                        <br />
                        <br />
                        <TextField type="text" placeholder="Ingredients" value={ingredients} onChange={(event) => setIngredients(event.target.value)}></TextField>
                        <br />
                        <br />
                        <TextField type="text" placeholder="Instructions" value={instructions} onChange={(event) => setInstructions(event.target.value)}></TextField>
                        <br />
                        <br />
                        <Button onClick={() => submitRecipe()} style={{ float: 'right' }}>Submit</Button>
                    </FormControl>
                )
            }
        </div >
    )
}

export default AddRecipe;