import './style.css';
import { addProjectFolder } from './controllers/project-folder';
import { addProject } from './controllers/project';
import { addTodo } from './controllers/todo';

const projectFolders = [];


const todoButton = document.querySelector('.td-button');
todoButton.addEventListener('click', addTodo);

const projectButton = document.querySelector('.p-button');
projectButton.addEventListener('click', addProject);

const pfButton = document.querySelector('.pf-button');
pfButton.addEventListener('click', addProjectFolder);

export { projectFolders };