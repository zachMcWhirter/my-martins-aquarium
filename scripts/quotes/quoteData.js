let quoteCollection = []

const getQuoteData = () => {
    return fetch("http://localhost:8088/quotes").then(
        (httpResponse) => {
            return httpResponse.json()
        }
    )
    .then(
        (arrayOfQuote) => {
            // 100% sure data is back
            quoteCollection = arrayOfQuote
            // use console.log here to test
            // console.log(quoteCollection)
        }
    )
}