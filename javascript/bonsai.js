const navButt = document.querySelector(".nav_butt")
const navDrop = document.querySelector(".nav_dropdown")
const closeButt = document.querySelector(".close_butt")

const yearText1 = document.querySelector(".y1")
const yearText2 = document.querySelector(".y2")
const yearText3 = document.querySelector(".y3")

const slider = document.querySelector(".slider")
const monText = document.querySelector(".monthly")
const yeaText = document.querySelector(".yearly")

const startCost = document.querySelector(".scost")
const proCost = document.querySelector(".pcost")
const busiCost = document.querySelector(".bcost")

const info1 = document.querySelector("info1")
const info2 = document.querySelector("info2")
const info3 = document.querySelector("info3")
const info4 = document.querySelector("info4")

const an1 = document.querySelector(".an1")
const an2 = document.querySelector(".an2")
const an3 = document.querySelector(".an3")
const an4 = document.querySelector(".an4")

let isOpen = false
let yearly = false

function faq_drop() {
    
}

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
        yearText1.style.display = "flex"
        yearText2.style.display = "flex"
        yearText3.style.display = "flex"
        monText.style.color = "rgb(94, 89, 89)"
        yeaText.style.color = "rgb(29, 27, 27)"
        startCost.innerText = "17"
        proCost.innerText = "32"
        busiCost.innerText = "52"
        yearly = true
    }
    else{
        yearText1.style.display = "none"
        yearText2.style.display = "none"
        yearText3.style.display = "none"
        monText.style.color = "rgb(29, 27, 27)"
        yeaText.style.color = "rgb(94, 89, 89)"
        startCost.innerText = "24"
        proCost.innerText = "39"
        busiCost.innerText = "79"
        yearly = false
    }
})