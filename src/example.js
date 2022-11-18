import { projectFolders } from "./index";
import { Todo, Project, ProjectFolder } from "./factory-functions";
import { displayFolders, displayProject } from "./dom/projects";


function setExamples() {
    const todo1 = Todo('Todo 1', '2022-11-16');
    const todo2 = Todo('Todo 2', '2022-11-16');
    const todo3 = Todo('Todo 3', '2022-11-16');
    const exampleProject = Project('Example Project', 'This is an example project. You can edit the name and description of this project by clicking the edit button. You can also delete this project from the project folder by clicking the project delete button. Clicking the add todo button will allow you to add as many todos as you want to this project!');
    const projectFolder1 = ProjectFolder('Personal');
    const projectFolder2 = ProjectFolder('Work');
    exampleProject.todos.push(todo1);
    exampleProject.todos.push(todo2);
    exampleProject.todos.push(todo3);
    projectFolder1.projects.push(exampleProject);
    projectFolders.push(projectFolder1);
    projectFolders.push(projectFolder2);
    displayFolders(projectFolders);
    displayProject(exampleProject, 0, 0);
}

export { setExamples };