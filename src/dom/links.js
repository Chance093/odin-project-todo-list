import { sortTodosByDate } from "../controllers/sorter";
import { checkTodo, removeTodo } from "../controllers/todos";
import { displayEditTodoModal } from "../dom/modal";

function displayToday() {
    const arrayObject = sortTodosByDate();
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
        const pfIndex = pdTodo.pfIndex;
        const pIndex = pdTodo.pIndex;
        const tdIndex = pdTodo.tdIndex;
        leftContainer.classList.add('left-container');
        rightContainer.classList.add('right-container');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.setAttribute('id', `todo${tdIndex}`);
        checkbox.setAttribute('data-pf-index', pfIndex);
        checkbox.setAttribute('data-p-index', pIndex);
        checkbox.setAttribute('data-td-index', tdIndex);
        checkbox.addEventListener('change', checkTodo);
        deleteButton.setAttribute('data-pf-index', pfIndex);
        deleteButton.setAttribute('data-p-index', pIndex);
        deleteButton.setAttribute('data-td-index', tdIndex);
        deleteButton.addEventListener('click', removeTodo);
        editButton.setAttribute('data-pf-index', pfIndex);
        editButton.setAttribute('data-p-index', pIndex);
        editButton.setAttribute('data-td-index', tdIndex);
        editButton.addEventListener('click', displayEditTodoModal);
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

function displayUpcoming() {
    const arrayObject = sortTodosByDate();
    const tomorrow = arrayObject.tomorrow;
    const thisWeek = arrayObject.thisWeek;
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
    tomorrow.forEach(tTodo => {
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
        tomorrowList.appendChild(todoContainer);
    })
    thisWeek.forEach(twTodo => {
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
        task.textContent = twTodo.task;
        date.textContent = twTodo.formattedDate;
        editButton.textContent = '/';
        deleteButton.textContent = 'X';
        leftContainer.appendChild(checkbox);
        leftContainer.appendChild(task);
        rightContainer.appendChild(date);
        rightContainer.appendChild(editButton);
        rightContainer.appendChild(deleteButton);
        todoContainer.appendChild(leftContainer);
        todoContainer.appendChild(rightContainer);
        thisWeekList.appendChild(todoContainer);
    })
    mainContainer.appendChild(documentHeader);
    mainContainer.appendChild(tomorrowHeader);
    mainContainer.appendChild(tomorrowList);
    mainContainer.appendChild(thisWeekHeader);
    mainContainer.appendChild(thisWeekList);
}

export { displayToday, displayUpcoming }