import './style.css';
import { Todo, Project, ProjectFolder } from './factory-functions';
import { displayFolders, displayProject, removeProjectModal, removeTodoModal } from './dom';


const taskName = document.querySelector('#task-name');
const dueDate = document.querySelector('#due-date');
const todoButton = document.querySelector('.td-button');

function addTodo(e) {
    const task = taskName.value;
    const date = dueDate.value
    const newTodo = Todo(task, date);
    const pfIndex = e.target.dataset.pfIndex;
    const pIndex = e.target.dataset.pIndex;
    projectFolders[pfIndex].projects[pIndex].todos.push(newTodo);
    removeTodoModal();
    displayProject(projectFolders[pfIndex].projects[pIndex], pfIndex, pIndex);
}

todoButton.addEventListener('click', addTodo);





const projectName = document.querySelector('#p-name');
const projectDescription = document.querySelector('#p-desc');
const projectButton = document.querySelector('.p-button');

function addProject(e) {
    const project = projectName.value;
    const description = projectDescription.value;
    const newProj = Project(project, description);
    const index = e.target.dataset.buttonIndex;
    projectFolders[index].projects.push(newProj);
    removeProjectModal();
    displayFolders(projectFolders);
    displayProject(newProj, index, -1);
    console.log(projectFolders);
}

function selectProject(e) {
    const index = e.target.dataset.pIndex;
    const pfIndex = e.target.dataset.pfIndex;
    const proj = projectFolders[pfIndex].projects[index];
    displayProject(proj, pfIndex, index);
}

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

export { selectProject };