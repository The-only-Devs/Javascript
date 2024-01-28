const button = document.querySelector(".modalButton")
const container = document.querySelector(".modalContainer")

button.addEventListener("click", () => {
    displayModal(true)
})

function displayModal(popModal){
    container.style.display = popModal ? "flex" : "none"
} 

container.addEventListener("click", (e) => {
    console.log(e.target.className)
    if(e.target.className !== "modal")
    displayModal(false)
    // if(e.target.className === "modalContainer")
    // displayModal(false)
    
})