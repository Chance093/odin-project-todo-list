function Todo(task, date) {
    let dateCreated = new Date();
    let taskComplete = false;
    return { task, date, dateCreated, taskComplete };
}

export default Todo;