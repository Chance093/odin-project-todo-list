import { displayEditProjectModal, displayEditTodoModal, displayProjectModal, displayTodoModal } from "./modal";
import { removeProject, selectProject } from "../controllers/projects";
import { removeTodo } from "../controllers/todos";
import { sortDateArrays } from "../controllers/sort-dates";

function displayFolders(folders) {
    const list = document.querySelector('.project-folder-list');
    list.innerHTML = '';
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
}




function displayProject(project, pfIndex, pIndex) {
    const mainContainer = document.querySelector('main');
    mainContainer.innerHTML = '';
    const divHeader = document.createElement('div');
    const divButtons = document.createElement('div');
    const description = document.createElement('p');
    const todoHeaderContainer = document.createElement('div');
    const todoList = document.createElement('ul');
    const projectHeader = document.createElement('h1');
    const projectDelete = document.createElement('button');
    const projectEdit = document.createElement('button');
    const todoHeader = document.createElement('h2');
    const addTodo = document.createElement('button');
    addTodo.setAttribute('data-pf-index', pfIndex);
    addTodo.setAttribute('data-p-index', pIndex);
    addTodo.addEventListener('click', displayTodoModal);
    projectDelete.classList.add('p-delete');
    projectDelete.setAttribute('data-pf-index', pfIndex);
    projectDelete.setAttribute('data-p-index', pIndex);
    projectDelete.addEventListener('click', removeProject);
    projectEdit.classList.add('p-edit');
    projectEdit.setAttribute('data-pf-index', pfIndex);
    projectEdit.setAttribute('data-p-index', pIndex);
    projectEdit.addEventListener('click', displayEditProjectModal);
    divHeader.classList.add('p-header');
    description.classList.add('p-description');
    todoHeaderContainer.classList.add('todo-header');
    todoList.classList.add('todo-list');
    projectHeader.textContent = project.name;
    projectDelete.textContent = 'X';
    projectEdit.textContent = '/';
    description.textContent = project.description;
    todoHeader.textContent = 'To Do List';
    addTodo.textContent = '+';
    divButtons.appendChild(projectEdit);
    divButtons.appendChild(projectDelete);
    divHeader.appendChild(projectHeader);
    divHeader.appendChild(divButtons);
    todoHeaderContainer.appendChild(todoHeader);
    todoHeaderContainer.appendChild(addTodo);
    mainContainer.appendChild(divHeader);
    mainContainer.appendChild(description);
    mainContainer.appendChild(todoHeaderContainer);
    mainContainer.appendChild(todoList);
    const todos = project.todos;
    todos.forEach((todo, tdIndex) => {
        const todoContainer = document.createElement('li');
        const leftContainer = document.createElement('div');
        const rightContainer = document.createElement('div');
        const checkbox = document.createElement('input');
        const task = document.createElement('p');
        const date = document.createElement('p');
        const editButton = document.createElement('button');
        const deleteButton = document.createElement('button');
        deleteButton.setAttribute('data-pf-index', pfIndex);
        deleteButton.setAttribute('data-p-index', pIndex);
        deleteButton.setAttribute('data-td-index', tdIndex);
        deleteButton.addEventListener('click', removeTodo);
        editButton.setAttribute('data-pf-index', pfIndex);
        editButton.setAttribute('data-p-index', pIndex);
        editButton.setAttribute('data-td-index', tdIndex);
        editButton.addEventListener('click', displayEditTodoModal)
        leftContainer.classList.add('left-container');
        rightContainer.classList.add('right-container');
        checkbox.setAttribute('type', 'checkbox');
        task.textContent = todo.task;
        date.textContent = todo.formattedDate;
        editButton.textContent = '/';
        deleteButton.textContent = 'X';
        leftContainer.appendChild(checkbox);
        leftContainer.appendChild(task);
        rightContainer.appendChild(date);
        rightContainer.appendChild(editButton);
        rightContainer.appendChild(deleteButton);
        todoContainer.appendChild(leftContainer);
        todoContainer.appendChild(rightContainer);
        todoList.appendChild(todoContainer);
    })
}

function displayToday() {
    const arrayObject = sortDateArrays();
    const today = arrayObject.today;
    const pastDue = arrayObject.pastDue;
    const mainContainer = document.querySelector('main');
    mainContainer.innerHTML = '';
    const documentHeader = document.createElement('h1');
    const pastDueHeader = document.createElement('h2');
    const todayHeader = document.createElement('h2');
    documentHeader.textContent = 'Today';
    pastDueHeader.textContent = 'Past Due';
    todayHeader.textContent = 'Due Today';
    const pastDueList = document.createElement('ul');
    const todayList = document.createElement('ul');
    pastDue.forEach(pdTodo => {
        const todoContainer = document.createElement('li');
        const leftContainer = document.createElement('div');
        const rightContainer = document.createElement('div');
        const checkbox = document.createElement('input');
        const task = document.createElement('p');
        const date = document.createElement('p');
        const editButton = document.createElement('button');
        const deleteButton = document.createElement('button');
        leftContainer.classList.add('left-container');
        rightContainer.classList.add('right-container');
        checkbox.setAttribute('type', 'checkbox');
        task.textContent = pdTodo.task;
        date.textContent = pdTodo.formattedDate;
        editButton.textContent = '/';
        deleteButton.textContent = 'X';
        leftContainer.appendChild(checkbox);
        leftContainer.appendChild(task);
        rightContainer.appendChild(date);
        rightContainer.appendChild(editButton);
        rightContainer.appendChild(deleteButton);
        todoContainer.appendChild(leftContainer);
        todoContainer.appendChild(rightContainer);
        pastDueList.appendChild(todoContainer);
    })
    today.forEach(tTodo => {
        const todoContainer = document.createElement('li');
        const leftContainer = document.createElement('div');
        const rightContainer = document.createElement('div');
        const checkbox = document.createElement('input');
        const task = document.createElement('p');
        const date = document.createElement('p');
        const editButton = document.createElement('button');
        const deleteButton = document.createElement('button');
        leftContainer.classList.add('left-container');
        rightContainer.classList.add('right-container');
        checkbox.setAttribute('type', 'checkbox');
        task.textContent = tTodo.task;
        date.textContent = tTodo.formattedDate;
        editButton.textContent = '/';
        deleteButton.textContent = 'X';
        leftContainer.appendChild(checkbox);
        leftContainer.appendChild(task);
        rightContainer.appendChild(date);
        rightContainer.appendChild(editButton);
        rightContainer.appendChild(deleteButton);
        todoContainer.appendChild(leftContainer);
        todoContainer.appendChild(rightContainer);
        todayList.appendChild(todoContainer);
    })
    mainContainer.appendChild(documentHeader);
    mainContainer.appendChild(pastDueHeader);
    mainContainer.appendChild(pastDueList);
    mainContainer.appendChild(todayHeader);
    mainContainer.appendChild(todayList);
}


export { displayFolders, displayProject, displayToday };