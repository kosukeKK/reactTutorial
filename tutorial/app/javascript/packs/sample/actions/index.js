let nextNum = 0;
export const addCr = () => {
    return {type: 'ADD_COUNTER', id: nextNum++}

};
