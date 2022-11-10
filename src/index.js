import './style.css';
import { Todo, Project, ProjectFolder } from './factory-functions';
import { displayFolders, removeModal } from './dom';


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

function addProject(e) {
    const project = projectName.value;
    const description = projectDescription.value;
    const newProj = Project(project, description);
    const index = e.target.dataset.buttonIndex;
    projectFolders[index].projects.push(newProj);
    removeModal();
    displayFolders(projectFolders);
    console.log(projectFolders);
}

// Click project add button associated with project folder
// Display modal to add project
// Fill out inputs
// Click submit button
// Add project object to project folder array
// Display all projects on sidebar
// Display project object info on main section

projectButton.addEventListener('click', addProject);





const pfName = document.querySelector('#pf-name');
const pfButton = document.querySelector('.pf-button');
const projectFolders = [];

function addProjectFolder() {
    const projFolder = pfName.value;
    const newProjFolder = ProjectFolder(projFolder);
    projectFolders.push(newProjFolder);
    displayFolders(projectFolders);
}

pfButton.addEventListener('click', addProjectFolder);