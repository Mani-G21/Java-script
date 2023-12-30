const taskElement   =  document.querySelector('#task');
const taskForm = document.querySelector('#taskForm');
const taskList = document.querySelector('#taskList');
const clearAllTasksBtn = document.querySelector('#clearAllTasks');
const errorModal = document.querySelector('#emptyModal');
const removeModal = document.querySelector('#removeModal');
const taskSearchElement = document.querySelector('#taskSearch');
const TASKS_KEY = 'tasks';
let errorModalObj, removeModalObj;

//Entry point
initialize();
function initialize()
{
    taskForm.addEventListener('submit', handleSubmit);
    taskList.addEventListener('click', handleRemove);
    clearAllTasksBtn.addEventListener('click', handleClearAll);
    document.addEventListener('DOMContentLoaded', initializeModals);
    document.addEventListener('DOMContentLoaded', loadTasks);
    taskSearchElement.addEventListener('keyup', handleSearch);

}


//HELPER FUNCTIONS
function getTasksFromLocalStorage(){
    let tasks = localStorage.getItem(TASKS_KEY);
    if(!tasks){
        return [];
    }
    return JSON.parse(tasks);
}

function isDeleteElement(e){
    return e.target.classList.contains('delete-item')  ||  e.target.parentElement.classList.contains('delete-item');
}


function addTaskElement(taskObj){
    const list = document.createElement('LI');
    list.classList.add('collection-item');
    list.classList.add('task-item');
    list.setAttribute('data-id', taskObj.id);
    list.appendChild(document.createTextNode(taskObj.task));

    const link = document.createElement('A');
    link.classList.add('delete-item');
    link.classList.add('secondary-content');
    link.setAttribute('href','#');
    link.setAttribute('title', 'Remove Task');

    const icon = document.createElement('I');
    icon.classList.add('fa');
    icon.classList.add('fa-trash');

    link.appendChild(icon);
    list.appendChild(link);

    taskList.appendChild(list);
}

function addToLocalStorage(taskObj)
{
    let tasks = getTasksFromLocalStorage();
    tasks.push(taskObj);
    localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));

}


//EVENT HANDLERS

function handleClearAll(e){
    e.preventDefault();
    taskList.innerHTML = '';  //this is slower method

    //the below one is the faster method

    while(taskList.firstChild){
        taskList.firstChild.remove();
    }
    localStorage.setItem(TASKS_KEY, JSON.stringify([]));
}

function handleRemove(e){
    e.preventDefault();
    if(isDeleteElement(e)){
        // removeModalObj.open();
        let taskListItem  = e.target.parentElement;
        while(!(taskListItem.classList.contains('task-item'))){
            taskListItem = taskListItem.parentElement;
        }

        const taskIdToBeDeleted = parseInt(taskListItem.dataset.id);
        taskListItem.remove();

        tasks = getTasksFromLocalStorage();
        const updatedTasks = tasks.filter(function(task){
            return task.id !== taskIdToBeDeleted;
        });

        localStorage.setItem(TASKS_KEY, JSON.stringify(updatedTasks));
    }
}

function handleSubmit(e){
    e.preventDefault();
    if(task === ''){
        errorModalObj.open();
        return;
    }

    const taskObj = {id: new Date().getTime(), task:task};
    addTaskElement(taskObj);
    addToLocalStorage(taskObj);
    taskElement.value = '';
}

function initializeModals(){
    errorModalObj = M.Modal.init(errorModal);
    removeModalObj = M.Modal.init(removeModal);
}

function loadTasks(){
     let tasks = getTasksFromLocalStorage();
     tasks.forEach(function(taskObj){
        addTaskElement(taskObj);
     });
}


function handleSearch(e)
{
    const tasks = getTasksFromLocalStorage();
    const filteredTasks = tasks.filter(function(taskObj){
        return taskObj.task.indexOf(e.target.value) !== -1;
    });

    // clear all
    while(taskList.firstChild){
        taskList.firstChild.remove();
    }

   while(taskList.firstChild){
    taskList.firstChild.remove();
   }

   //show filtered tasks
   filteredTasks.forEach(function(task){
    addTaskElement(task);

   });
}
