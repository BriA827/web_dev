const rockBtn = document.getElementById("rock")
const papBtn = document.getElementById("paper")
const sciBtn = document.getElementById("scissors")
const result = document.querySelector(".result")
const userImg = document.querySelector(".user-img")
const compImg = document.querySelector(".comp-img")
const endGame = document.querySelector(".end-game")
const winT = document.querySelector(".winT")
const loseT = document.querySelector(".loseT")
const scoreU = document.querySelector(".scoreU")
const fraction = document.querySelector(".fraction")
const restartBtn = document.getElementById("restart")
const userScoreText = document.querySelector(".player_score")
const compScoreText = document.querySelector(".comp_score")

const intro = document.querySelector(".intro")
const submitBtn = document.getElementById("submit")

const choices = ["rock", "paper", "scissors"]
let rounds
let comp
let turns = 0
let userScore = 0
let compScore = 0

// function rockBtnClick() {
//     result.innerText = "r"
// }
// function papBtnClick() {
//     result.innerText = "p"
// }
// function sciBtnClick() {
//     result.innerText = "s"
// }

function compChoice() {
    const choice = Math.floor(Math.random()*3)
    comp = choices[choice]
    compImg.src = "../images/" + comp +".png"
}

function winLose(userChoice) {
    if (userChoice == "rock" && comp == "paper") {
        result.innerText = "Computer Wins"
        compScore += 1
    } else if (userChoice == "scissors" && comp == "rock"){
        result.innerText = "Computer Wins"
        compScore += 1
    } else if (userChoice == "paper" && comp == "scissors"){
        result.innerText = "Computer Wins"
        compScore += 1
    } else if (comp == "rock" && userChoice == "paper") {
        result.innerText = "You Win!"
        userScore += 1
    } else if (comp == "scissors" && userChoice == "rock"){
        result.innerText = "You Win!"
        userScore += 1
    } else if (comp == "paper" && userChoice == "scissors"){
        result.innerText = "You Win!"
        userScore += 1
    } else {
        result.innerText = "Tie"
        turns -= 1
    }
    userScoreText.innerText = userScore
    compScoreText.innerText = compScore
}

function score(){
    if (turns == rounds){
        endGame.style.display = "flex"
        fraction.style.display = "flex"
        scoreU.innerText = userScore
        if (userScore >= rounds/2+1){
            winT.style.display = "flex"
        } else if (userScore <= rounds/2+1){
            loseT.style.display = "flex"
        }
    }
}

submitBtn.addEventListener("click", () => {
    const rounds = document.querySelectorAll(".rounds").value
    intro.style.display = "none"
    console.log(rounds)
})

restartBtn.addEventListener("click", () => {
    turns -= turns
    userScore -= userScore
    compScore -= compScore
    result.innerText = "Start Game"
    endGame.style.display = "none"
    fraction.style.display = "none"
    winT.style.display = "none"
    loseT.style.display = "none"
    userScoreText.innerText = "0"
    compScoreText.innerText = "0"
})

rockBtn.addEventListener("click", () => {
    userImg.src = "../images/" + rockBtn.id +".png"
    // result.style.backgroundColor = "red"
    compChoice()
    winLose(rockBtn.id)
    turns +=1
    score()
})
papBtn.addEventListener("click", () => {
    userImg.src = "../images/" + papBtn.id +".png"
    compChoice()
    winLose(papBtn.id)
    turns +=1
    score()
})
sciBtn.addEventListener("click", () => {
    userImg.src = "../images/" + sciBtn.id +".png"
    compChoice()
    winLose(sciBtn.id)
    turns +=1
    score()
})