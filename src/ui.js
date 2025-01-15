import horse from './images/horse-2795105_640.png';
import logo from './images/todoerer-logo.png';
import moon from './images/moon-4917183_640.png';
import grass from './images/hq720.png';
import heart from './images/heart-7764716_640.png'
import halfHeart from './images/half-heart.png'
import * as project from './project-logic.js'
import * as todo from './todo-logic.js'

const outerContainer = document.createElement('div');
let currentProjectId;
let projects = project.getAllProjects();


export function splashPageLoader() {
    //  declare variables to create page elements
    const splashContainer = document.createElement('div');
    const horseImg = document.createElement('img');
    const moonImg = document.createElement('img');
    const logoImg = document.createElement('img');
    const grassImg = document.createElement('img');
    const text = document.createElement('p');
    const logoBtn = document.createElement('button');

    document.body.appendChild(splashContainer);
    splashContainer.appendChild(grassImg);
    splashContainer.appendChild(horseImg);
    splashContainer.appendChild(moonImg);
    splashContainer.appendChild(logoBtn);
    logoBtn.appendChild(logoImg);
    splashContainer.appendChild(text);


    //  set element image sources and ids
    splashContainer.id = 'splash-container';
    horseImg.src = horse;
    horseImg.id = 'horse';
    horseImg.width = 150;
    moonImg.src = moon;
    moonImg.id = 'moon';
    moonImg.width= 300;
    logoBtn.id = 'logo-button'
    logoImg.src = logo;
    logoImg.id = 'logo';
    logoImg.width = 600;
    logoImg.height = 457;
    grassImg.src = grass;
    grassImg.id = 'grass';
    text.textContent = 'Press A to Start';
    text.id = 'start-text';

    //  Event listener to load the main todo page when the logo is clicked
    logoBtn.addEventListener('click', () => {
        document.body.removeChild(splashContainer);
        sidebarLoader();
        todoPageLoader();
    });

}

export function sidebarLoader() {
    //  declare variables
    const sidebar = document.createElement('div');
    const projectTitleDiv = document.createElement('div');
    const projectTitleP = document.createElement('p');
    const projectsContainer = document.createElement('div');
    const btnContainer = document.createElement('div');
    const addProjectBtn = document.createElement('button');
    const removeProjectBtn = document.createElement('button');
    const clearDataBtn = document.createElement('button');
    const clearDataBtnP = document.createElement('p');
    const removeBtnP = document.createElement('p');
    const addBtnP = document.createElement('p');

    sidebar.id = 'sidebar';
    projectTitleDiv.classList.add('list-item', 'project-item', 'header', 'project-header');
    projectTitleDiv.id = 'project-title';
    projectTitleP.textContent = 'Projects';
    projectsContainer.id = 'project-container';
    btnContainer.id = 'project-buttons';
    addProjectBtn.classList.add('list-item', 'project-item');
    addProjectBtn.id = 'add-project';
    addBtnP.classList.add('list-item-text', 'project-item');
    addBtnP.textContent = 'Add Project';
    removeProjectBtn.classList.add('list-item', 'project-item');
    removeProjectBtn.id = 'remove-project';
    removeBtnP.classList.add('list-item-text', 'project-item');
    removeBtnP.textContent = 'Remove Project';
    clearDataBtn.classList.add('list-item', 'project-item');
    clearDataBtn.id = 'clear-data';
    clearDataBtnP.classList.add('list-item-text', 'project-item');
    clearDataBtnP.textContent = 'Clear All Data';

    // append static elements to sidebar
    document.body.appendChild(sidebar);
    sidebar.appendChild(projectTitleDiv);
    projectTitleDiv.appendChild(projectTitleP);
    sidebar.appendChild(projectsContainer);
    sidebar.appendChild(btnContainer);
    btnContainer.appendChild(addProjectBtn);
    addProjectBtn.appendChild(addBtnP);
    btnContainer.appendChild(removeProjectBtn);
    removeProjectBtn.appendChild(removeBtnP);
    btnContainer.appendChild(clearDataBtn);
    clearDataBtn.appendChild(clearDataBtnP);

    // load default project
    if(projects == []){
        projects.createProject('default');
        currentProjectId = 1;
    }
    populateSidebar();

    addProjectBtn.addEventListener('click', ()=> {
        const projCreateDiv = document.createElement('div');
        const projNameLabel = document.createElement('label');
        const projNameField = document.createElement('input');
        const projCreateBtn = document.createElement('button');
        const projCancelBtn = document.createElement('button');

        projCreateDiv.id = 'project-create-div';
        projNameLabel.for = 'project-name';
        projNameLabel.id = 'project-name-label';
        projNameLabel.textContent = 'Name:';
        projNameField.type = 'text';
        projNameField.name = 'project-name';
        projNameField.id = 'project-name';
        projNameField.required = true;
        projCreateBtn.classList.add('project-create-buttons');
        projCreateBtn.id = 'project-create-button';
        projCreateBtn.textContent = 'Create';
        projCancelBtn.classList.add('project-create-buttons');
        projCancelBtn.id = 'project-cancel-button';
        projCancelBtn.textContent = 'Cancel';

        sidebar.appendChild(projCreateDiv);
        projCreateDiv.appendChild(projNameLabel);
        projCreateDiv.appendChild(projNameField);
        projCreateDiv.appendChild(projCreateBtn);
        projCreateDiv.appendChild(projCancelBtn);

        projCreateBtn.addEventListener('click', ()=> {
            let projName = projNameField.value;
            let newProj = project.createProject(projName);
            if(newProj != 'error'){
                addProjectToSidebar(newProj.name, newProj.id);
                projects = project.getAllProjects();
            } else {
                console.log('error name already taken');
            }
            sidebar.removeChild(projCreateDiv);
        });

        projCancelBtn.addEventListener('click', ()=> {
            sidebar.removeChild(projCreateDiv);
        });
    });

    removeProjectBtn.addEventListener('click', ()=> {
        const projRemoveDiv = document.createElement('div');
        const projNameLabel = document.createElement('label');
        const projNameField = document.createElement('input');
        const projRemoveBtn = document.createElement('button');
        const removeCancelBtn = document.createElement('button');

        projRemoveDiv.id = 'project-remove-div';
        projNameLabel.for = 'project-name';
        projNameLabel.id = 'project-name-label';
        projNameLabel.textContent = 'Name:';
        projNameField.type = 'text';
        projNameField.name = 'project-name';
        projNameField.id = 'project-name';
        projNameField.required = true;
        projRemoveBtn.classList.add('project-remove-buttons');
        projRemoveBtn.id = 'project-remove-button';
        projRemoveBtn.textContent = 'Remove';
        removeCancelBtn.classList.add('project-remove-buttons');
        removeCancelBtn.id = 'remove-cancel-button';
        removeCancelBtn.textContent = 'Cancel';

        sidebar.appendChild(projRemoveDiv);
        projRemoveDiv.appendChild(projNameLabel);
        projRemoveDiv.appendChild(projNameField);
        projRemoveDiv.appendChild(projRemoveBtn);
        projRemoveDiv.appendChild(removeCancelBtn);

        projRemoveBtn.addEventListener('click', ()=> {
            let projName = projNameField.value;
            project.removeProject(projName);
            sidebar.removeChild(projRemoveDiv);
            while(projectsContainer.firstChild){
                projectsContainer.removeChild(projectsContainer.lastChild);
            }
            populateSidebar();
        });

        removeCancelBtn.addEventListener('click', ()=> {
            sidebar.removeChild(projCancelDiv);
        });
    });

    clearDataBtn.addEventListener('click', ()=> {
        localStorage.clear();
        console.log('data cleared');
        projects = project.getAllProjects();
        while (projectsContainer.firstChild) {
            projectsContainer.removeChild(projectsContainer.lastChild);
        }
    });

    function addProjectToSidebar(name, id){
        const projBtn = document.createElement('button');
        const projP = document.createElement('p');
        const projId = String(id);
        projBtn.classList.add('list-item', 'project-item', 'project-item-button')
        projP.classList.add('list-item-text', 'project=item');
        projP.textContent = name;
        projBtn.id = projId;

        projectsContainer.appendChild(projBtn);
        projBtn.appendChild(projP);
    }

    function populateSidebar(){
        projects = project.getAllProjects();
        //  this loop will create elements for all projects and append to them to the project container
        for(let project in projects){
            if(projects[project].deleted == false){
                addProjectToSidebar(projects[project].name, projects[project].id);
            }
        }
    }
}

function todoPageLoader(){
    outerContainer.id = 'outer-container';
    document.body.appendChild(outerContainer);
    createTitle();
    createTodoContainer();
}


function createTitle(){
    const pageTitleDiv = document.createElement('div');
    const pageTitleText = document.createElement('h1');
    const heartsContainer = document.createElement('div');
    const heartImg = document.createElement('img');
    const halfHeartImg = document.createElement('img');

    pageTitleDiv.id = 'title';
    pageTitleText.textContent = 'Todoerer'
    heartsContainer.id = 'hearts';
    heartImg.src = heart;
    halfHeartImg.src = halfHeart;
    
    heartImg.width = 25;
    halfHeartImg.width = 25;
    heartImg.height = 25;
    halfHeartImg.height = 25;
    const heartImg2 = heartImg.cloneNode(true);

    outerContainer.appendChild(pageTitleDiv);
    pageTitleDiv.appendChild(pageTitleText);
    pageTitleDiv.appendChild(heartsContainer);
    heartsContainer.appendChild(heartImg);
    heartsContainer.appendChild(heartImg2);
    heartsContainer.appendChild(halfHeartImg);


}

function createTodoContainer(){
    const todoContainer = document.createElement('div');
    const todoHeaderDiv = document.createElement('div');
    const todoHeaderTitleDiv = document.createElement('div');
    const todoHeaderTitleText = document.createElement('h2');
    const todoHeaderProjectDiv = document.createElement('div');
    const todoHeaderProjectText = document.createElement('h2');
    const setDefaultBtn = document.createElement('button');
    const renameProjBtn = document.createElement('button');
    const innerContainer = document.createElement('div');
    const todoItemsContainer = document.createElement('div');
    let projectName = '';
    let projectId = 1;
    let projects = project.getAllProjects();

    todoContainer.id = 'todo-container';
    todoHeaderDiv.id = 'todo-header';
    todoHeaderTitleDiv.classList.add('header-item', 'header');
    todoHeaderTitleText.textContent = 'Project';
    todoHeaderProjectDiv.classList.add('header-item');
    outerContainer.appendChild(todoContainer);
    todoContainer.appendChild(todoHeaderDiv);
    todoHeaderDiv.appendChild(todoHeaderTitleDiv);
    todoHeaderTitleDiv.appendChild(todoHeaderTitleText);
    todoHeaderDiv.appendChild(todoHeaderProjectDiv);
    todoHeaderProjectDiv.appendChild(todoHeaderProjectText);
    todoHeaderProjectDiv.appendChild(setDefaultBtn);
    todoHeaderProjectDiv.appendChild(renameProjBtn);


    //  iterate through projects until you find the default, then load the default project.
    for(let project in projects) {
        if(projects[project].isDefault == true){
            projectId = projects[project].id
        }
    }

    loadProject(projectId);

    function loadProject(projId){
        
    }
}