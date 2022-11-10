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
        projectList.classList.add('project-list');
        projectList.setAttribute('data-pf-index', index);
        button.classList.add('pf-button');
        button.setAttribute('data-button-index', index);
        button.addEventListener('click', displayModal);
        div.textContent = folder.name;
        button.textContent = '+';
        div.appendChild(button);
        projFolder.appendChild(div);
        projFolder.appendChild(projectList);
        list.appendChild(projFolder);
        const projects = folder.projects;
        projects.forEach((project, index) => {
            const proj = document.createElement('li');
            proj.textContent = project.name;
            projectList.appendChild(proj)
        })
    })
    container.appendChild(list);
}

function displayModal(e) {
    const modal = document.querySelector('.modal-container');
    const modalButton = document.querySelector('.p-button');
    const index = e.target.dataset.buttonIndex;
    modalButton.setAttribute('data-button-index', index);
    modal.classList.add('show');
}

function removeModal() {
    const modal = document.querySelector('.modal-container');
    const modalButton = document.querySelector('.p-button');
    modalButton.removeAttribute('data-button-index');
    modal.classList.remove('show');
}


export { displayFolders, removeModal };