
let fishCollection = []

const getFishData = () => {
    return fetch("http://localhost:8088/fish").then(
        (httpResponse) => {
            return httpResponse.json()
        }
    )
    .then(
        (arrayOfFish) => {
            // 100% sure data is back
            fishCollection = arrayOfFish
            // use console.log here to test
            // console.log(fishCollection)
        }
    )
}

// 3, 6, 9, 12, etc... fish
const mostHolyFish = (fishObject) => {
    const holyFish = []

    for (fishObject of fishCollection) {
        if (fishObject.length % 3 === 0) {
            holyFish.push(fishObject)
        }
    }
    return holyFish
}

// 5, 10, 15, 20, 25, etc... fish
const soldierFish = (fishObject) => {
    const soldiers = []

    for (fishObject of fishCollection) {
        if (fishObject.length % 5 === 0) {
            soldiers.push(fishObject)
        }
    }
    return soldiers
}

// Any fish not a multiple of 3 or 5
const nonHolyFish = (fishObject) => {
    const regularFish = []

    for (fishObject of fishCollection) {
        if (fishObject.length % 3 !== 0 && fishObject.length % 5 !== 0) {
            regularFish.push(fishObject)
        }
    }
    return regularFish
}


var a = mostHolyFish()
var b = soldierFish()
var c = nonHolyFish()

console.log(a, b, c)