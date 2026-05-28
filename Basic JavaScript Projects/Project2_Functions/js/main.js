// Changes button text to concatenation of two strings
function changeButtonText() {
    const word1 = 'Press', word2 = ' here!';
    document.getElementById('btn').innerHTML = word1 + word2;
}

// Changes p element text to concatenation of two strings using += operator
function changeParagraphText() {
    let text = 'Hello, ';
    text += ' World!'
    document.getElementById('paragraph').innerHTML = text;
}