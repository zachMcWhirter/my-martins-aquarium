/*
Responsible for generating a list of fish HTML
representations, and putting in the browser
*/

// Select event dropdown box
const fishTypeDropdown = document.querySelector(".typeChoice")
const contentTarget = document.querySelector(".fishList")

const clearFishList = () => contentTarget.innerHTML = ""

fishTypeDropdown.addEventListener("change", changeEvent => {
    // Get the value of the option chosen by the user
    const userChoice = changeEvent.target.value

    // If the user chose Holy, clear the list and only show holy fish
    if (userChoice === "holy") {
        clearFishList()
        showHolyFish()
    }else if (userChoice === "soldier") {
        clearFishList()
        showSoldier()
    }else if (userChoice === "plebs") {
        clearFishList()
        showRegularFish()
    }else if (userChoice === "all"){
        clearFishList()
        fishList()
    }
})

// const fishTypeDropdown = document.querySelector(".typeChoice")
// const contentTarget = document.querySelector(".fishList")

// const clearFishList = () => contentTarget.innerHTML = ""

// fishTypeDropdown.addEventListener("change", changeEvent => {
//     // Get the value of the option chosen by the user
//     const userChoice = changeEvent.target.value

//     // If the user chose Soldier, clear the list and only show soldier fish
    
//     }
// })



// Toggle button
const fishVisibilityButton = document.querySelector(".toggleFish")

fishVisibilityButton.addEventListener("click", clickEvent => {
    document.querySelector(".fishList").classList.toggle("hidden")
})



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