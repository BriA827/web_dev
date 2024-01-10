const menuBtn = document.querySelector(".menu")
const linkDiv = document.querySelector(".hamburg")
const xBtn = document.querySelector(".close")

menuBtn.addEventListener("click", () => {
    linkDiv.style.display = "flex"
})

xBtn.addEventListener("click", () => {
    linkDiv.style.display = "none"
})