let gameSeq = [ ];
let userSeq = [ ];

let btns = ["blue", "red", "purple", "green"];
let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");

let started = false;
let level = 0;

document.addEventListener("keypress",function(){
  if (started == false) {
    console.log("game is started");
    started = true;
    levelUp();
   
  } 
});
function levelUp(){
    userSeq=[];
    level++;
    console.log(level);
     h2.innerText=`Level ${level}`;
     //random btn choose
       let randIdx=Math.floor(Math.random()*3); 
       let randColor=btns[randIdx];
       let randbtn=document.querySelector(`.${randColor}`);
    
        gameSeq.push(randColor);  
        console.log(gameSeq);
        gameFlash(randbtn);
}
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },250);
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash")
    },250);
}
function chkAns(idx){
   
    if(userSeq[idx]==gameSeq[idx]){
       if(userSeq.length==gameSeq.length){
            setTimeout("levelUp",1000);
        }
       
    }else{
        h2.innerText="Game Over! Press any key to START";
        h3.innerHTML=`Your Score is <b>${level}<b>`;
        document.querySelector("body").style.backgroundColor="red"
        setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white"
       },150);
        reset();
    }
    
}

function btnPress(){
    let btn=this;
    userFlash(btn);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userColor);
     chkAns(userSeq.length-1);
    
}

let allBtns=document.querySelectorAll(".btn");
    for(let btn of allBtns){
        btn.addEventListener("click",btnPress);

    }
 function reset(){
    started=false;
    gameSeq = [];
    userSeq = [];
    level=0;

 }   






