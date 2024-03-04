var car;
car = (val) => "These are my favorite brands: " + val;
document.getElementById("displayCar").innerHTML = car("BMW, Audi, Mercedes");

var ages = [2, 10, 18, 20, 13, 15, 30];
checkAge = (age) => age >= 18;

document.getElementById("displayAge").innerHTML = ages.some(checkAge);