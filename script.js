function isOperator(str) {
    return str == "+" || str == "-" || str == "*" || str == "/";
}
function display(){
    let str = (this.innerText) ;
    if(isOperator(str)){
        panel.innerText = "";
        ans += num;
        num="";
        ans += str;
    }
    else if(str == "+/-"){
        num*=-1;
        panel.innerText = num;
    }
    else if(str == "AC"){
    panel.innerText = "";
    ans ="";
    num="";
    }
    else if(str == "%"){
    panel.innerText = str;
    ans += "*100";
    }
    else{
    num +=str;
    panel.innerText = num;
    }
}
function output(){
    ans += num;
    console.log("num = "+num)
    console.log("ans = "+ans)
    var res = eval(ans);
    panel.innerText = res;
    ans = "";
    num = res;
}
let ans = "";
let num ="";
var text = document.querySelectorAll(".level3");
var panel = document.querySelector('.result');
text.forEach((Node) => {Node.addEventListener('click',display)})
document.querySelector('#equl').removeEventListener('click',display);
document.querySelector('#equl').addEventListener('click',output);