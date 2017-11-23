const initialState = {
    id: 0,
};

const addCounter = (state=initialState, action) => {
    switch (action.type) {
        case 'ADD_COUNTER':
            return {
                id: action.id,
            };
        default:
            return state
    }
};

export default addCounter
