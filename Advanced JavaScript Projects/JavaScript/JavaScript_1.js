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

const c = document.getElementById("draw");
const ctx = c.getContext("2d");
ctx.font = "30px Arial";
ctx.fillText("Hello, World!", 200, 50);

const grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "orange");
grd.addColorStop(1, "purple");
ctx.fillStyle = grd;
ctx.fillRect(20, 20, 150, 100);