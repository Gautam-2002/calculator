var result_str="";
var result=document.getElementsByClassName("result");
var reset=document.getElementsByClassName("clear");
var sign=document.getElementsByClassName("sign");
var mod=document.getElementsByClassName("mod");
var divide=document.getElementsByClassName("divide");
var seven=document.getElementsByClassName("seven");
var eight=document.getElementsByClassName("eight");
var nine=document.getElementsByClassName("nine");
var multiply=document.getElementsByClassName("multiply");
var four=document.getElementsByClassName("four");
var five=document.getElementsByClassName("five");
var six=document.getElementsByClassName("six");
var subtract=document.getElementsByClassName("subtract");
var three=document.getElementsByClassName("three");
var two=document.getElementsByClassName("two");
var one=document.getElementsByClassName("one");
var add=document.getElementsByClassName("add");
var zero=document.getElementsByClassName("zero");
var point=document.getElementsByClassName("point");
var equl=document.getElementsByClassName("equl");
reset.addEventListener('click',function(){
    result_str="";
});
seven.addEventListener('click',function(){
    result_str+="7";
    result.innerText=result_str;
    console.console.log("seven");
});