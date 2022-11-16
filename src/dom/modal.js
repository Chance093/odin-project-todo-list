import { projectFolders } from "..";
import { addProject, editProject } from "../controllers/projects";
import { addTodo, editTodo } from "../controllers/todos";

function displayProjectModal(e) {
    const modal = document.querySelector('.project-modal');
    const modalButton = document.querySelector('.p-button');
    const projectName = document.querySelector('#p-name');
    const projectDescription = document.querySelector('#p-desc');
    projectName.value = '';
    projectDescription.value = '';
    const index = e.target.dataset.buttonIndex;
    modalButton.setAttribute('data-pf-index', index);
    modalButton.addEventListener('click', addProject);
    modal.classList.add('show');
}

function displayEditProjectModal(e) {
    const modal = document.querySelector('.project-modal');
    const modalButton = document.querySelector('.p-button');
    const projectName = document.querySelector('#p-name');
    const projectDescription = document.querySelector('#p-desc');
    const pfIndex = e.target.dataset.pfIndex;
    const pIndex = e.target.dataset.pIndex;
    projectName.value = projectFolders[pfIndex].projects[pIndex].name;
    projectDescription.value = projectFolders[pfIndex].projects[pIndex].description;
    modalButton.setAttribute('data-pf-index', pfIndex);
    modalButton.setAttribute('data-p-index', pIndex);
    modalButton.addEventListener('click', editProject);
    modal.classList.add('show');
}

function removeProjectModal() {
    const modal = document.querySelector('.project-modal');
    const modalButton = document.querySelector('.p-button');
    modalButton.removeAttribute('data-pf-index');
    modalButton.removeAttribute('data-p-index');
    modalButton.removeEventListener('click', addProject);
    modalButton.removeEventListener('click', editProject);
    modal.classList.remove('show');
}

function displayTodoModal(e) {
    const modal = document.querySelector('.todo-modal');
    const modalButton = document.querySelector('.td-button');
    const taskName = document.querySelector('#task-name');
    const dueDate = document.querySelector('#due-date');
    const pfIndex = e.target.dataset.pfIndex;
    const pIndex = e.target.dataset.pIndex;
    taskName.value = '';
    dueDate.value = '';
    modalButton.setAttribute('data-pf-index', pfIndex);
    modalButton.setAttribute('data-p-index', pIndex);
    modalButton.addEventListener('click', addTodo);
    modal.classList.add('show');
}

function displayEditTodoModal(e) {
    const modal = document.querySelector('.todo-modal');
    const modalButton = document.querySelector('.td-button');
    const taskName = document.querySelector('#task-name');
    const dueDate = document.querySelector('#due-date');
    const pfIndex = e.target.dataset.pfIndex;
    const pIndex = e.target.dataset.pIndex;
    const tdIndex = e.target.dataset.tdIndex;
    taskName.value = projectFolders[pfIndex].projects[pIndex].todos[tdIndex].task;
    dueDate.value = projectFolders[pfIndex].projects[pIndex].todos[tdIndex].formattedDate;
    modalButton.setAttribute('data-pf-index', pfIndex);
    modalButton.setAttribute('data-p-index', pIndex);
    modalButton.setAttribute('data-td-index', tdIndex);
    modalButton.addEventListener('click', editTodo);
    modal.classList.add('show');
}

function removeTodoModal() {
    const modal = document.querySelector('.todo-modal');
    const modalButton = document.querySelector('.td-button');
    modalButton.removeAttribute('data-pf-index');
    modalButton.removeAttribute('data-p-index');
    modalButton.removeAttribute('data-td-index');
    modalButton.removeEventListener('click', addTodo);
    modalButton.removeEventListener('click', editTodo);
    modal.classList.remove('show');
}


export { displayProjectModal, removeProjectModal, displayTodoModal, removeTodoModal, displayEditTodoModal, displayEditProjectModal };