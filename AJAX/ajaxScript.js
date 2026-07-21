function getMsg() {
    // STEP 1: Set up the XML HTTP Request object
    let ajaxRequest = new XMLHttpRequest();

    // Get input value of name to display to user after
    // request has been made
    let inputVal = document.getElementById("fullName").value;

    // Function to display user input value once request
    // has been received
    ajaxRequest.onload = function() {
        document.getElementById("tkuMsg").innerHTML = "Thank you "
            + inputVal + " for signing up!";
    }

    // STEP 2: Prepare the type of request and what to request
    // from the server
    ajaxRequest.open('GET', 'response.html', true);
    
    // STEP 3: Defines the AJAX response callback method that
    // establishes whether the response was successful and where
    // the data should be displayed
    ajaxRequest.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById('content').innerHTML =
                ajaxRequest.responseText;
        }
    }

    // STEP 4: Send the request
    ajaxRequest.send();
}

function changeContent() {
    let ajaxRequest = new XMLHttpRequest();
    ajaxRequest.open("GET", "ajax_basics.html", true);

    // Get HTML from /ajax_basics.html as text and
    // replace content of element with id 'replace' in /ajax_challenge.html
    // with content of element with id 'news' in ajax_basics.html
    ajaxRequest.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            // Create parser to handle AJAX response text
            const parser = new DOMParser();
            // Save response text as HTML
            const doc = parser.parseFromString(ajaxRequest.responseText, "text/html");
            document.getElementById('replace').innerHTML =
                doc.querySelector("#news").textContent;
        }
    }

    ajaxRequest.send();
}

// Always assign event listener to element with id 'load-btn' in
// /ajax_challenge.html on page load
const button = document.getElementById('load-btn');

// Run changeContent() on button click
button.addEventListener('click', function() {
    changeContent();
});