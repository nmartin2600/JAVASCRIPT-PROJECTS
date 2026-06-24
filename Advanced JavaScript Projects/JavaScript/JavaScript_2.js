function validateForm() {
    const fname = document.forms["contact"]["fname"].value;
    const lname = document.forms["contact"]["lname"].value;
    const email = document.forms["contact"]["email"].value;

    if (fname == "" || lname == "" || email == "") {
        alert("All fields must be filled out");
        return false;
    }
}