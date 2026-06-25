// Keeps track of whose turn it is
let activePlayer = 'X';
// Stores an array of moves, used to determine win conditions
let selectedSquares = [];

// For placing an x or o in a square
function placeXOrO(squareNumber) {
    // This condition ensures a square hasn't already been selected
    // The .some() method is used to check each element of selectedSquares array
    // to see if it contains the square number clicked on
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        // This variable retrieves the HTML element id that was clicked
        let select = document.getElementById(squareNumber);
        // This condition checks who's turn it is
        if (activePlayer === 'X') {
            // If activePlayer equals 'X', the x.png is placed in HTML
            select.style.backgroundImage = 'url("images/x.png")';
            // Active player may only be 'X' or 'O', so if not 'X', it must be 'O'
        }
        else {
            // If activePlayer is equal to 'O', the o.png is placed in HTML
            select.style.backgroundImage = 'url("images/o.png")';
        }
        // squareNumber and activePlayer are concatenated together and added to selectedSquares
        selectedSquares.push(squareNumber + activePlayer);
        // This calls a function to check for any win conditions
        checkWinConditions();
        // This condition is for changing the active player
        if (activePlayer === 'X') {
            // If active player is 'X' change it to 'O'
            activePlayer = 'O';
        }
        // If active player is anything other than 'X'
        else {
            // Change activePlayer to 'X'
            activePlayer = 'X';
        }
        // This function plays placement sound
        audio('./media/place.mp3');
        // This condition checks to see if it's the computer's turn
        if (activePlayer === 'O') {
            // This function disables clicking for computer's turn
            disableClick();
            // This function waits 1 second before the computer places an image and enables click
            setTimeout(function() { computersTurn(); }, 1000);
        }
        // Returning true is needed for computersTurn() to work
        return true;
    }
    // This function results in a random square being selected by the computer
    function computersTurn() {
        // Boolean needed for while loop
        let success = false;
        // Stores a random number between 0-8
        let pickASquare;
        // This condition allows while loop to keep trying if a square is already selected
        while (!success) {
            // A random number between 0 and 8 is selected
            pickASquare = String(Math.floor(Math.random() * 9));
            // If the random number evaluated returns true, the square hasn't been selected yet
            if (placeXOrO(pickASquare)) {
                // This line calls the function
                placeXOrO(pickASquare);
                // This changes the boolean and ends the loop
                success = true;
            }
        }
    }
}