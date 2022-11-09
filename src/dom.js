const container = document.querySelector('.project-folder-list');

function displayFolders(folders) {
    container.innerHTML = '';
    const list = document.createElement('ul');
    folders.forEach(folder => {
        const projFolder = document.createElement('li');
        const button = document.createElement('button');
        const div = document.createElement('div');
        const projectList = document.createElement('ul');
        projectList.classList.add('project-list');
        div.textContent = folder.name;
        button.textContent = '+';
        div.appendChild(button);
        projFolder.appendChild(div);
        projFolder.appendChild(projectList);
        list.appendChild(projFolder);
    })
    container.appendChild(list);
}



export { displayFolders };