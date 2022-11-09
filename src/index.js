import './style.css';


const input = document.querySelector('#test');
const button = document.querySelector('.testbutton');
const todos = [];

function Todo(task, date) {
    let dateCreated = new Date();
    return { task, date, dateCreated };
}

function addTodo() {
    const task = input.value;
    const date = '10/10/2022';
    const newTodo = Todo(task, date);
    console.log(newTodo);
    todos.push(newTodo);
    console.log(todos);
}

button.addEventListener('click', addTodo);
