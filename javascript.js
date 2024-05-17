

let gameSeq = [];
let userSeq = [];

let btns=["yellow","red","purple","green"];

let stared = false;
let level = 0;

let h2 = document.querySelector("h2");


document.addEventListener("keypress", function () {
    if (stared == false) {
        console.log("Game started");
        stared = true;
        levelUp();
    }
})

function gameflash(btn) {
    
    btn.classList.add("flash")
    setTimeout(function () {
        btn.classList.remove("flash")
    }, 250);
}

function userflash(btn) {
    
    btn.classList.add("userflash")
    setTimeout(function () {
        btn.classList.remove("userflash")
    }, 250);
}

function levelUp() {
    userSeq=[];
    level++
    h2.innerText = `Level ${level}`;

    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor)
    console.log("game sequence",gameSeq)
    gameflash(randBtn);
}

function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
           setTimeout(levelUp,1000);
        }
        
    }else{
    h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to start`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
    document.querySelector("body").style.backgroundColor="white";
    },150)
    reset();
    }
}

function btnPress(){
    // console.log(this)
    let btn = this;
    userflash(btn);
    
    userColor=btn.getAttribute("id")
   userSeq.push(userColor);
   console.log("user sequence",userSeq)
   checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn")
for(btn of allBtns){
btn.addEventListener("click",btnPress)
}


function reset(){
    stared=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}

