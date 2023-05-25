import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import recipesReducer from './recipe.reducer';
import recipeNameReducer from './recipeName.reducer';
import instructionsReducer from './instructions.reducer';
import ingredientsReducer from './ingredients.reducer';
import categoryReducer from './category.reducer';
import recipeDetails from './recipeDetails.reducer';
import noteReducer from './noteReducer';
// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  recipesReducer,
  recipeNameReducer,
  instructionsReducer,
  ingredientsReducer,
  categoryReducer,
  recipeDetails,
  noteReducer,
});

export default rootReducer;
