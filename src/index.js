import './style.css';
import { addProjectFolder } from './controllers/project-folders';
import { setExamples } from './example';
import { removeProjectModal, removeTodoModal } from './dom/modal';

const projectFolders = [];


const pfButton = document.querySelector('.pf-button');
pfButton.addEventListener('click', addProjectFolder);

const cpButton = document.querySelector('.cp-button');
const ctdButton = document.querySelector('.ctd-button');
cpButton.addEventListener('click', removeProjectModal);
ctdButton.addEventListener('click', removeTodoModal);

setExamples();

export { projectFolders };