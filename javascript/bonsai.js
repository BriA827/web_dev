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

const info1 = document.querySelector(".info1")
const info2 = document.querySelector(".info2")
const info3 = document.querySelector(".info3")
const info4 = document.querySelector(".info4")

const an1 = document.querySelector(".an1")
const an2 = document.querySelector(".an2")
const an3 = document.querySelector(".an3")
const an4 = document.querySelector(".an4")

const faq1 = document.querySelector(".faq1")
const faq2 = document.querySelector(".faq2")
const faq3 = document.querySelector(".faq3")
const faq4 = document.querySelector(".faq4")

let isOpen = false
let yearly = false

let an1Open = false
let an2Open = false
let an3Open = false
let an4Open = false

an1.addEventListener("click", () => {
    if (an1Open == false){
        info1.style.display = "flex"
        an1Open = true
        faq1.style.color = "#00b289"
    }
    else{
        info1.style.display = "none"
        an1Open = false
        faq1.style.color = "rgb(29, 27, 27)"
    }
})

an2.addEventListener("click", () => {
    if (an2Open == false){
        info2.style.display = "flex"
        an2Open = true
        faq2.style.color = "#00b289"
    }
    else{
        info2.style.display = "none"
        an2Open = false
        faq2.style.color = "rgb(29, 27, 27)"
    }
})

an3.addEventListener("click", () => {
    if (an3Open == false){
        info3.style.display = "flex"
        an3Open = true
        faq3.style.color = "#00b289"
    }
    else{
        info3.style.display = "none"
        an3Open = false
        faq3.style.color = "rgb(29, 27, 27)"
    }
})

an4.addEventListener("click", () => {
    if (an4Open == false){
        info4.style.display = "flex"
        an4Open = true
        faq4.style.color = "#00b289"
    }
    else{
        info4.style.display = "none"
        an4Open = false
        faq4.style.color = "rgb(29, 27, 27)"
    }
})

navButt.addEventListener("click", () => {
    navDrop.style.display = "flex"
    isOpen = true
})

closeButt.addEventListener("click", () => {
    navDrop.style.display = "none"
    isOpen = false
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