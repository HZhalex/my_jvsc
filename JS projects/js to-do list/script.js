let tasks = [];
let currentFilter = "all";

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
    let task = tasks.find(t => t.id === id);
    if(task){
        task.completed = !task.completed;
        saveTasks();
        displayTasks();
    }
}
// Object và Array là reference type
function editTask(id){
    let task = tasks.find(t => t.id === id);
    if(task){
        let newText = prompt("Edit task:",task.text);
        if(newText !== null && newText.trim() !== ""){
            task.text = newText.trim();
            saveTasks();
            displayTasks();
        }
    }
}

function removeTask(id) {
    tasks = tasks.filter(t => t.id !== id);
    saveTasks();
    displayTasks();
}

function setFilter(filterType){ 
    currentFilter = filterType;

    document.getElementById("btn-all").classList.remove("active");
    document.getElementById("btn-active").classList.remove("active");
    document.getElementById("btn-done").classList.remove("active");
    document.getElementById("btn-" + filterType).classList.add("active");
}

function sortTasks(){
    tasks.sort((a,b) => a.text.localeCompare(b.text));
    saveTasks();
    displayTasks();
}

function displayTasks() {
    let html = "";
    for (let i = 0; i < tasks.length; i++){
        html += "<li>" + tasks[i] + 
        " <button onclick='removeTask(" + i + ")'>x</button></li>";
    }
    listTask.innerHTML = html;
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