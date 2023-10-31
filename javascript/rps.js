const rockBtn = document.getElementById("rock")
const papBtn = document.getElementById("paper")
const sciBtn = document.getElementById("scissors")
const result = document.querySelector(".result")
const userImg = document.querySelector(".user-img")
const compImg = document.querySelector(".comp-img")

function rockBtnClick() {
    result.innerText = "r"
}
function papBtnClick() {
    result.innerText = "p"
}
function sciBtnClick() {
    result.innerText = "s"
}

rockBtn.addEventListener("click", rockBtnClick)
papBtn.addEventListener("click", papBtnClick)
sciBtn.addEventListener("click", sciBtnClick)