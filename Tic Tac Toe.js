
console.log("Welcome to Tic Tac Toe");

// game music
let music = new Audio("");

// turn music
let audioTurn = new Audio("audioTurn.mp3");

//game over music
let over = new Audio("won.mp3");

//Initializing turn 
let turn = "X";

//Function to change turn
const changeTurn = () => {
    return turn === "X"?"O":"X";
}

let gameover = false;

//Function to check win
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    wins.forEach(e =>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText)&&(boxtext[e[1]].innerText===boxtext[e[2]].innerText)&&(boxtext[e[0]].innerText!=="")){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText+" Won";
            gameover = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            over.play();
        }
    })

}

//Game Logic
let boxes = document.getElementsByClassName("box");   //Got box due to getElementsByClassName
Array.from(boxes).forEach(element => {                 //Stored in Array
    let boxtext = element.querySelector('.boxtext');  //Each element of array considered as boxtext
    element.addEventListener('click', () => {            //Added event listner as click when a boxtext is clicked
        if (boxtext.innerText === '') {                   //Check if inner element is blank
            boxtext.innerText = turn;                 //Fill the blank space with turn
            turn = changeTurn();                      //Change the turn now
            audioTurn.play();                         //Play audio while turn is changed
            checkWin();                               //Check whether player wins
            if(!gameover){
            document.getElementsByClassName("info")[0].innerText = turn + " turn"; //Change the game info after each turn
            }
        }
    })
})

//For reset button

btn.addEventListener('click',()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element=>{
        element.innerText="";
    });
    turn = "X";
    gameover = false
    document.getElementsByClassName("info")[0].innerText = turn + " turn";
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
    over.pause();
})
