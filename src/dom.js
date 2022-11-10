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
        const modalButton = document.querySelector('.p-button');
        projectList.classList.add('project-list');
        projectList.setAttribute('data-pf-index', index);
        button.classList.add('pf-button');
        modalButton.setAttribute('data-button-index', index);
        button.addEventListener('click', requestProjects);
        div.textContent = folder.name;
        button.textContent = '+';
        div.appendChild(button);
        projFolder.appendChild(div);
        projFolder.appendChild(projectList);
        list.appendChild(projFolder);
    })
    container.appendChild(list);
}

function requestProjects() {
    const modal = document.querySelector('.modal-container');
    modal.classList.add('show');
}


export { displayFolders };