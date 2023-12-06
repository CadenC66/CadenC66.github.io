let answer = document.getElementById("answer");
function mathEquation(value){
answer.value += value;
}
function solveEquation(){
    answer.value = eval(answer.value);
}
function clearInput() {
    answer.value = "";
} 

document.getElementById("btn1").addEventListener("click", function () {
    mathEquation('1');
});
document.getElementById("btn2").addEventListener("click", function () {
    mathEquation('2');
});
document.getElementById("btn3").addEventListener("click", function () {
    mathEquation('3');
});
document.getElementById("btn4").addEventListener("click", function () {
    mathEquation('4');
});
document.getElementById("btn5").addEventListener("click", function () {
    mathEquation('5');
});
document.getElementById("btn6").addEventListener("click", function () {
    mathEquation('6');
});
document.getElementById("btn7").addEventListener("click", function () {
    mathEquation('7');
});
document.getElementById("btn8").addEventListener("click", function () {
    mathEquation('8');
});
document.getElementById("btn9").addEventListener("click", function () {
    mathEquation('9');
});
document.getElementById("btn0").addEventListener("click", function () {
    mathEquation('0');
});
document.getElementById("btnDot").addEventListener("click", function () {
    mathEquation('.');
});
document.getElementById("btnDiv").addEventListener("click", function () {
    mathEquation('/');
});
document.getElementById("btnMult").addEventListener("click", function () {
    mathEquation('*');
});
document.getElementById("btnSub").addEventListener("click", function () {
    mathEquation('-');
});
document.getElementById("btnAdd").addEventListener("click", function () {
    mathEquation('+');
});
document.getElementById("btnClear").addEventListener("click", clearInput);
document.getElementById("equalsButton").addEventListener("click", solveEquation);
