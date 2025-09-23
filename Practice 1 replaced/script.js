// Selects all elements with the class 'panel' and stores them in the 'panels' constant.
const panels = document.querySelectorAll('.panel')

// Iterates over each 'panel' element in the 'panels' NodeList.
panels.forEach(panel => {

// Adds a 'click' event listener to each 'panel'.
panel.addEventListener('click', () => {
    
    // Calls the 'removeActive' function to remove the 'active' class from all panels.
    removeActive();
    // Adds the 'active' class to the specific panel that was clicked.
    panel.classList.add("active");

})
})

// Defines a function to remove the 'active' class from all panels.
function removeActive() {
    // Iterates over each 'panel' element again.
    panels.forEach(panel => {
        // Removes the 'active' class from the current panel.
        panel.classList.remove("active");
    })
}
