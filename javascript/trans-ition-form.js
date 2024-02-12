const button = document.querySelector(".slider")
const circle = document.querySelector(".circle")

let count = 1
let on = false

button.addEventListener("click", () => {
   if (on == true){
    circle.style.animationDirection = "reverse"
    circle.style.animationPlayState = "running"
    circle.style.animationIterationCount = count
    button.style.backgroundColor = "rgb(95, 90, 90)"
    button.style.borderColor = "rgb(95, 90, 90)"
    button.style.boxShadowColor = "rgb(58, 58, 58)"
    on = false
    count +=1
   }
   else{
    circle.style.animationDirection = "normal"
    circle.style.animationPlayState = "running"
    circle.style.animationIterationCount = count
    button.style.backgroundColor = "rgb(42, 189, 61)"
    button.style.borderColor = "rgb(42, 189, 61)"
    button.style.boxShadowColor = "rgb(8, 59, 15)"
    on = true
    count +=1
   }
})