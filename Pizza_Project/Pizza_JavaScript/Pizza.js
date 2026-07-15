// This function initializes the receipt based on the selected pizza size
function getReceipt() {
    // This initializes our string so it can get passed from
    // function to function, growing line by line into a full receipt
    var text1 = "<h3>You Ordered: </h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");

    // Loop through pizza size input array to see which one was selected
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 += selectedSize + "<br>";
        }
    }

    // Set price of pizza size based on above selection
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    }
    else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    }
    else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    }
    else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    }
    else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    else if (selectedSize === "Party Pizza") {
        sizeTotal = 18;
    }
    // Nothing was selected
    else {
        sizeTotal = 0;
    }

    runningTotal = sizeTotal;
    console.log(selectedSize + " = $" + sizeTotal + ".00");
    console.log("Size text1: " + text1);
    console.log("Subtotal: $" + runningTotal + ".00");
    // These variables will get passed on to each function, starting with getTopping()
    getTopping(runningTotal, text1);
}

// This function adds any toppings selected to the receipt started from getReceipt()
function getTopping(runningTotal, text1) {
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings");

    // Loop through topping input array to see which ones were selected
    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            console.log("Selected topping item: (" + toppingArray[j].value + ")");
            text1 += toppingArray[j].value + "<br>";
        }
    }

    var toppingCount = selectedTopping.length;

    // If more than one topping selected, subtract $1 for 1 free topping
    if (toppingCount > 1) {
        toppingTotal = toppingCount - 1;
    }
    // No toppings were selected
    else {
        toppingTotal = 0;
    }

    runningTotal += toppingTotal;
    console.log("Total selected topping items: " + toppingCount);
    console.log(toppingCount + " topping - 1 free topping = " + "$" + toppingTotal + ".00");
    console.log("Topping text1: " + text1);
    // Pass variables to getVeggie()
    getVeggie(runningTotal, text1);
}

// This function adds any vegetables selected to the receipt and displays the grand total of the order
function getVeggie(runningTotal, text1) {
    var vegTotal = 0;
    var selectedVeg = [];
    var vegArray = document.getElementsByClassName("vegetables");

    // Loop through vegetable input array to see which ones were selected
    for (var k = 0; k < vegArray.length; k++) {
        if (vegArray[k].checked) {
            selectedVeg.push(vegArray[k].value);
            console.log("Selected vegetable item: (" + vegArray[k].value + ")");
            text1 += vegArray[k].value + "<br>";
        }
    }

    var vegCount = selectedVeg.length;

    // If more than one vegetable selected, subtract $1 for 1 free vegetable
    if (vegCount > 1) {
        vegTotal = vegCount - 1;
    }
    // No vegetables were selected
    else {
        vegTotal = 0;
    }

    runningTotal += vegTotal;
    console.log("Total selected vegetable items: " + vegCount);
    console.log(vegCount + " vegetable - 1 free vegetable = " + "$" + vegTotal + ".00");
    console.log("Vegetable text1: " + text1);
    // Display selected items and order total on menu page
    console.log("Purchase Total: " + "$" + runningTotal + ".00");
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"
        + runningTotal + ".00" + "</strong></h3>";
}