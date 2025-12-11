let randomNumber=parseInt(Math.random()*100+1)

const submit=document.querySelector('#subt')
const userInput=document.querySelector('#guessField')
const guessSlot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult')
const lowOrHi=document.querySelector('.lowOrHi')
const startOver=document.querySelector('.resultParas')

const p=document.createElement('p')

let prevGuess=[]
let numGuesses=1
let playGame=true

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess=parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('please enter a valid number')
    }
    else if(guess<1 || guess>100){
          alert('please enter a numbe between 1 and 100')
    }
    else{
        prevGuess.push(guess)
        if(numGuesses===11){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess===randomNumber){
        displayMessage(`You guessed it right`)
        endGame()
    }
    else if(guess<randomNumber){
        displayMessage(`Number is too low`)
    }
    else {
        displayMessage(`Number is too high`)
    }
}

function displayGuess(guess){
    userInput.value=''
    guessSlot.innerHTML+=`${guess} `
    numGuesses++
    remaining.innerHTML=`${11-numGuesses}`
}

function displayMessage(message){
    lowOrHi.innerHTML=`<h2>${message}</h2>`
}

function newGame(){
    const newButton=document.querySelector('#newGame')
    newButton.addEventListener('click',function(e){
        let randomNumber=parseInt(Math.random()*100+1)
        prevGuess=[]
        numGuesses=1
        guessSlot.innerHTML=''
        remaining.innerHTML=`${11-numGuesses}`
        userInput.removeAttribute('disabled')
        startOver.replaceChild(p)
        playGame=true
        p.innerHTML=
    })
}

function endGame(){
    userInput.value=''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<h2 id="newGame">Start new Game</h2>`
    startOver.appendChild(p)
    playGame=false
    newGame()
}