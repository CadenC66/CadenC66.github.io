function dateTimeDisplay(){
    const dateTimeElement = document.getElementById("dateTime");
    if (dateTimeElement) {
        const currentDate = new Date();
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric', 
            hour: 'numeric', 
            minute: 'numeric', 
            hour12: true 
        };
        const formattedDate = currentDate.toLocaleDateString('en-US', options);

        dateTimeElement.textContent = `Today is ${formattedDate}`;
      }
}
dateTimeDisplay();
document.addEventListener('DOMContentLoaded', dateTimeDisplay);

function nameFeeling(){
    const nameValue = document.getElementById("name").value;
    const feelingValue =document.getElementById("feeling").value;
    const greetingElement = document.getElementById("greeting");
    greetingElement.textContent = "Welcome "+nameValue+"! It's interesting that your feeling "+feelingValue+" today."
}
function favNumber(){
    const numberValue = document.getElementById("number").value;
    let newNumber = Math.round(Math.abs(numberValue));
    let polygon;
    switch(newNumber){
        case 0: polygon = "Not a polygon"; break;
        case 1: polygon = "Henagon"; break;
        case 2: polygon = "Digon"; break;
        case 3: polygon = "Trigon"; break;
        case 4: polygon = "Tetragon"; break;
        case 5: polygon = "Pentagon"; break;
        case 6: polygon = "Hexagon"; break;
        case 7: polygon = "Heptagon"; break;
        case 8: polygon = "Octagon"; break;
        case 9: polygon = "Enneagon"; break;
        case 10: polygon = "Decagon"; break;
        default: polygon = "Multisided polygon"; break;
    }
    alert(polygon);
}
function dontPress(){
    alert("Wow, what a rebel.");
}
function doPress(){
    alert("Thanks cutie :)");
}
function bestAnimal(){
    alert("A Caribou, specifically a captivating one.");
}
function mySSN(){
    alert("123-45-6789");
}