/*
Responsible for generating a list of location HTML
representations, and putting in the browser
*/


// This adds an event listener to toggle/hide the loactions list in the browser
const locationVisibilityButton = document.querySelector(".toggleLocations")

locationVisibilityButton.addEventListener("click", clickEvent => {
    document.querySelector(".locationList").classList.toggle("hidden")
})

const locationList = () => {
    // Iterate the collection of location objects
    for (const currentLocationObject of locationCollection) {

        // Convert the current location to its HTML representation
        const locationHTML = locationConverter(currentLocationObject)

        // Find the <article> element in index.html
        const locationArticleElement = document.querySelector(".locationList")

        // Put the location HTML representation inside the <article> element
        locationArticleElement.innerHTML += locationHTML
    }
}