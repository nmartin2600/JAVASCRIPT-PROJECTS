var global = "Hello";

function myFunc() {
    let local = "World";
    const error = global;
    /*An error will be logged to console due to reassignment of const variable
    console.log(error += " " + local);
    */
   document.getElementById("click").innerHTML = error + " " + local;
}