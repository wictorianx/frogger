const timeDisplay = document.querySelector("#time-left")
const resultDisplay = document.querySelector("#result")
const startPauseButton = document.querySelector("#start-pause-button")
const squares = document.querySelectorAll(".grid div")
const width = 9
const logsLeft = document.querySelectorAll(".log-left")
const logsRight = document.querySelectorAll(".log-right")
const carsLeft = document.querySelectorAll(".car-left")
const carsRight = document.querySelectorAll(".car-right")
let currentIndex = 76
let timerId
let currentTime = 5
let outcomeTimer 

function moveFrog(e){
    squares[currentIndex].classList.remove("frog")
    console.log(1)
    switch (e.key){
        case "ArrowLeft":
            if (currentIndex % width !==0) { 
            currentIndex--}
        break
        case "ArrowRight":
            if (currentIndex % width<width-1){
            currentIndex++}
        break
        case "ArrowUp":
            if (currentIndex-width>=0){
            currentIndex-=9}
        break
        case "ArrowDown":
            if (currentIndex+width < width*width){
            currentIndex+=9}
        break

        
    }
    squares[currentIndex].classList.add("frog")
}


function  autoMoveElements () {
    currentTime--
    timeDisplay.textContent=currentTime
    logsLeft.forEach(logLeft => moveLogLeft(logLeft))
    logsRight.forEach(logRight => moveLogRight(logRight))
    carsLeft.forEach(carLeft => movecarLeft(carLeft))
    carsRight.forEach(carRight => movecarRight(carRight))
    
}


function moveLogRight(logRight){
    switch(true){
        case logRight.classList.contains("l1"):
             logRight.classList.remove("l1")
             logRight.classList.add("l5")
             break
        case logRight.classList.contains("l2"):
             logRight.classList.remove("l2")
             logRight.classList.add("l1")
             break
        case logRight.classList.contains("l3"):
             logRight.classList.remove("l3")
             logRight.classList.add("l2")
             break
        case logRight.classList.contains("l4"):
             logRight.classList.remove("l4")
             logRight.classList.add("l3")
             break
        case logRight.classList.contains("l5"):
             logRight.classList.remove("l5")
             logRight.classList.add("l5")
             break
    }
}

function moveLogLeft(logLeft){
    switch(true){
        case logLeft.classList.contains("l1"):
            logLeft.classList.remove("l1")
            logLeft.classList.add("l2")
            break
        case logLeft.classList.contains("l2"):
            logLeft.classList.remove("l2")
            logLeft.classList.add("l3")
            break
        case logLeft.classList.contains("l3"):
            logLeft.classList.remove("l3")
            logLeft.classList.add("l4")
            break
        case logLeft.classList.contains("l4"):
            logLeft.classList.remove("l4")
            logLeft.classList.add("l5")
            break
        case logLeft.classList.contains("l5"):
            logLeft.classList.remove("l5")
            logLeft.classList.add("l1")
            break
    }
}

function moveCarRight(carRight){
    switch(true){
       case carLeft.classList.contains("c1"):
            carLeft.classList.remove("c1")
            carLeft.classList.add("c3")
            break
       case carLeft.classList.contains("c2"):
            carLeft.classList.remove("c2")
            carLeft.classList.add("c1")
            break
       case carLeft.classList.contains("c3"):
            carLeft.classList.remove("c3")
            carLeft.classList.add("c2")

    }
}

function lose(){
    if (square[currentIndex].classList.contains("c1")||
    square[currentIndex].classList.contains("l4")||
    square[currentIndex].classList.contains("l5")||
    currentTime<=0
    ){
        resultDisplay.innerHTML = "LOSE"
        clearInterval(timerId)
        clearInterval(outcomeTimer)
        squares[currentIndex].classList.remove("frog")
        document.removeEventListener("keyup",moveFrog)
    }
}

function win(){
    if (squares[currentIndex].contains("ending-block")){
        resultDisplay.textContent="WIN"
        clearInterval(timerId)
        clearInterval(outcomeTimer)
        document.removeEventListener("keyup",moveFrog)
    }
}


function moveCarLeft(carRight){
    switch(true){
       case carLeft.classList.contains("c1"):
            carLeft.classList.remove("c1")
            carLeft.classList.add("c2")
            break
       case carLeft.classList.contains("c2"):
            carLeft.classList.remove("c2")
            carLeft.classList.add("c3")
            break
       case carLeft.classList.contains("c3"):
            carLeft.classList.remove("c3")
            carLeft.classList.add("c1")

    }
}
startPauseButton.addEventListener("click", () =>{
    if (timerId){
        clearInterval(timerId)
        clearInterval(outcomeTimer)
        timerId= null
        outcomeTimer = null
        document.removeEventListener('keyup', moveFrog)
    }
    else{
        timerId= setInterval(autoMoveElements,1000)
        document.addEventListener('keyup', moveFrog)
        outcomeTimer = setInterval(checkOutcome,50)
    }
})

function checkOutcome(){
    win()
    lose()
}
timerId = setInterval(autoMoveLogs, 1000)
