/*Make p element with id "loop" display numbers 1 through 3*/
function call_loop() {
    document.getElementById("loop").innerHTML = "";
    let i = 0;
    while (i < 3) {
        document.getElementById("loop").innerHTML += " " + (i+1);
        i++;
    }
}

/*Make p element with id "instruments" display the values of the array below*/
let instruments = ["Guitar", "Drums", "Piano"];
function for_loop() {
    let i = 0;
    let content = "";

    for (i; i < instruments.length; i++) {
        content += instruments[i] + "<br>";
    }

    document.getElementById("instruments").innerHTML = content;
}

/*Make p element with id "array" display the values of the array below*/
let languages = ["English", "Spanish", "Japanese"];
function array() {
    document.getElementById("array").innerHTML = languages[0];
}

/*Make p element with id "constant" display key values of the below object*/
const person = {name:"Nick", age:28, gender:"Male"};
function constant() {
    let name = person.name;
    let paragraph = document.getElementById("constant");
    paragraph.innerHTML = "Name: " + name;
    person.age = 29;
    person.ethnicity = "Mixed";
    let age = person.age;
    let ethnicity = person.ethnicity;
    paragraph.innerHTML += ", " + "Age: " + age + ", " + "Ethnicity: " + ethnicity;
}

/*Make p element with id "object" display return value of laptop.description method*/
let laptop = { brand: "HP",
               model: "Victus 15",
               cpu: "Intel i5",
               gpu: "NVIDIA RTX 4050",
               description: function() 
               {
                return("This laptop is an " + this.brand + " " + this.model + " "
                    + "with an " + this.cpu + " processor and a " + this.gpu + " graphics card");
               }
             };
function object() {
    document.getElementById("object").innerHTML = laptop.description();
}

/*Make p element with id "break" display numbers in loop but break at i == 2*/
function breakLoop() {
    let i = 0;
    paragraph = document.getElementById("break");
    paragraph.innerHTML = "";
    for (i; i < 3; i++) {
        if (i == 2) {
            paragraph.innerHTML += "Break" 
            break 
        };
        paragraph.innerHTML += i + " ";
    }
}

/*Make p element with id "continue" display numbers in loop but show "Continue" at i == 1*/
function continueLoop() {
    let i = 0;
    paragraph = document.getElementById("continue");
    paragraph.innerHTML = "";
    for (i; i < 3; i++) {
        if (i == 1) {
            paragraph.innerHTML += "Continue ";
            continue
        };
        paragraph.innerHTML += i + " ";
    }
}