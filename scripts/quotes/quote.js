/*
    This function will convert a single quote object to an HTML representation and return it
*/
const quoteConverter = (quoteObject) => {
    


    const quoteHTMLRepresentation = `<section class="quote">${quoteObject.quote}</section>`

    return quoteHTMLRepresentation

}