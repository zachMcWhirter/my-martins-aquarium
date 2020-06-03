const fishCollection = [
    {
        species: "Trigger Fish",
        length: 12,
        location: "Bay of Bengal",
        picture: "https://i.redd.it/yma5wuk73hm01.jpg",
        food: "Baby squid",
        name: "Bubbles"
    },
    {
        species: "Parrot Fish",
        length: 8,
        location: "Sea of Google",
        picture: "https://i.ytimg.com/vi/y6tdGVTgmm4/maxresdefault.jpg",
        food: "Popcorn",
        name: "Angus"
    },
    {
        species: "Swordfish",
        length: 320,
        location: "Atlantic Ocean",
        picture: "https://i.pinimg.com/236x/bc/85/46/bc85464a5f6bedf949d5e12ad8cd6882--marlin-fishing-deep-sea-fishing.jpg",
        food: "Herring",
        name: "Chester"
    },
    {
        species: "Angel Fish",
        length: 8,
        location: "Pacific Ocean",
        picture: "https://c402277.ssl.cf1.rackcdn.com/photos/1803/images/story_full_width/%28c%29_Jonathan_Rossouw_IMG_9336.jpg?1345603462",
        food: "Plankton",
        name: "Michael"
    },
    {
        species: "Elegant Corydoras",
        length: 3,
        location: "Caribbean Sea",
        food: "Algae",
        name: "Sweet",
        picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Corydoras_elegans.jpg/440px-Corydoras_elegans.jpg"
    },
    {
        species: "Orange Roughy",
        length: 16,
        location: "Southern Ocean",
        picture: "https://i.pinimg.com/236x/9d/3e/2b/9d3e2b9a8aa093f73079e995fcf2995c.jpg",
        food: "Anchovies",
        name: "Michael"
    }
]

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