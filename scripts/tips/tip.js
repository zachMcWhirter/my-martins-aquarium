/*
    This function will convert a single tip object to an HTML representation and return it
*/
const tipConverter = (tipObject) => {

    const tipHTMLRepresentation = `<section class="tip">${tipObject.tip}</section>`

    return tipHTMLRepresentation

}