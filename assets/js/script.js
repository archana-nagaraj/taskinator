
var formEl = document.querySelector("#task-form"); 
var tasksToDoEl = document.querySelector("#tasks-to-do"); 

var createTaskHandler = function(event) { 
    event.preventDefault(); 
    //read the Task name
    var taskNameInput = document.querySelector("input[name='task-name']");
    console.log(taskNameInput.value);
    //read the Task type
    var taskTypeInput = document.querySelector("select[name='task-type']");
    console.log(taskTypeInput.value);
    //create list item
    var listItemEl = document.createElement("li"); 
    listItemEl.className = "task-item"; 

    //create div to hold the task info and add to the created list item
    var taskInfoEl = document.createElement("div");
    //give it a class name
    taskInfoEl.className = "task-info";
    // add HTML content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput.value + "</h3><span class='task-type'>" + taskTypeInput.value + "</span>";
    //append taskinfo to list item
    listItemEl.appendChild(taskInfoEl);
    //add entire list item to ul list in html
    tasksToDoEl.appendChild(listItemEl); 
    console.dir(listItemEl); 
}; 

  formEl.addEventListener("submit", createTaskHandler);


