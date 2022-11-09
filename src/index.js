import './style.css';
import { Todo, Project } from './factory-functions';


const input = document.querySelector('#test');
const button = document.querySelector('.testbutton');
const projectName = document.querySelector('#p-name');
const projectDescription = document.querySelector('#p-desc')

const projectButton = document.querySelector('.p-button');
const projects = [];
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




function addProject() {
    const project = projectName.value;
    const description = projectDescription.value;
    const newProj = Project(project, description);
    console.log(newProj);
    projects.push(newProj);
    console.log(projects);
}

projectButton.addEventListener('click', addProject);