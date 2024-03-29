
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Container, Grid, Paper, Button } from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';


function RecipesPage() {

    const dispatch = useDispatch();
    const history = useHistory();
    const recipes = useSelector(store => store.recipesReducer);
    const categories = useSelector(store => store.categoryReducer);
  

    const fetchCategories = () => {
        dispatch({ type: 'FETCH_CATEGORIES' });
    }

    const getRecipes = (id) => {
        console.log('In getRecipes for categories', id)
        dispatch({ type: 'FETCH_RECIPES_BY_CAT', payload: id });
    }

    useEffect(() => {
        fetchCategories();
    }, []);

    const recipeDetails = (id) => {
        console.log('In recipeDetails');
        history.push(`/recipeCard/${id}`)
    }

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === '#423E3D',
        ...theme.typography.body2,
        padding: theme.spacing(3),
        margin: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        width: 200,
        height: 90,
        maxWidth: 'auto',
        maxHeight: 'auto',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
    }));

    return (
        <main>
            <Container fixed>
                <h1>Recipes</h1>
                <div className="recipePage">
                    <nav className="categoryNav" style={{ textalign: 'center', }}>
                        <h4 className="categoriesHeader" style={{ padding: '25px', top: '10px' }}>Categories</h4>
                        {
                            categories.map(category => {
                                return (
                                    <ul className="categories" key={category.id} >
                                        <li style={{ listStyleType: 'none' }} onClick={() => getRecipes(category.id)}>{category.description}</li>
                                    </ul>
                                )
                            })
                        }
                    </nav>
                    <div className="recipes">
                        <Grid container
                            columnSpacing={4}
                            rowSpacing={6}
                            direction="row"
                            justifyContent="space-evenly"
                            alignItems="center"
                            padding={8}
                        >
                            {
                                recipes.map(recipe => {
                                    return (
                                        <div key={recipe.id}>
                                            <Item>
                                                <h3 onClick={() => recipeDetails(recipe.id)}>{recipe.recipe_name}</h3>
                                            </Item>
                                        </div>
                                    )
                                })
                            }
                        </Grid>
                    </div>
                </div>
            </Container>

        </main >

    )
}

export default RecipesPage;