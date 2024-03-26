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

let city = "none"
const locaKey = "276469db1268406a9a5a7b6ce6262505"
let locaUrl = `https://api.geoapify.com/v1/ipinfo?apiKey=${locaKey}`

async function getLocation(){
    try {
        const response2 = await fetch(locaUrl)
        const data2 = await response2.json()

        lat = data2.location.latitude
        lon = data2.location.longitude
        city = data2.city.name
        areaText.textContent = `${data2.city.name}, ${data2.subdivisions[0].names.en}`
    }
    catch(error){
        console.log(error)
    }
}

const timeKey = "GMq/hJCT6BL3C2R8VrXXTg==f0E9aEQaDileMReq"
let timeUrl = `https://api.api-ninjas.com/v1/worldtime?lat=${lat}&lon=${lon}`
const options = {
    method: 'GET',
    headers: {
        'X-Api-Key': timeKey
    }
}

async function fixTime(){
    try{
        const response3 = await fetch(timeUrl, options)
        const data3 = await response3.json()
        const hour = data3.hour
        const minutes = data3.minute
        const month = data3.month
        const date = data3.day
        const fullYear = data3.year

        let xm = "AM"

        if (hour > 12){
            hour = hour - 12
            xm = "PM"
        }

        let time = `${hour}:${minutes} ${xm}`
        timeText.textContent = time
        let fullDate = `${month}/${date}/${fullYear}`
        dateText.textContent = fullDate
    }
    catch(error){
        console.log(error)
    }
}

getLocation()
getWeather()
fixTime()