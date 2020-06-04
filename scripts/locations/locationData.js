let locationCollection = []

const getLocationData = () => {
    return fetch("http://localhost:8088/locations").then(
        (httpResponse) => {
            return httpResponse.json()
        }
    )
    .then(
        (arrayOfLocation) => {
            // 100% sure data is back
            locationCollection = arrayOfLocation
            // use console.log here to test
            // console.log(locationCollection)
        }
    )
}
