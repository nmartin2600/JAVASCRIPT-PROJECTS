function color_choice() {
    let color_output;
    let colors = document.getElementById("color_input").value;
    let color_string = " is a great color!";

    switch(colors) {
        case "Red":
            color_output = "Red" + color_string;
            break;
        case "Yellow":
            color_output = "Yellow" + color_string;
            break;
        case "Green":
            color_output = "Green" + color_string;
            break;
        case "Blue":
            color_output = "Blue" + color_string;
            break;
        case "Pink":
            color_output = "Pink" + color_string;
            break;
        case "Purple":
            color_output = "Purple" + color_string;
            break;
        default:
            color_output = "Please enter a color exactly as written on the above list.";
    }

    document.getElementById("output").innerHTML = color_output;
}

function sentence() {
    let sentences = document.getElementsByClassName("click");
    sentences[0].innerHTML = "Hello, World!";
}