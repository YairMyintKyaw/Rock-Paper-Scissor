//Element in first page
const firstPage = document.querySelector('.firstPage')
const firstPageBtn= document.querySelector('.firstPage button')

//Elements in second page
const secondPage = document.querySelector('.secondPage')
const secondPageInput=document.querySelector('.secondPage input')
const secondPageBtn = document.querySelector('.secondPage button')
let playerName;


//Elements in thirdPage
const thirdPage=document.querySelector('.thirdPage')
const player=document.querySelector('.player')
const rockPaperScissor= document.querySelectorAll('.playerOption img')
const playerChoicePng=document.querySelector('.playerChoicePng')
const computerChoicePng=document.querySelector('.computerChoicePng')
const resultDeclare= document.querySelector('.resultDeclare')
let playerWinCountTag=document.querySelector('.playerWinCount');
let computerWinCountTag=document.querySelector('.computerWinCount');
let tieTag=document.querySelector(".draw")
let winCount=0;
let loseCount=0;
let drawCount=0;

//Element in fourth page
const fourthPage=document.querySelector('.fourthPage')
const playerName4thPage=document.querySelector('.name')
const winOrLose=document.querySelector('.winOrLose')
const playAgainBtn=document.querySelector('.fourthPage button')

//First Page
firstPageBtn.addEventListener('click',()=>{
    changePage(firstPage,secondPage)
})

//Second Page
secondPageInput.addEventListener('change',getPlayerName)
secondPageBtn.addEventListener('click',getPlayerName)
function getPlayerName(){
    playerName=secondPageInput.value.trim()
    if(playerName.length > 0){
        changePage(secondPage,thirdPage)
        player.textContent=playerName
    }
}


//function that disappear previous page and appear next page
function changePage(disappearPage,appearPage){
    disappearPage.style.zIndex='0';
    disappearPage.style.opacity='0';
    appearPage.style.zIndex='1';
    appearPage.style.opacity='1';
}

//Third Page (Game Begin)

//Rock Paper Scissor
const possibleResult=['rock','paper','scissor']


//Computer Option
function computerOption(){
    let randomIndex = Math.floor(Math.random()*3)
    return possibleResult[randomIndex]
}
let computerChoice;
rockPaperScissor.forEach((item)=>{
    item.addEventListener('click',()=>{
        computerValue=computerOption()
        playGame(item.name,computerValue)
    })
})

function playGame(playerChoice,computerChoice){
    if(playerChoice=='scissor'){
        whoWin('paper','rock','scissor',computerChoice)
    }else if(playerChoice=='rock'){
        whoWin('scissor','paper','rock',computerChoice)
    }else{
        whoWin('rock','scissor','paper',computerChoice)
    }

}

function whoWin(win,lose,playerOption,computer){
    if(computer==win){
        console.log('you win')
        computerChoicePng.src=`${win}.png`
        playerChoicePng.src=`${playerOption}.png`
        resultDeclare.textContent='You win'
        resultDeclare.style.color='#03750d'
        playerWinCountTag.textContent=++winCount;
    }else if (computer==lose){
        console.log('you lose')
        computerChoicePng.src=`${lose}.png`
        playerChoicePng.src=`${playerOption}.png`
        resultDeclare.textContent='You lose'
        resultDeclare.style.color='#a70b0b'
        computerWinCountTag.textContent=++loseCount;
    }else{
        console.log('it is draw')
        computerChoicePng.src=`${playerOption}.png`
        playerChoicePng.src=`${playerOption}.png`
        resultDeclare.textContent='It is draw'
        resultDeclare.style.color='#003566'
        tieTag.textContent=++drawCount
    }
    if(winCount==5){
        displayResult('WIN')
        winOrLose.style.color='#03750d'
    }else if(loseCount==5){
        displayResult('LOSE')
        winOrLose.style.color='#a70b0b'
    }   
}

function displayResult(result){
    changePage(thirdPage,fourthPage)
    playerName4thPage.textContent=playerName;
    winOrLose.textContent=`YOU ${result}`
}

playAgainBtn.addEventListener('click',function(){
    changePage(fourthPage,secondPage)
    winCount=0;
    loseCount=0;
    drawCount=0;
    playerWinCountTag.textContent=0
    computerWinCountTag.textContent=0
    drawCount.textContent=0
    resultDeclare.innerHTML=''
})








