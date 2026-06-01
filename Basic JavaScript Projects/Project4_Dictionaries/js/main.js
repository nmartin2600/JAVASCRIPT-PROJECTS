/*Create dictionary and replace text of paragraph with id "dictionary"*/
function myDictionary() {
    let dict = {
        "Name": "Nick",
        "Age": 28,
        "Gender": "Male"
    }
    let para = document.getElementById('dictionary');
    para.innerHTML = "My name is " + dict.Name;
}

/*Remove "Name" key from dictionary and display what it's value was*/
function removeFromDictionary() {
    let dict = {
        "Name": "Nick",
        "Age": 28,
        "Gender": "Male"
    }
    const deleted = dict.Name;
    delete dict.Name;
    let para = document.getElementById('dictionary');
    para.innerHTML = "The name deleted from the dictionary was: " + deleted
    + ". It's value is now: " + dict.Name;
}