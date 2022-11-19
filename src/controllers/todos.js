import { projectFolders } from '../index';
import { Todo } from '../factory-functions';
import { displayProject } from '../dom/projects';
import { removeTodoModal } from '../dom/modal';
import { displayToday } from '../dom/links';

function addTodo(e) {
    const taskName = document.querySelector('#task-name');
    const dueDate = document.querySelector('#due-date');
    const priority = document.querySelector('#priority');
    const task = taskName.value;
    const date = dueDate.value;
    const newTodo = Todo(task, date);
    if (priority.checked) newTodo.priority = true;
    else newTodo.priority = false;
    const pfIndex = e.target.dataset.pfIndex;
    const pIndex = e.target.dataset.pIndex;
    projectFolders[pfIndex].projects[pIndex].todos.push(newTodo);
    removeTodoModal();
    displayProject(projectFolders[pfIndex].projects[pIndex], pfIndex, pIndex);
    console.log(projectFolders);
}

function editTodo(e) {
    const taskName = document.querySelector('#task-name');
    const dueDate = document.querySelector('#due-date');
    const priority = document.querySelector('#priority');
    const task = taskName.value;
    const date = dueDate.value;
    const editedTodo = Todo(task, date);
    if (priority.checked) editedTodo.priority = true;
    else editedTodo.priority = false;
    const pfIndex = e.target.dataset.pfIndex;
    const pIndex = e.target.dataset.pIndex;
    const tdIndex = e.target.dataset.tdIndex;
    projectFolders[pfIndex].projects[pIndex].todos.splice(tdIndex, 1, editedTodo);
    removeTodoModal();
    displayProject(projectFolders[pfIndex].projects[pIndex], pfIndex, pIndex);
}

function editListTodo(e) {
    const taskName = document.querySelector('#task-name');
    const dueDate = document.querySelector('#due-date');
    const task = taskName.value;
    const date = dueDate.value;
    const editedTodo = Todo(task, date);
    const pfIndex = e.target.dataset.pfIndex;
    const pIndex = e.target.dataset.pIndex;
    const tdIndex = e.target.dataset.tdIndex;
    projectFolders[pfIndex].projects[pIndex].todos.splice(tdIndex, 1, editedTodo);
    removeTodoModal();
    displayToday();
}

function removeTodo(e) {
    const pfIndex = e.target.dataset.pfIndex;
    const pIndex = e.target.dataset.pIndex;
    const tdIndex = e.target.dataset.tdIndex;
    projectFolders[pfIndex].projects[pIndex].todos.splice(tdIndex, 1);
    displayProject(projectFolders[pfIndex].projects[pIndex], pfIndex, pIndex)
}

function removeListTodo(e) {
    const pfIndex = e.target.dataset.pfIndex;
    const pIndex = e.target.dataset.pIndex;
    const tdIndex = e.target.dataset.tdIndex;
    projectFolders[pfIndex].projects[pIndex].todos.splice(tdIndex, 1);
    displayToday();
}

function checkTodo(e) {
    const pfIndex = e.target.dataset.pfIndex;
    const pIndex = e.target.dataset.pIndex;
    const tdIndex = e.target.dataset.tdIndex;
    if (this.checked) {
        projectFolders[pfIndex].projects[pIndex].todos[tdIndex].taskComplete = true;
        displayProject(projectFolders[pfIndex].projects[pIndex], pfIndex, pIndex);
    } else {
        projectFolders[pfIndex].projects[pIndex].todos[tdIndex].taskComplete = false;
        displayProject(projectFolders[pfIndex].projects[pIndex], pfIndex, pIndex);
    }
}

function checkListTodo(e) {
    const pfIndex = e.target.dataset.pfIndex;
    const pIndex = e.target.dataset.pIndex;
    const tdIndex = e.target.dataset.tdIndex;
    projectFolders[pfIndex].projects[pIndex].todos[tdIndex].taskComplete = true;
    displayToday();
}

function prioritizeTodo(e) {
    const pfIndex = e.target.dataset.pfIndex;
    const pIndex = e.target.dataset.pIndex;
    const tdIndex = e.target.dataset.tdIndex;
    if (this.checked) {
        projectFolders[pfIndex].projects[pIndex].todos[tdIndex].priority = true;
        displayProject(projectFolders[pfIndex].projects[pIndex], pfIndex, pIndex);
    } else {
        projectFolders[pfIndex].projects[pIndex].todos[tdIndex].priority = false;
        displayProject(projectFolders[pfIndex].projects[pIndex], pfIndex, pIndex);
    }
}

export { addTodo, editTodo, editListTodo, removeTodo, removeListTodo, checkTodo, checkListTodo };