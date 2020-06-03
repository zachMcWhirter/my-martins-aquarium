/*
Responsible for generating a list of fish HTML
representations, and putting in the browser
*/

// const fishList = () => {
//     // Iterate the collection of fish objects
//     for (const currentFishObject of fishCollection) {

//         // Convert the current fish to its HTML representation
//         const fishHTML = fishConverter(currentFishObject)

//         // Find the <article> element in index.html
//         const fishArticleElement = document.querySelector(".fishList")

//         // Put the fish HTML representation inside the <article> element
//         fishArticleElement.innerHTML += fishHTML
//     }
// }



// Function to show holy fish in the browser
const showHolyFish = () => {
    const fishObjectsArray = mostHolyFish()

    for (const fishObject of fishObjectsArray) {
        const fishHTMLRepresentation = fishConverter(fishObject)
         // Find the <article> element in index.html
        const fishArticleElement = document.querySelector(".fishList")

        fishArticleElement.innerHTML += fishHTMLRepresentation
    }
}

// Function to show soldier fish in the browser
const showSoldier = () => {
    const fishObjectsArray = soldierFish()

    for (const fishObject of fishObjectsArray) {
        const fishHTMLRepresentation = fishConverter(fishObject)
         // Find the <article> element in index.html
        const fishArticleElement = document.querySelector(".fishList")

        fishArticleElement.innerHTML += fishHTMLRepresentation
    }
}

// Function to show common fish in the browser
const showRegularFish = () => {

    const fishObjectsArray = nonHolyFish()

    for (const fishObject of fishObjectsArray) {
        const fishHTMLRepresentation = fishConverter(fishObject)
         // Find the <article> element in index.html
        const fishArticleElement = document.querySelector(".fishList")

        fishArticleElement.innerHTML += fishHTMLRepresentation
    }
}

const fishList = () => {
    // Invoke all three functions here
    showHolyFish()
    showSoldier()
    showRegularFish()
    
}