var global = "Hello";

/*Makes p element with id "click" display concatenation of global and local variables*/
function myFunc() {
    let local = "World";
    const error = global;
    /*An error will be logged to console due to reassignment of const variable
    console.log(error += " " + local);
    */
   document.getElementById("click").innerHTML = error + " " + local;
}

/*Makes p element with id "hour" display hour of the day and if it is before or after noon time*/
function getHour() {
    const hour = new Date().getHours();
    if (hour < 12) {
        document.getElementById("hour").innerHTML = "The current hour is before noon: " + hour;
    }
    else {
        document.getElementById("hour").innerHTML = "The current hour is after noon: " + hour;
    }
}

/*Makes p element with id "age" display if given age is of an adult*/
function isAdult() {
    const age = document.getElementById("age").value;
    let status = "";
    if (age >= 18) {
        status = "You are an adult";
    }
    else {
        status = "You are a minor";
    }
    document.getElementById("is_adult").innerHTML = status;
}

/*Makes p element with id "season" display the current season of the year*/
function whatSeason() {
    const month = new Date().getMonth() + 1;
    let status = "";

    if (month <= 2 || month == 12) {
        status = "It is winter";
    }
    else if (month <= 5) {
        status = "It is spring";
    }
    else if (month <= 8) {
        status = "It is summer";
    }
    else {
        status = "It is fall";
    }

    document.getElementById("season").innerHTML = status;
}