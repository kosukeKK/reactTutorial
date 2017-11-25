const initialState = {
    id: 0,
    texts: []
};

const addCounter = (state = initialState, action: any) => {
    switch (action.type) {
        case 'ADD_COUNTER':
            return {
                id: action.id,
                texts: action.texts
            };
        default:
            return state;
    }
};

export default addCounter;
