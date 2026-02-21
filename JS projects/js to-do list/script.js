let tasks = ["hung", "hieu", "huy"];
let curentFilter = "all";

const listTask = document.getElementById("list");
const taskInput = document.getElementById("task");
const saveMsg = document.getElementById("saveMsg");

taskInput.addEventListener("keydown", function(event) {
    if(event.key === "Enter") addTask();
});

function loadTasks() {
    let data = localStorage.getItem("taskPro");
    if (data !== null) {
        tasks = JSON.parse(data);
    }
}

function saveTasks() {
    localStorage.setItem("task", JSON.stringify(tasks));
    saveMsg.style.display = "block";
    setTimeout(() => saveMsg.style.display = "none", 1500);
}

function addTask() {
    let text = taskInput.value.trim();
    if (text === "") {
        alert("Please enter a task");
        return;
    }
    let newTask = {
        id: Date.now(),
        text: text,
        completed: false
    };
    tasks.push(newTask);
    taskInput.value = "";
    saveTasks();
    displayTasks();
}

function toggleTask(id){
    let task = task.find(t => t.id === id);
    if(task){
        task.completed = !task.complete;
        saveTasks();
        displayTasks();
    }
}


function displayTasks() {
    let html = "";
    for (let i = 0; i < tasks.length; i++){
        html += "<li>" + tasks[i] + 
        " <button onclick='removeTask(" + i + ")'>x</button></li>";
    }
    listTask.innerHTML = html;
}

function removeTask(i) {
    tasks.splice(i, 1);
    saveTasks();
    displayTasks();
}


function clearAll(){
    if (confirm("Are you sure you want to clear all tasks?")) {
        tasks = [];
        saveTasks();
        displayTasks();
    }
}





loadTasks();
displayTasks();