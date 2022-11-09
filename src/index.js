import './style.css';
import Todo from './factory-functions';


const input = document.querySelector('#test');
const button = document.querySelector('.testbutton');
const todos = [];

function addTodo() {
    const task = input.value;
    const date = '10/10/2022';
    const newTodo = Todo(task, date);
    console.log(newTodo);
    todos.push(newTodo);
    console.log(todos);
}

button.addEventListener('click', addTodo);
