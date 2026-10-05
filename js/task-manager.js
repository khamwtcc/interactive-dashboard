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
const taskListDiv = document.getElementById("task-list");
const userTasks = document.createElement("ul");
userTasks.id = "user-tasks";
taskListDiv.appendChild(userTasks);

document.getElementById("add-task").addEventListener("click", function() {
    const taskInput = document.getElementById("task-name");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    myTasks.push(taskText);

    const listItem = document.createElement("li");
    listItem.appendChild(document.createTextNode(taskText));
    userTasks.appendChild(listItem);

    taskInput.value = "";
});