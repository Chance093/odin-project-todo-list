function updateProjectFolderList(folders) {
    const container = document.querySelector('.project-folder-list');
    container.innerHTML = '';
    const list = document.createElement('ul');
    folders.forEach(folder => {
        const projFolder = document.createElement('li');
        projFolder.textContent = folder.name;
        list.appendChild(projFolder);
    })
    container.appendChild(list);
}

export { updateProjectFolderList };