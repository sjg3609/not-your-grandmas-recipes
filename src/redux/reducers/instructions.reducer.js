const instructionsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_INSTRUCTIONS':
            return action.payload;
        default:
            return state;
    }
}

export default instructionsReducer;