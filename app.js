let calculation = localStorage.getItem("calculation") || '';
document.querySelector(".calculation").innerHTML = calculation;

function updateCalculation(value){
    calculation += value;
    displayCalculation();
    localStorage.setItem("calculation", calculation);
}

function displayCalculation(){
    document.querySelector(".calculation").innerHTML = calculation;
}

function clearCalculation(){
    document.querySelector(".calculation").innerHTML = "";
    calculation = '';
    localStorage.removeItem("calculation");
}

function compute(){
    calculation = eval(calculation);
    document.querySelector(".calculation").innerHTML = calculation;
    localStorage.setItem("calculation", calculation);
}