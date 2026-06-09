/*Make p element with id "concat" display concatenation of two strings*/
function combineTwoStrings() {
    let str1 = "Hello, ";
    let str2 = "World!";
    document.getElementById("concat").innerHTML = str1.concat(str2);
}

/*Make p element with id "slice" display a slice of a string*/
function sliceString() {
    let sentence = "I love my dog!";
    const slice = sentence.slice(0,6);
    document.getElementById("slice").innerHTML = slice;
}

/*Make p element with id "num" display a number as a string*/
function numToString() {
    let num = 64;
    document.getElementById("num").innerHTML = num.toString();
}

/*Make p element with id "precise" display number with 2 digits after the decimal*/
function precision() {
    let x = 3.1433;
    document.getElementById("precise").innerHTML = x.toPrecision(3);
}