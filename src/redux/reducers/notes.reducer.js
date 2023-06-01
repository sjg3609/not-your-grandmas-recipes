const noteReducer = (state = [], action) => {
    switch (action.type) {
        case 'NOTE_DETAILS':
            console.log('Note details reducer', action.payload);
            return action.payload;
        default:
            return state;   
    }
}

export default noteReducer;