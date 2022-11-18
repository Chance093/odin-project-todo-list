import { projectFolders } from "../index";
import { format, addDays } from "date-fns"


function getAllTodos() {
    const allTodos = [];
    projectFolders.forEach(pf => {
        pf.projects.forEach(project => {
            project.todos.forEach(todo => {
                allTodos.push(todo);
            })
        })
    })
    return allTodos;
}

function sortTodos() {
    const allTodos = getAllTodos();
    allTodos.sort((a, b) => {
        if (a.formattedDate < b.formattedDate) return -1;
        else if (a.formattedDate > b.formattedDate) return 1;
        else return 0
    })
    return allTodos;
}

function sortTodosByDate() {
    const sortedTodos = sortTodos();
    const pastDue = [];
    const today = [];
    const tomorrow = [];
    const thisWeek = [];
    const currentDate = format(new Date(), 'MM/dd/yy');
    const tomorrowsDate = format(addDays(new Date(), 1), 'MM/dd/yy');
    const nextWeekDate = format(addDays(new Date(), 7), 'MM/dd/yy');
    sortedTodos.forEach(todo => {
        if (todo.formattedDate < currentDate) {
            pastDue.push(todo);
        } else if (todo.formattedDate === currentDate) {
            today.push(todo);
        } else if (todo.formattedDate === tomorrowsDate) {
            tomorrow.push(todo);
        } else if (todo.formattedDate > tomorrowsDate && todo.formattedDate < nextWeekDate) {
            thisWeek.push(todo);
        }
    })
    return { pastDue, today, tomorrow, thisWeek };
}

function sortTodosByChecked(todos) {
    todos.sort((a, b) => {
        if (a.taskComplete && !b.taskComplete) return 1;
        else if (!a.taskComplete && b.taskComplete) return -1;
        else return 0;
    })
    return todos;
}

export { sortTodosByDate, sortTodosByChecked };