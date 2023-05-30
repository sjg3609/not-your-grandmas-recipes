const noteReducer = (state = [], action) => {
    switch (action.type) {
        case 'NOTE_DETAILS':
            return action.payload;
        default:
            return state;   
    }
}

export default noteReducer;