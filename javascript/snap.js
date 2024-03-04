openBut = document.querySelector(".menu")
closeBut = document.querySelector(".close")
nav = document.querySelector(".nav")

featureButtonOpen = document.querySelector(".expand-fea")
featureButtonClose = document.querySelector(".collapse-fea")
featureList = document.querySelector(".fea-list")

computerButtonOpen = document.querySelector(".expand-com")
computerButtonClose = document.querySelector(".collapse-com")
computerList = document.querySelector(".com-list")

learnBut = document.querySelector(".learn-but")

openBut.addEventListener("click", ()=>{
    openBut.style.display = "none"
    nav.style.display = "flex"
})

closeBut.addEventListener("click", ()=>{
    openBut.style.display = "flex"
    nav.style.display = "none"
})

featureButtonOpen.addEventListener("click", ()=>{
    featureList.style.display = "flex"
    featureButtonOpen.style.display = "none"
    featureButtonClose.style.display = "flex"
})

featureButtonClose.addEventListener("click", ()=>{
    featureList.style.display = "none"
    featureButtonOpen.style.display = "flex"
    featureButtonClose.style.display = "none"
})

computerButtonOpen.addEventListener("click", ()=>{
    computerList.style.display = "flex"
    computerButtonOpen.style.display = "none"
    computerButtonClose.style.display = "flex"
})

computerButtonClose.addEventListener("click", ()=>{
    computerList.style.display = "none"
    computerButtonOpen.style.display = "flex"
    computerButtonClose.style.display = "none"
})


blackText = document.querySelectorAll(".black-text").forEach(blackText =>{
    blackText.addEventListener("mouseover", ()=>{
        blackText.style.color = "black"
    })
    blackText.addEventListener("mouseout", ()=>{
        blackText.style.color = "rgb(97, 94, 94)"
    })
})

learnBut.addEventListener("mouseover", ()=>{
    learnBut.style.backgroundColor = "white"
    learnBut.style.color = "black"
})

learnBut.addEventListener("mouseleave", ()=>{
    learnBut.style.backgroundColor = "black"
    learnBut.style.color = "white"
})