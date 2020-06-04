let tipCollection = []

const getTipData = () => {
    return fetch("http://localhost:8088/tips").then(
        (httpResponse) => {
            return httpResponse.json()
        }
    )
    .then(
        (arrayOfTip) => {
            // 100% sure data is back
            tipCollection = arrayOfTip
            // use console.log here to test
            // console.log(tipCollection)
        }
    )
}
