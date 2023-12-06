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
