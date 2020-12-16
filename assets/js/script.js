
var formEl = document.querySelector("#task-form"); 
var tasksToDoEl = document.querySelector("#tasks-to-do"); 

var taskFormHandler = function(event) { 
    event.preventDefault(); 
    //read the Task name
    var taskNameInput = document.querySelector("input[name='task-name']");
    //read the Task type
    var taskTypeInput = document.querySelector("select[name='task-type']");
    //package up data as an object
    var taskDataObj= {
        name: taskNameInput,
        type: taskTypeInput
    };
    // send it as an argument to createTaskEl
    createTaskEl(taskDataObj);    
}; 

//function to hold the new task created
var createTaskEl = function(taskDataObj) {
     //create list item
     var listItemEl = document.createElement("li"); 
     listItemEl.className = "task-item"; 
 
     //create div to hold the task info and add to the created list item
     var taskInfoEl = document.createElement("div");
     //give it a class name
     taskInfoEl.className = "task-info";
     // add HTML content to div
     taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name.value+ "</h3><span class='task-type'>" + taskDataObj.type.value + "</span>";
     //append taskinfo to list item
     listItemEl.appendChild(taskInfoEl);
     //add entire list item to ul list in html
     tasksToDoEl.appendChild(listItemEl); 
}

  formEl.addEventListener("submit", taskFormHandler);


