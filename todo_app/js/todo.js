/*Gets the task from user input*/
function get_todos() {
    /*Create array of task inputs*/
    let todos = new Array;
    /*Pulls task that was saved in web browser memory*/
    let todos_str = localStorage.getItem('todo');
    /*If the input is not null then JSON.parse will
    /*communicate with the browser to make the task a JavaScript object*/
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }

    return todos;
}

/*Adds the given task to the get_todos function array*/
function add() {
    /*Takes the given task and creates a variable of it*/
    let task = document.getElementById('task').value;

    let todos = get_todos();
    /*Adds a new task to end of array*/
    todos.push(task);
    /*Converts the task input to a JSON string*/
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById('task').value = "";
    show();

    return false;
}

/*Keeps the tasks permanently displayed on the screen*/
function show() {
    /*Sets task that was retrieved as a variable*/
    let todos = get_todos();

    /*Sets up each task as an unordered list*/
    let html = '<ul>';
    /*Displays a task to the list in the order it was entered*/
    for (let i = 0; i < todos.length; i++) {
        /*Also displays the task as a list and creates the button with the "x"*/
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button></li>';
    }
    html += '</ul>';
    /*Displays the task as a list*/
    document.getElementById('todos').innerHTML = html;

    let buttons = document.getElementsByClassName('remove');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    }
}

function remove() {
    let id = this.getAttribute('id');
    let todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    /*Looks in show() how to display a removed item on screen*/
    show();
}

/*Displays the given task when the 'Add Item' button is clicked*/
document.getElementById('add').addEventListener('click', add);
/*Keeps inputs displayed permanently on screen*/
show();