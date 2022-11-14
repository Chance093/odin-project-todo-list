import { projectFolders } from '../index';
import { Project } from '../factory-functions';
import { displayFolders, displayProject } from '../dom/display'
import { removeProjectModal } from '../dom/modal';

function addProject(e) {
    const projectName = document.querySelector('#p-name');
    const projectDescription = document.querySelector('#p-desc');
    const project = projectName.value;
    const description = projectDescription.value;
    const newProj = Project(project, description);
    const index = e.target.dataset.buttonIndex;
    projectFolders[index].projects.push(newProj);
    removeProjectModal();
    displayFolders(projectFolders);
    displayProject(newProj, index, projectFolders[index].projects.length - 1);
}

export { addProject };