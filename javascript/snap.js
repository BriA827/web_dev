openBut = document.querySelector(".menu")
closeBut = document.querySelector(".close")
nav = document.querySelector(".nav")

openBut.addEventListener("click", ()=>{
    openBut.style.display = "none"
    nav.style.display = "flex"
})

closeBut.addEventListener("click", ()=>{
    openBut.style.display = "flex"
    nav.style.display = "none"
})