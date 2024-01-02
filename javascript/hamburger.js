const t1 = document.querySelector(".t1")
const t2 = document.querySelector(".t2")
const t3 = document.querySelector(".t3")
const t4 = document.querySelector(".t4")

const a1 = document.querySelector(".a1")
const a2 = document.querySelector(".a2")
const a3 = document.querySelector(".a3")
const a4 = document.querySelector(".a4")

const white = document.querySelector(".faqs")

open1 = false
open2 = false
open3 = false
open4 = false

t1.addEventListener("click", () => {
    if (open1 == false){
        a1.style.display = "flex"
        open1 = true
        t1.src = "../images/icon-minus.svg"

        open2 = false
        open3 = false
        open4 = false
        a2.style.display = "none"
        t2.src = "../images/icon-plus.svg"
        a3.style.display = "none"
        t3.src = "../images/icon-plus.svg"
        a4.style.display = "none"
        t4.src = "../images/icon-plus.svg"
        
        white.style.height = "60%"
    }
    else{
        a1.style.display = "none"
        open1 = false
        t1.src = "../images/icon-plus.svg"

        white.style.height = "fit-content"
    }
})

t2.addEventListener("click", () => {
    if (open2 == false){
        a2.style.display = "flex"
        open2 = true
        t2.src = "../images/icon-minus.svg"

        open1 = false
        open3 = false
        open4 = false
        a1.style.display = "none"
        t1.src = "../images/icon-plus.svg"
        a3.style.display = "none"
        t3.src = "../images/icon-plus.svg"
        a4.style.display = "none"
        t4.src = "../images/icon-plus.svg"

        white.style.height = "60%"
    }
    else{
        a2.style.display = "none"
        open2 = false
        t2.src = "../images/icon-plus.svg"

        white.style.height = "fit-content"
    }
})

t3.addEventListener("click", () => {
    if (open3 == false){
        a3.style.display = "flex"
        open3 = true
        t3.src = "../images/icon-minus.svg"

        open2 = false
        open1 = false
        open4 = false
        a2.style.display = "none"
        t2.src = "../images/icon-plus.svg"
        a1.style.display = "none"
        t1.src = "../images/icon-plus.svg"
        a4.style.display = "none"
        t4.src = "../images/icon-plus.svg"

        white.style.height = "60%"
    }
    else{
        a3.style.display = "none"
        open3 = false
        t3.src = "../images/icon-plus.svg"

        white.style.height = "fit-content"
    }
})

t4.addEventListener("click", () => {
    if (open4 == false){
        a4.style.display = "flex"
        open4 = true
        t4.src = "../images/icon-minus.svg"

        open2 = false
        open3 = false
        open1 = false
        a2.style.display = "none"
        t2.src = "../images/icon-plus.svg"
        a3.style.display = "none"
        t3.src = "../images/icon-plus.svg"
        a1.style.display = "none"
        t1.src = "../images/icon-plus.svg"

        white.style.height = "60%"
    }
    else{
        a4.style.display = "none"
        open4 = false
        t4.src = "../images/icon-plus.svg"

        white.style.height = "fit-content"
    }
})