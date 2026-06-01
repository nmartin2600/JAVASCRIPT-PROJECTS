/*Write data type of variable num to page body*/
function showDataType() {
    const num = 5;
    document.write("Data type of " + num + " is: " + typeof num);
}

/*Replace text of p element with id "data" with sum of variables of different data types*/
function typeCoerce() {
    let para = document.getElementById('data');
    const string = "10";
    const num = 5;
    para.innerHTML = "Result of type coercion for \"10\" + 5: " + (string + num);
}

/*Replace text of p element with id "data" with true/false statements about being a number*/
function paraNotNumber() {
    let para = document.getElementById('data');
    para.innerHTML = "Is 0/0 not a number?: " + isNaN(0/0) + "\n";
    para.innerHTML += "Is 2 not a number?: " + isNaN(2);
}

/*Replace text of p element with id "data" with positive/negative Infinity*/
function infinity() {
    let para = document.getElementById('data');
    const posInfin = 2E310;
    const negInfin = -2E310;
    para.innerHTML = "Here we have " + posInfin + " and " + negInfin;
}

/*Replace text of p element with id "data" with results of Boolean expressions*/
function booleans() {
    let para = document.getElementById('data');
    para.innerHTML = "Boolean value of (7 > 4): " + (7 > 4) + "\n";
    para.innerHTML += "Boolean value of (7 < 4): " + (7 < 4);
}

/*Replace text of p element with id "data" with results of double equal sign comparisons*/
function doubleEquals() {
    let para = document.getElementById('data');
    para.innerHTML = "Boolean value of (1==1): " + (1==1) + "\n";
    para.innerHTML += "Boolean value of (1==2): " + (1==2);
}

/*Replace text of p element with id "data" with results of triple equal sign comparisons*/
function tripleEquals() {
    let para = document.getElementById('data');
    const num = 3;
    const string = "Hello";
    para.innerHTML = "Boolean value of (3===3): " + (num===3) + "\n";
    para.innerHTML += "Boolean value of (\"Hello\"===3): " + (string===3) + "\n";
    para.innerHTML += "Boolean value of (3===4): " + (num===4);
}

/*Replace text of p element with id "data" with results of AND/OR comparisons*/
function trueFalse() {
    let para = document.getElementById('data');
    para.innerHTML = "Boolean value of 1==1 AND 2==2: " + (1==1 && 2==2) + "\n";
    para.innerHTML += "Boolean value of 1==1 AND 1==2: " + (1==2 && 1==2) + "\n";
    para.innerHTML += "Boolean value of 1==1 OR 1==2: " + (1==1 || 1==2) + "\n";
    para.innerHTML += "Boolean value of 1==2 OR 2==1: " + (1==2 || 2==1);
}

/*Replace text of p element with id "data" with results of NOT operator*/
function paraNot() {
    let para = document.getElementById('data');
    para.innerHTML = "Boolean value of !(1==2): " + !(1==2) + "\n";
    para.innerHTML += "Boolean value of !(1==1): " + !(1==1);
}

/*Write to browser console*/
function writeTolog() {
    console.log(2 + 2);
    console.log(false);
}

/*Execute on page load*/
writeTolog(); 
showDataType();