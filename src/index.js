import './style.css';
import { Todo, Project, ProjectFolder } from './factory-functions';


const input = document.querySelector('#test');
const button = document.querySelector('.testbutton');
const todos = [];

function addTodo() {
    const task = input.value;
    const date = '10/10/2022';
    const newTodo = Todo(task, date);
    todos.push(newTodo);
    console.table(todos);
}

button.addEventListener('click', addTodo);





const projectName = document.querySelector('#p-name');
const projectDescription = document.querySelector('#p-desc')
const projectButton = document.querySelector('.p-button');
const projects = [];

function addProject() {
    const project = projectName.value;
    const description = projectDescription.value;
    const newProj = Project(project, description);
    projects.push(newProj);
    console.table(projects);
}

projectButton.addEventListener('click', addProject);





const pfName = document.querySelector('#pf-name');
const pfButton = document.querySelector('.pf-button');
const projectFolders = [];

function addProjectFolder() {
    const projFolder = pfName.value;
    const newProjFolder = ProjectFolder(projFolder);
    projectFolders.push(newProjFolder);
    console.table(projectFolders);
}

pfButton.addEventListener('click', addProjectFolder);