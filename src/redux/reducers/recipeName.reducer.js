const recipeNameReducer = (state = '', action) => {
    switch (action.type) {
        case 'SET_RECIPE_NAME':
            return action.payload;
        default:
            return state;
    }
}


export default recipeNameReducer;