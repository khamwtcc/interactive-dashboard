let myTasks = [];

function weeklyGoal(userName, dailyGoal, bonusTasks) {
    // Calculate weekly goal based on number of workdays (5) per week
    let weeklyGoal = dailyGoal * 5;
    // Add bonusTasks to weeklyGoal.
    let totalGoal = weeklyGoal + bonusTasks;
    
    // Output results to web page
    let output = "User: " + userName + "<br>" + "Total Weekly Goal: " + totalGoal;

    document.getElementById("goal-message").innerHTML = output;
}

document.getElementById("goal-btn").addEventListener("click", function(event) {
    event.preventDefault();

    let userName = document.getElementById("name").value;
    let dailyGoal = Number(document.getElementById("daily-goal").value);
    let bonusTasks = Number(document.getElementById("bonus-tasks").value);

    weeklyGoal(userName, dailyGoal, bonusTasks);
});

// Task List Logic

let nextTaskId = 1;

const taskListDiv = document.getElementById("task-list");
const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-name");
const taskPriority = document.getElementById("task-priority");
const taskImportant = document.getElementById("task-important");

const userTasks = document.createElement("ul");
userTasks.id = "user-tasks";
taskListDiv.appendChild(userTasks);

function displayTasks() {
    userTasks.innerHTML = "";

    myTasks.forEach(function(task) {
        const listItem = document.createElement("li");

        const taskName = document.createElement("span");
        taskName.textContent = task.name;
        listItem.appendChild(taskName);

        const completeCheckbox = document.createElement("input");
        completeCheckbox.type = "checkbox";
        completeCheckbox.checked = task.isCompleted;

        completeCheckbox.addEventListener("change", function() {
            task.isCompleted = completeCheckbox.checked;

            if (task.isCompleted) {
                taskName.style.textDecoration = "line-through";
            } else {
                taskName.style.textDecoration = "none";
            }

            console.log(JSON.stringify(myTasks));
        });

        listItem.appendChild(completeCheckbox);

        if (task.priority === "High") {
            listItem.style.fontWeight = "bold";
        } else if (task.priority === "Low") {
            listItem.style.fontStyle = "italic";
        }

        if (task.isImportant) {
            listItem.style.color = "red";
        }

        if (task.isCompleted) {
            listItem.style.textDecoration = "line-through";
        }

        userTasks.appendChild(listItem);
    });
}

document.getElementById("delete-task-list").addEventListener("click", function() {
    myTasks = [];
    nextTaskId = 1;
    displayTasks();
    console.log(JSON.stringify(myTasks));
});

function addTask(taskName, priority, isImportant) {
    const newTask = {
        id: nextTaskId,
        name: taskName,
        priority: priority,
        isImportant: isImportant,
        isCompleted: false
    };

    nextTaskId++;
    myTasks.push(newTask);

    displayTasks();

    console.log(JSON.stringify(myTasks));
}

taskForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    addTask(
        taskText,
        taskPriority.value,
        taskImportant.checked
    );

    taskInput.value = "";
    taskPriority.value = "Medium";
    taskImportant.checked = false;
});