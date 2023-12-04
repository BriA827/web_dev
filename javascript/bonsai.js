const navButt = document.querySelector(".nav_butt")
const navDrop = document.querySelector(".nav_dropdown")
const closeButt = document.querySelector(".close_butt")
const yearText = document.querySelector(".year")
const slider = document.querySelector(".slider")
let isOpen = false
let yearly = false

navButt.addEventListener("click", () => {
    navDrop.style.display = "flex"
    isOpen = true
    console.log("open")
})

closeButt.addEventListener("click", () => {
    navDrop.style.display = "none"
    isOpen = false
    console.log("close")
})

slider.addEventListener("click", () => {
    if (yearly == false){
        yearText.style.display = "flex"
        yearly = true
    }
    else{
        yearText.style.display = "none"
        yearly = false
    }
})