import './style.css';
import { addProjectFolder } from './controllers/project-folders';
import { addProject } from './controllers/projects';
import { setExamples } from './example';

const projectFolders = [];


const pfButton = document.querySelector('.pf-button');
pfButton.addEventListener('click', addProjectFolder);

setExamples();

export { projectFolders };