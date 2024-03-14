const menuBtn = document.querySelector(".menu")
const linkDiv = document.querySelector(".hamburg")
const xBtn = document.querySelector(".close")

menuBtn.addEventListener("click", () => {
    linkDiv.style.display = "flex"
})

xBtn.addEventListener("click", () => {
    linkDiv.style.display = "none"
})

// //dad jokes
// const output = document.querySelector(".output")
// const jokeButton = document.querySelector(".joke-button")

// const url = 'https://dad-jokes-by-api-ninjas.p.rapidapi.com/v1/dadjokes';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'be1406aef5msh3f3e69275e1aa00p1707fcjsnfc291814c0b7',
// 		'X-RapidAPI-Host': 'dad-jokes-by-api-ninjas.p.rapidapi.com'
// 	}
// };

// async function getJoke(){
//     try {
//         const response = await fetch(url, options);
//         const result = await response.json();
//         const joke = result[0].joke;
//         output.textContent = joke
//     } catch (error) {
//         output.textContent = "Something went wrong"
//     }
// }

// jokeButton.addEventListener("click", () => {
//     getJoke()
// })



// weather
 const areaText = document.querySelector(".area")
 const dateText = document.querySelector(".date")
 const timeText = document.querySelector(".time")
 const weatherImg = document.querySelector(".weather")
 const degreesText = document.querySelector(".degrees")
 const forcastText = document.querySelector(".forcast")

const weaUrl = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}"
const weaKey = "3a1f074c41f58b8aa3606d340ed622bc"

const dateObject = new Date()
const month = dateObject.getMonth() + 1
const date = dateObject.getDate()
const fullYear = dateObject.getFullYear()
let hour = dateObject.getHours()
let minutes = dateObject.getMinutes()

if (minutes < 10){
    minutes = "0" + minutes.toString()
}

let xm = "AM"

if (hour > 12){
   xm = "PM"
   hour = hour-12
}

let time = `${hour}:${minutes} ${xm}`
timeText.textContent = time

console.log(month, date, fullYear, hour, minutes, time)