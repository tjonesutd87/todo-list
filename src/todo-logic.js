//  create todo item class which we will use to standardize the construction of all todo items
class TodoItem {
    constructor(name, description, notes, dueDate, projectId) {
        this.id = setId();
        this.name = name;
        this.description = description;
        this.notes = notes,
        this.dueDate = dueDate;
        this.projectId = projectId;
        this.completed = false;
        this.deleted = false;
    }

    // this function will set id to 1 if there are no todo items, otherwise it will set it to the next id
    setId(){ return localStorage.getItems('currentTodoId') ? (Number(localStorage.getItems('currentTodoId')) + 1) : 1;}

}

//  this function retrieves every todo item
export function getAllTodoItems(){
    let todoItems = JSON.parse(localStorage.getItem('todoItems'));
    return todoItems;
}

//  this function retrieves a single todo item by the item id
export function getTodoItem(id){
    let todoItems = JSON.parse(localStorage.getItem('todoItems'));

    for(let todo in todoItems){
        if(todoItems[todo].id = id){
            return todoItems[todo];
        }
    }
}

//  this function creates a single todo item with the parameters passed.
export function createTodoItem(name, description, notes, dueDate, projectId){
    
    //  create a new array with a list of all todo items
    let todoItems = JSON.parse(localStorage.getItem('todoItems'));
    
    //  create a new todo item from the todo item class with the given parameters
    const todoItem = new TodoItem(name, description, notes, dueDate, projectId);

    //  search the todo items to see if the project this item was assigned to already has a todo item with the same name
    //  if so, return an error and break out of the function.
    for(let todo in todoItems){
        if(todoItems[todo].name == todoItem.name && todoItems[todo].projectId == todoItem.projectId){
            return 'error';
        }
    }

    //  If no error is returned, the function continues, it then adds the item to the todo item array,
    //  then saves the array to local storage and finally updates the current todo id variable
    todoItems = JSON.stringify(todoItems.push(todoItem));
    localStorage.setItem('todoItems', todoItems);
    localStorage.setItem('currentTodoId', todoItem.id);
    return todoItem;
}

export function updateTodoItem(id, name, description, notes, dueDate, projectId, completed) {
    //  initialize a variable to hold the entire array of all todo items
    const todoItems = JSON.parse(localStorage.getItems('todoItems'));

    //  search the todo items array for the id of the todo items we want to update
    for(let todo in todoItems){
        if(todoItems[todo].id = id){
            //  update the given item with the new information
            todoItems[todo].name = name;
            todoItems[todo].description = description;
            todoItems[todo].notes = notes;
            todoItems[todo].dueDate = dueDate;
            todoItems[todo].projectId = projectId;
            todoItems[todo].completed = completed;
        }
    }
    
    // save the todo items array to local storage
    localStorage.setItems('todoItems', JSON.stringify(todoItems));
}

export function removeTodoItem(id){
    //  initialize a variable to hold the entire array of all todo items
    const todoItems = JSON.parse(localStorage.getItems('todoItems'));

    //  search the todo items array for the id of the todo items we want to update
    for(let todo in todoItems){
        if(todoItems[todo].id = id){
            //  update the given item to set deleted to true
            todoItems[todo].deleted = true;
        }
    }
    
    // save the todo items array to local storage
    localStorage.setItems('todoItems', JSON.stringify(todoItems));
}