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