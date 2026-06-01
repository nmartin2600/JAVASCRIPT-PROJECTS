/*Get p element with id "math" and replace text with sum*/
function addToParagraph() {
    let para = document.getElementById("math");
    const sum = 5 + 5;
    para.innerHTML = "5 + 5 = " + sum;
}

/*Get p element with id "math" and replace text with remainder*/
function subtractFromParagraph() {
    let para = document.getElementById("math");
    const remainder = 10 - 7;
    para.innerHTML = "10 - 7 = " + remainder;
}

/*Get p element with id "math" and replace text with product*/
function multiplyParagraph() {
    let para = document.getElementById("math");
    const product = 2 * 2;
    para.innerHTML = "2 * 2 = " + product;
}

/*Get p element with id "math" and replace text with quotient*/
function divideParagraph() {
    let para = document.getElementById("math");
    const quotient = 20 / 5;
    para.innerHTML = "20 / 5 = " + quotient;
}

/*Get p element with id "math" and replace text with result*/
function multiParagraph() {
    let para = document.getElementById("math");
    const result = (2 + 2) * (10 - 4) / 6;
    para.innerHTML = "The result of adding 2 plus 2, multiplying it by 10 minus 4, "
        + "then dividing by 6 is: " + result;
}

/*Get p element with id "math" and replace text with remainder*/
function modulusParagraph() {
    let para = document.getElementById("math");
    const remainder = 20 % 3;
    para.innerHTML = "The remainder of dividing 20 by 3 is: " + remainder;
}

/*Get p element with id "math" and replace text with negation*/
function negateParagraph() {
    let para = document.getElementById("math");
    const operand = 10;
    para.innerHTML = "The negation of 10 is: " + (-operand);
}

/*Get p element with id "math" and replace text with random number*/
function randomParagraph() {
    let para = document.getElementById("math");
    const num = Math.random() * 11;
    para.innerHTML = "Random number between 0 and 11: " + num;
}

/*Get p element with id "math" and replace text with rounded number*/
function roundParagraph() {
    let para = document.getElementById("math");
    const num = Math.round(4.6);
    para.innerHTML = "4.6 rounded up is: " + num;
}

/*Write result of incrementing and decrementing number to page body*/
function incrementDecrement() {
    let num = 1;
    document.writeln("num is equal to: " + num);
    num++;
    document.writeln("num after increment is equal to: " + num);
    num--;
    document.writeln("num after decrement is equal to: " + num);
}