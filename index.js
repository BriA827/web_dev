const menuBtn = document.querySelector(".menu")
const linkDiv = document.querySelector(".links")

menuOpen = false

menuBtn.addEventListener("click", () => {
    if (menuOpen == false){
        menuOpen = true
        linkDiv.style.display = "flex"
    }

    else{
        menuOpen = false
        linkDiv.style.display = "none"
    }
})