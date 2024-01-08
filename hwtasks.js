
const taskForm = document.querySelector('#taskForm');
const task = document.querySelector('#task');
const taskDate = document.querySelector('#taskDate');
const taskPriority = document.querySelector('#taskPriority');
const taskList = document.querySelector('.collection');
const TASKS_KEY = 'tasks'
const sortbtn = document.querySelector('#sortBtn');
var storedItems = localStorage.getItem('tasks'); 
const filterTasks = document.querySelector('#filterTasks');
const clearAllBtn = document.querySelector('#clearAllTasks');
clearAllBtn.addEventListener('click', clearAll);

function clearAll(e){
    e.preventDefault();
    while(taskList.firstChild){
        taskList.firstChild.remove();
    }
    localStorage.setItem(TASKS_KEY, JSON.stringify([]));
}
filterTasks.addEventListener('change',function(){
    const selectedFilter = filterTasks.value;
    if(selectedFilter == 3)
    {
        handleSortlth();
    }
    if(selectedFilter == 4)
    {
        handleSorthtl();
    }
    if(selectedFilter == 1)
    {
        handleSortDate();
    }
});
document.addEventListener('DOMContentLoaded',loadTasks);


function handleSortlth(){
    var arr = getStoredItems();
    console.log(arr);
    sortByPriority(arr);
    while(taskList.firstChild){
        taskList.firstChild.remove();
    }
    arr.forEach(function(a){
        attachElement(a.task,a.tdate,a.tprio);
    }); 
}
function sortByPriority(arr) {
    arr.sort(function(a, b) {
        return a.tprio - b.tprio;
    });
    return arr;
}

function handleSortDate(){
    var arr = getStoredItems();
    sortByDate(arr);
    while(taskList.firstChild){
        taskList.firstChild.remove();
    }
    arr.forEach(function(a){
        attachElement(a.task,a.tdate,a.tprio);
    }); 
}
function sortByDate(arr){
    arr.sort(function(a,b){
        var dateA = new Date(a.tdate);
        var dateB = new Date(b.tdate);

        return dateA - dateB
    })
}
function handleSorthtl(){
    var arr = getStoredItems();
    console.log(arr);
    sortByPriorityhtl(arr);
    while(taskList.firstChild){
        taskList.firstChild.remove();
    }
    arr.forEach(function(a){
        attachElement(a.task,a.tdate,a.tprio);
    }); 
}
function sortByPriorityhtl(arr) {
    arr.sort(function(a, b) {
        return b.tprio - a.tprio;
    });
    return arr;
}

function loadTasks(){
    let tasks = getStoredItems();
    console.log(tasks);
    tasks.forEach(function(a){
        attachElement(a.task,a.tdate,a.tprio)
    });
    // tasks.forEach(function(taskObj){
    //    
    // });
}


document.addEventListener('DOMContentLoaded',getStoredItems);

taskForm.addEventListener('submit',handleSubmit);
function handleSubmit(e){
    e.preventDefault();
    let text = task.value;
    let tdate = taskDate.value;
    let tprio = taskPriority.value
    addToLocalStorage(text,tdate,tprio);
    attachElement(text,tdate,tprio);
}

function addToLocalStorage(task,tdate,tprio){
   
    let taskObj = {task,tdate,tprio};
    let taskArray = getStoredItems();
    taskArray.push(taskObj);
    localStorage.setItem(TASKS_KEY,JSON.stringify(taskArray));
  
    
}

function getStoredItems(){

    let storedTasks = localStorage.getItem(TASKS_KEY);
    if(!storedTasks){
        return [];
    }
    return JSON.parse(storedTasks);
   
    // storedItems = JSON.parse(storedItems);
    // // console.log(storedItems);
    // //console.log(typeof(storedItems));
    // for(let key in storedItems){
        
    //     // console.log(storedItems[key]);
    //     // attachElement(storedItems[key].task,storedItems[key].tdate,storedItems[key].tprio);
    
    
    // }

}

function attachElement(text,tdate,tprio){
   
    const list = document.createElement('li');
    list.classList.add('collection-item');
    list.classList.add('task-item');
    list.appendChild(document.createTextNode(text));
    taskList.appendChild(list);

    const tadate = document.createTextNode(tdate);
    list.appendChild(tadate);

    const link = document.createElement('A');
    link.classList.add('delete-item');
    link.classList.add('secondary-content');
    link.setAttribute('href','#');
    link.setAttribute('title', 'Remove Task');

    const icon = document.createElement('I');
    icon.classList.add('fa');
    icon.classList.add('fa-trash');
    icon.classList.add('btn');
    icon.classList.add('black');

    if(tprio==1){
        const taprio = document.createTextNode('LOW');
       
        list.appendChild(taprio);
        list.style.backgroundColor = '#FFFFE0';
    }
    if(tprio==2){
        const taprio = document.createTextNode('MID');
        list.appendChild(taprio);
        list.style.backgroundColor = '#FDA172'
        
    }
    if(tprio==3){
        const taprio = document.createTextNode('HIGH');
        list.appendChild(taprio);
        list.style.backgroundColor = 'red';
    }

    link.appendChild(icon);
    list.appendChild(link);

  
}



