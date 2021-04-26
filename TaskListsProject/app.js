//First we should define our Vars:

const form =document.querySelector('#task-form');
const taskInput=document.querySelector('#task');
const clearBtn=document.querySelector('.clear-tasks');
const filter=document.querySelector('#filter');
const taskList=document.querySelector('.collection');

// you should load all your EventsListeners:

loadEventListeners();

function loadEventListeners(){
  
    //add eventListener to task:
    
    // in this one we want to get tasks from LS
    document.addEventListener('DOMContentLoaded' , getTasks);
    form.addEventListener('submit' , addTask);
    taskList.addEventListener('click', removeTask);
    clearBtn.addEventListener('click' , clearTasks);
    filter.addEventListener('keyup' , filterTasks);

}
// define the getTaks you mentioned above:

function getTasks() {
let tasks;
if(localStorage.getItem('tasks') === null){
    tasks = [];
}
    else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task){
// here we do all the things we did in the add task part:

        const li=document.createElement('li');
        li.className= 'collection-item';
        li.appendChild(document.createTextNode(task));
        const link=document.createElement('a');
        link.className= 'delete-item secondary-content';
        link.innerHTML = ' <i class="fa fa-remove"> </i>';
        li.appendChild(link);
        taskList.appendChild(li);
    });
}


// now you should define the addTask you mentioned:

function addTask(e){

    if(taskInput.value === ""){
        alert('type your task plz');
    }
// now you should create an element and put a className for it:
    const li=document.createElement('li');
    li.className='collection-item';
    li.appendChild(document.createTextNode(taskInput.value));
    
//create new link element:

    const link=document.createElement('a');
    link.className='delete-item secondary-content';
// add icon HTML to that:

    link.innerHTML='<i class="fa fa-remove"></i>';
// now append this child to list:
    li.appendChild(link);
    taskList.appendChild(li);
//store in local storage:
    storeTaskInLocalStorage(taskInput.value);

    // after that your input should be clear:

    taskInput.value='';

    e.preventDefault();
}
//define storeTaskInLocalStorage:

function storeTaskInLocalStorage(task){
let tasks;
if(localStorage.getItem('tasks') === null){
    tasks=[];
} else{
          tasks=JSON.parse(localStorage.getItem('tasks'));
      }
      tasks.push(task);
      localStorage.setItem('tasks' , JSON.stringify(tasks));
}



//removeTask: 
function removeTask(e){
   if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are you sure???')) {
    
        e.target.parentElement.parentElement.remove();
// remove from ls:
            removeTaskFromLocalStorage(e.target.parentElement.parentElement);
        }
    }
}
//Define the removeTaskFromLocalStorage you mentioned:
    function removeTaskFromLocalStorage(taskItem){
        let tasks;
        if(localStorage.getItem('tasks') === null){
            tasks=[];
        } else {
            tasks = JSON.parse(localStorage.getItem('tasks'));
        }
         tasks.forEach(function(task, index){
            if(taskItem.textContent === task){
                tasks.splice(index, 1);
            }


                 });
                 localStorage.setItem('tasks', JSON.stringify(tasks));
        }

//clearTasks
    function clearTasks(){

/*there are two ways and the first one is simple but its slow so I commented that:*/
//taskList.innerHTML='';
    while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild);
// it means untill there is a child delete the first one!!
}
// also delete task from LS:
    clearTasksFromLocalStorage();
}

//define function clearTaskFromLocalStorage:
    function clearTasksFromLocalStorage(){
        localStorage.clear();
    }
    function filterTasks(e) {
    const text=e.target.value.toLowerCase();

/*here you can use getelementbyclass but first u have to convert that to arrayList for using for each:*/

    document.querySelectorAll('.collection-item').forEach(function(task){
    const item=task.firstChild.textContent;
    /*  whene indextOf something is -1 it means those two words have similar letters:*/
    if(item.toLowerCase().indexOf(text) != -1){
        task.style.display= 'block';
        //block here means show
    } else{
                task.style.display = 'none';
            }


});
}
