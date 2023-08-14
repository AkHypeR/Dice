
document.querySelector("#button").onclick=function(){
   var number1=Math.floor(Math.random()*6) + 1;
   var number2=Math.floor(Math.random()*6) + 1;

if(number1>number2){
    document.querySelector(".text").textContent="Player 1 win";
}
else if(number1==number2){
    document.querySelector(".text").textContent="Draw";
}
else if(number1<number2){
    document.querySelector(".text").textContent="Player 2 win";
}
else{
    document.querySelector(".text").textContent="Refresh Me";
}
document.querySelector(".dice1").setAttribute("src","./images/dice"+number1+".png");
document.querySelector(".seceond_first").setAttribute("src","./images/dice"+number2+".png");

}