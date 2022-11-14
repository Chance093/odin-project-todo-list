import { selectProject } from "./index";

const container = document.querySelector('.project-folder-list');
const pfButton = document.querySelector('.pf-button');

function displayFolders(folders) {
    container.innerHTML = '';
    const list = document.createElement('ul');
    folders.forEach((folder, index) => {
        const projFolder = document.createElement('li');
        const button = document.createElement('button');
        const div = document.createElement('div');
        const projectList = document.createElement('ul');
        const pfIndex = index;
        projectList.classList.add('project-list');
        projectList.setAttribute('data-pf-index', index);
        button.classList.add('pf-button');
        button.setAttribute('data-button-index', index);
        button.addEventListener('click', displayProjectModal);
        div.textContent = folder.name;
        button.textContent = '+';
        div.appendChild(button);
        projFolder.appendChild(div);
        projFolder.appendChild(projectList);
        list.appendChild(projFolder);
        const projects = folder.projects;
        projects.forEach((project, index) => {
            const proj = document.createElement('li');
            proj.setAttribute('data-p-index', index);
            proj.setAttribute('data-pf-index', pfIndex);
            proj.textContent = project.name;
            projectList.appendChild(proj)
            proj.addEventListener('click', selectProject);
        })
    })
    container.appendChild(list);
}



function displayProjectModal(e) {
    const modal = document.querySelector('.project-modal');
    const modalButton = document.querySelector('.p-button');
    const index = e.target.dataset.buttonIndex;
    modalButton.setAttribute('data-button-index', index);
    modal.classList.add('show');
}

function removeProjectModal() {
    const modal = document.querySelector('.project-modal');
    const modalButton = document.querySelector('.p-button');
    modalButton.removeAttribute('data-button-index');
    modal.classList.remove('show');
}

function displayTodoModal(e) {
    const modal = document.querySelector('.todo-modal');
    const modalButton = document.querySelector('.td-button');
    const pfIndex = e.target.dataset.pfIndex;
    const pIndex = e.target.dataset.pIndex;
    modalButton.setAttribute('data-pf-index', pfIndex);
    modalButton.setAttribute('data-p-index', pIndex);
    modal.classList.add('show');
}

function removeTodoModal() {
    const modal = document.querySelector('.todo-modal');
    const modalButton = document.querySelector('.td-button');
    modalButton.removeAttribute('data-pf-index');
    modalButton.removeAttribute('data-p-index');
    modal.classList.remove('show');
}


function displayProject(project, pfIndex, pIndex) {
    const mainContainer = document.querySelector('main');
    mainContainer.innerHTML = '';
    const divHeader = document.createElement('div');
    const description = document.createElement('p');
    const todoHeaderContainer = document.createElement('div');
    const todoList = document.createElement('ul');
    const projectHeader = document.createElement('h1');
    const projectDelete = document.createElement('button');
    const todoHeader = document.createElement('h2');
    const addTodo = document.createElement('button');
    addTodo.setAttribute('data-pf-index', pfIndex);
    addTodo.setAttribute('data-p-index', pIndex);
    addTodo.addEventListener('click', displayTodoModal);
    divHeader.classList.add('p-header');
    description.classList.add('p-description');
    todoHeaderContainer.classList.add('todo-header');
    todoList.classList.add('todo-list');
    projectHeader.textContent = project.name;
    projectDelete.textContent = '-';
    description.textContent = project.description;
    todoHeader.textContent = 'Todos';
    addTodo.textContent = '+';
    divHeader.appendChild(projectHeader);
    divHeader.appendChild(projectDelete);
    todoHeaderContainer.appendChild(todoHeader);
    todoHeaderContainer.appendChild(addTodo);
    mainContainer.appendChild(divHeader);
    mainContainer.appendChild(description);
    mainContainer.appendChild(todoHeaderContainer);
    mainContainer.appendChild(todoList);
    const todos = project.todos;
    todos.forEach((todo) => {
        const todoItem = document.createElement('li');
        todoItem.textContent = todo.task;
        todoList.appendChild(todoItem);
    })
}


export { displayFolders, removeProjectModal, displayProject, removeTodoModal };