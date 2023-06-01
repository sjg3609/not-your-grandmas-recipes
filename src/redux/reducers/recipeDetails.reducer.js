const recipeDetails = (state = [], action) => {
    switch (action.type) {
        case 'SET_DETAILS':
            console.log('Recipe details reducer', action.payload);
            return action.payload;
        default:
            return state;
    }
}

export default recipeDetails;