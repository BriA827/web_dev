const navButt = document.querySelector(".nav_butt")
const navDrop = document.querySelector(".nav_dropdown")
const closeButt = document.querySelector(".close_butt")
let isOpen = false

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