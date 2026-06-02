/*Checks if entered value from input with id "age" is >= 18, then returns message about voting eligibility*/
function can_vote() {
    let age, eligible;
    age = document.getElementById("age").value;
    eligible = (age < 18) ? "You are not old enough to vote":"You can vote!";
    document.getElementById("eligible").innerHTML = eligible;
}

/*Constructor for Vehicle class with the given parameters*/
class Vehicle {
    constructor(_make, _model, _year, _color) {
        this.make = _make;
        this.model = _model;
        this.year = _year;
        this.color = _color;
    }
}

/*Create 3 new instances of Vehicle class*/
var jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

/*Fills p element with id "new_and_this" with information about car for erik*/
function vehicle_info() {
    document.getElementById("new_and_this").innerHTML =
    "Erik drives a " + erik.color + "-colored " + erik.make + " " + erik.model + " manufactured in " +
    erik.year;
}

/*Gets p element with id "nested" and makes it display the result of nested function*/
function nested() {
    document.getElementById("nested").innerHTML = operation();
    function operation() {
        return "Hello, World!";
    }
}