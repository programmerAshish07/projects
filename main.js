var btn=document.querySelector("button");
var stat=document.querySelector("h4")
var card=document.querySelector("div")
var flag=true;
btn.innerHTML="Add Friend";
btn.addEventListener("click",function(){
 if(flag==true){
    stat.innerHTML="Friend";
    stat.style.color="green";
    btn.innerHTML="Remove";
    card.style.backgroundColor="lightgreen";
    card.style.transition="all 1s ease";
    
    setTimeout(function(){
        card.style.backgroundColor="white" 
    },2000)
    flag=false;
 }else{
    stat.innerHTML="Stranger";
    stat.style.color="red";
    btn.innerHTML="Add Friend";
    card.style.transition="all 1s ease";
    card.style.backgroundColor="#f7795e";
    setTimeout(function(){
        card.style.backgroundColor="white" ;
    },2000)
    flag=true;
 }
})

