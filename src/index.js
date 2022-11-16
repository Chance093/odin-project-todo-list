import './style.css';
import { addProjectFolder } from './controllers/project-folders';
import { addProject } from './controllers/projects';
import { addTodo } from './controllers/todos';
import { setExamples } from './example';

const projectFolders = [];

// const todoButton = document.querySelector('.td-button');
// todoButton.addEventListener('click', addTodo);

const projectButton = document.querySelector('.p-button');
projectButton.addEventListener('click', addProject);

const pfButton = document.querySelector('.pf-button');
pfButton.addEventListener('click', addProjectFolder);

setExamples();

export { projectFolders };