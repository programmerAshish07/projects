var rnhit=Math.floor(Math.random()*10);
var time=60;
var circleData="";
var hitNum=0;
var score=0;
var bottom=document.querySelector("#bottom");
var scoreboard=document.querySelector("#scoreboard");
var a=5;
var flag=0;
function incScore(){
score+=10;
document.querySelector("#score").textContent=score;
}

bottom.addEventListener("click",function(details){
  hitNum=Number(details.target.textContent);
  if(hitNum==rnhit){
    incScore();
    createCircle();
   
  }
  else{
 if(details.target!=bottom){
  details.target.style.backgroundColor="red";
  }
  }
})

function newHit(){
    rnhit=Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent=rnhit;
}


function createCircle(){
   newHit();
    circleData=""
    for(let i =1;i<=102;i++){
        circleData +=`<div class="circle">${Math.floor(Math.random()*10)}</div>`;
       bottom.innerHTML=circleData;
    }
 
}
var timerInterval= setInterval(function(){
 
    if(time>=0){

      if(time<10){
        if(flag==0){
        document.querySelector("#timer").style.backgroundColor="red"
      flag=1;  
      }
      else{
        document.querySelector("#timer").style.backgroundColor="white"
      flag=0; 
      }
        
      }
     document.querySelector("#timer").textContent=time;
     time--;
     }
     else{
        clearInterval(timerInterval);
      bottom.innerHTML=`<h1>Game Over</h1><h1>Your Score</h1><h1>${score}</h1>`;  
      bottom.style.flexDirection="column";
       
     }
},1000)


createCircle();