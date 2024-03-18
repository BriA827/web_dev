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
const clouds = ['few clouds', 'scattered clouds', 'broken clouds']
const rain = ['shower rain', 'rain', 'mist']

 const areaText = document.querySelector(".area")
 const dateText = document.querySelector(".date")
 const timeText = document.querySelector(".time")
 const weatherImg = document.querySelector(".weather")
 const degreesText = document.querySelector(".degrees")
 const forcastText = document.querySelector(".forcast")

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
let fullDate = `${month}/${date}/${fullYear}`
dateText.textContent = fullDate

let lat = 43.6591
let lon = -70.2568
const weaKey = "3a1f074c41f58b8aa3606d340ed622bc"
let weaUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weaKey}&units=imperial`

let weaImg

async function getWeather() {
    try {
        const response = await fetch(weaUrl)
        const data = await response.json()
        degreesText.textContent = `${Math.round(data.main.temp)}°F`

        let forcast = data.weather[0].description
        forcastText.textContent = data.weather[0].main

        if (clouds.includes(forcast)){
            weaImg = "partly-cloudy"
        }
        else if (rain.includes(forcast)){
            weaImg = "rain"
        }
        else if (forcast == 'thunderstorm'){
            weaImg = "rain-storm"
        }
        else if (forcast == 'snow'){
            weaImg = "snow"
        }
        else{
            weaImg = 'sunny'
        }

        weatherImg.src = `images/${weaImg}.png`

    }
    catch (error) {
        console.error(error)
    }
}

getWeather()


