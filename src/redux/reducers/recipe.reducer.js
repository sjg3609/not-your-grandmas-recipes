// Set to an array as the initial state, we need to map later and it will only recognize it as an array of objects
const recipesReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_RECIPE_BY_CATEGORY':
            return action.payload;
        default:
            return state;
    }
}

export default recipesReducer;