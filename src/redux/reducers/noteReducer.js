const noteReducer = (state = '', action) => {
    switch (action.type) {
        case 'NEW_NOTE':
            return action.payload;
        default:
            return state;   
    }
}

export default noteReducer;