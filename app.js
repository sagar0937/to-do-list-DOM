// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
  // Add task event
  form.addEventListener('submit', addTask);
  //delete task
  taskList.addEventListener('click',delItem);
  //clear task
  clearBtn.addEventListener('click',clearAllItem);

  //filter items search
  filter.addEventListener('keyup',filterData);

  //persist on load LS
  document.addEventListener('DOMContentLoaded',displayItemOnUi)

}

// Add Task
function addTask(e) {
  if(taskInput.value === '') {
    alert('Add a task');
  }
else{
   // Create li element
   const li = document.createElement('li');
   // Add class
   li.className = 'collection-item';
   // Create text node and append to li
   li.appendChild(document.createTextNode(taskInput.value));
   // Create new link element
   const link = document.createElement('a');
   // Add class
   link.className = 'delete-item secondary-content';
   // Add icon html
   link.innerHTML = '<i class="fa fa-remove"></i>';
   // Append the link to li
   li.appendChild(link);
 
   // Append li to ul
   taskList.appendChild(li);

   //adding item to LS
   addItemToLocalStoarage(taskInput.value);

   // Clear input
   taskInput.value = '';
}
 

  e.preventDefault();
}

//LS adding 
function addItemToLocalStoarage(task){
   
  let tasks = addDataLocalStoarage();
  tasks.push(task);
  localStorage.setItem('tasks',JSON.stringify(tasks));
} 

//
function addDataLocalStoarage() {
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  }else{
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  return tasks;
}

//
function displayItemOnUi() {
  let tasks = addDataLocalStoarage();

  tasks.forEach(function(task){
     // Create li element
   const li = document.createElement('li');
   // Add class
   li.className = 'collection-item';
   // Create text node and append to li
   li.appendChild(document.createTextNode(task));
   // Create new link element
   const link = document.createElement('a');
   // Add class
   link.className = 'delete-item secondary-content';
   // Add icon html
   link.innerHTML = '<i class="fa fa-remove"></i>';
   // Append the link to li
   li.appendChild(link);
 
   // Append li to ul
   taskList.appendChild(li);
  })
}

//remove item from list
function delItem(e) {
  if(e.target.parentElement.classList.contains('delete-item')){
      e.target.parentElement.parentElement.remove();
      //remov from ls
      removeFromLocalStoarage(e.target.parentElement.parentElement);
  }
}
//ls remove
function removeFromLocalStoarage(data){
  debugger;
  console.log(data)

  let tasks = addDataLocalStoarage();
  tasks.forEach(function(item,index){
    if(data.textContent === item){
      tasks.splice(index,1)
    } 
   
  });
  localStorage.setItem('tasks',JSON.stringify(tasks))
}

//clearAllItem
function clearAllItem(){
  //taskList.innerHTML = '';

  //remove all elements
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
   
}
}
//filter daata from the lis
function filterData(e) {
  let inputValue = e.target.value.toLowerCase();
  document.querySelectorAll('.collection-item').forEach(function(item,index){
    if(item.textContent.indexOf(inputValue) !== -1){
      item.style.display ='block';
    }else{
      item.style.display ='none';
    }

  })

}
