class Project {
    constructor(name) {
        this.name = name;
        this.id = 0;
        this.isDefault = false;
        this.deleted = false;
    } 

    /**
     * @param {string | number} projId
     */
    set id(projId) {this._id = projId;}
    /**
     * @param {any} projDefault
     */
    set Default(projDefault) {this._isDefault = projDefault;}
}



export function getAllProjects() {
    let projects = JSON.parse(localStorage.getItem('projects') || '[]');
    return projects;
}

export function createProject(name) {
    let projects = getAllProjects();
    const projectObj = new Project(name);
    let id;
    let isDefault;

    id = localStorage.getItem('currentProjId') ? (Number(localStorage.getItem('currentProjId')) + 1) : 1;
    isDefault = localStorage.getItem('projects') ? false : true;
    projectObj.id = id;
    projectObj.isDefault = isDefault;

    console.log(projects);

    for (let project in projects) {
        if (projects[project].name == projectObj.name && projects[project].deleted == false) {
            return 'error';
        }
    }

    projects.push(projectObj);
    localStorage.setItem('projects', JSON.stringify(projects));
    localStorage.setItem('currentProjId', projectObj.id);

    return projectObj;
}

export function getProject(id){
    let projects = getAllProjects();

    for(let project in projects) {
        if(projects[project].id == id){
            return projects[project];
        }
    }
}

export function updateProject(id, name, isDefault) {
    let projects = getAllProjects();

    for (let project in projects) {
        if (projects[project].id == id) {
            projects[project].name = name;
            projects[project].isDefault = isDefault;
            localStorage.setItem('projects', JSON.stringify(projects));
        }
    }
}

export function removeProject(name){
    let projects = getAllProjects();

    for(let project in projects) {
        if(projects[project].name == name && projects[project].deleted == false){
            projects[project].deleted = true;
            localStorage.setItem('projects', JSON.stringify(projects));
        }
    }

}

function loadDefaultProject(){
    let projects = getAllProjects();

    for(let project in projects){
        if(projects[project.isDefault == true]){
            return projects[project].id;
        }
    }
}
