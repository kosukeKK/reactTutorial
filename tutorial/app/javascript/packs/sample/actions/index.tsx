let nextNum :number = 0
let texts :Array<string> = []
export const addCr = (text :string) =>  {
    texts.push(text)
    return {type: 'ADD_COUNTER', id: nextNum++, texts}
};