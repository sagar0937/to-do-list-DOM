// Define UI Vars
var uiController = (function () {
  var domSelector = {
    form: '#task-form',
    taskList: '.collection',
    clearBtn: '.clear-tasks',
    filter: '#filter',
    taskInput: '#task'
  }

  return {
    getInput: function () {
      return {
        form: document.querySelector(domSelector.form),
        taskList: document.querySelector(domSelector.taskList),
        clearBtn: document.querySelector(domSelector.clearBtn),
        filter: document.querySelector(domSelector.filter),
        taskInput: document.querySelector(domSelector.taskInput).value,
      }

    },

    domElements: function () {
      return domSelector;
    }
  }

})();


// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
  //console.log("uiController",uiController)
  // Add task event
  uiController.getInput().form.addEventListener('submit', addTask);
  // Remove task event
  uiController.getInput().taskList.addEventListener('click', removeTask);
  // Clear task event
  uiController.getInput().clearBtn.addEventListener('click', clearTasks);
  // Filter tasks event
  uiController.getInput().filter.addEventListener('keyup', filterTasks);
}

// Add Task
function addTask(e) {
  if (uiController.getInput().taskInput === '') {
    alert('Add a task');
  } else {
    // Create li element
    const li = document.createElement('li');
    // Add class
    li.className = 'collection-item';
    // Create text node and append to li
    debugger;
    li.appendChild(document.createTextNode(uiController.getInput().taskInput));
    // Create new link element
    const link = document.createElement('a');
    // Add class
    link.className = 'delete-item secondary-content';
    // Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append the link to li
    li.appendChild(link);

    // Append li to ul
    uiController.getInput().taskList.appendChild(li);

    //localstorage to add
    localStorageToStoreItem(uiController.getInput().taskInput);

    // Clear input
    uiController.getInput().taskInput = '';
  }

  e.preventDefault();
}
//function LS
function localStorageToStoreItem(item) {
  let items = [];
  if (localStorage.getItem('items') == null) {
   
  } else {
   items = JSON.parse(localStorage.getItem('items')); 
  }
  items.push(item);
  localStorage.setItem('items',JSON.stringify(items));
}

// Remove Task
function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are You Sure?')) {
      e.target.parentElement.parentElement.remove();
    }
  }
}

// Clear Tasks
function clearTasks() {
  // taskList.innerHTML = '';

  // Faster
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }

  // https://jsperf.com/innerhtml-vs-removechild
}

// Filter Tasks
function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach(function (task) {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';

    }
  });
}