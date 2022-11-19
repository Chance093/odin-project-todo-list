import { projectFolders } from "../index";
import { checkListTodo, removeListTodo } from "../controllers/todos";
import { displayEditListTodoModal } from "../dom/modal";
import { format, addDays } from "date-fns";

function displayToday() {
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
    projectFolders.forEach((pf, pfIndex) => {
        pf.projects.forEach((p, pIndex) => {
            p.todos.forEach((td, tdIndex) => {
                const currentDate = format(new Date(), 'MM/dd/yy');
                if (td.taskComplete) return;
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
                checkbox.setAttribute('id', `todo${tdIndex}`);
                checkbox.setAttribute('data-pf-index', pfIndex);
                checkbox.setAttribute('data-p-index', pIndex);
                checkbox.setAttribute('data-td-index', tdIndex);
                checkbox.addEventListener('change', checkListTodo);
                deleteButton.setAttribute('data-pf-index', pfIndex);
                deleteButton.setAttribute('data-p-index', pIndex);
                deleteButton.setAttribute('data-td-index', tdIndex);
                deleteButton.addEventListener('click', removeListTodo);
                editButton.setAttribute('data-pf-index', pfIndex);
                editButton.setAttribute('data-p-index', pIndex);
                editButton.setAttribute('data-td-index', tdIndex);
                editButton.addEventListener('click', displayEditListTodoModal);
                task.textContent = td.task;
                date.textContent = td.formattedDate;
                editButton.textContent = '/';
                deleteButton.textContent = 'X';
                leftContainer.appendChild(checkbox);
                leftContainer.appendChild(task);
                rightContainer.appendChild(date);
                rightContainer.appendChild(editButton);
                rightContainer.appendChild(deleteButton);
                todoContainer.appendChild(leftContainer);
                todoContainer.appendChild(rightContainer);
                if (td.formattedDate < currentDate) {
                    pastDueList.appendChild(todoContainer);
                } else if (td.formattedDate === currentDate) {
                    todayList.appendChild(todoContainer);
                }
            })
        })
    })
    mainContainer.appendChild(documentHeader);
    mainContainer.appendChild(pastDueHeader);
    mainContainer.appendChild(pastDueList);
    mainContainer.appendChild(todayHeader);
    mainContainer.appendChild(todayList);
}

function displayUpcoming() {
    const mainContainer = document.querySelector('main');
    mainContainer.innerHTML = '';
    const documentHeader = document.createElement('h1');
    const tomorrowHeader = document.createElement('h2');
    const thisWeekHeader = document.createElement('h2');
    documentHeader.textContent = 'Upcoming';
    tomorrowHeader.textContent = 'Due Tomorrow';
    thisWeekHeader.textContent = 'Due This Week';
    const tomorrowList = document.createElement('ul');
    const thisWeekList = document.createElement('ul');
    projectFolders.forEach((pf, pfIndex) => {
        pf.projects.forEach((p, pIndex) => {
            p.todos.forEach((td, tdIndex) => {
                const tomorrowsDate = format(addDays(new Date(), 1), 'MM/dd/yy');
                const nextWeekDate = format(addDays(new Date(), 7), 'MM/dd/yy');
                if (td.taskComplete) return;
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
                checkbox.setAttribute('id', `todo${tdIndex}`);
                checkbox.setAttribute('data-pf-index', pfIndex);
                checkbox.setAttribute('data-p-index', pIndex);
                checkbox.setAttribute('data-td-index', tdIndex);
                checkbox.addEventListener('change', checkListTodo);
                deleteButton.setAttribute('data-pf-index', pfIndex);
                deleteButton.setAttribute('data-p-index', pIndex);
                deleteButton.setAttribute('data-td-index', tdIndex);
                deleteButton.addEventListener('click', removeListTodo);
                editButton.setAttribute('data-pf-index', pfIndex);
                editButton.setAttribute('data-p-index', pIndex);
                editButton.setAttribute('data-td-index', tdIndex);
                editButton.addEventListener('click', displayEditListTodoModal);
                task.textContent = td.task;
                date.textContent = td.formattedDate;
                editButton.textContent = '/';
                deleteButton.textContent = 'X';
                leftContainer.appendChild(checkbox);
                leftContainer.appendChild(task);
                rightContainer.appendChild(date);
                rightContainer.appendChild(editButton);
                rightContainer.appendChild(deleteButton);
                todoContainer.appendChild(leftContainer);
                todoContainer.appendChild(rightContainer);
                if (td.formattedDate === tomorrowsDate) {
                    tomorrowList.appendChild(todoContainer);
                } else if (td.formattedDate > tomorrowsDate && td.formattedDate < nextWeekDate) {
                    thisWeekList.appendChild(todoContainer);
                }
            })
        })
    })
    mainContainer.appendChild(documentHeader);
    mainContainer.appendChild(tomorrowHeader);
    mainContainer.appendChild(tomorrowList);
    mainContainer.appendChild(thisWeekHeader);
    mainContainer.appendChild(thisWeekList);
}

export { displayToday, displayUpcoming }