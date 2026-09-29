// Put your JavaScript code in this file
let answers = [
  "Yes, definitely!",
  "It is certain.",
  "Without a doubt.",
  "Ask again later.",
  "Cannot predict now.",
  "Don't count on it.",
  "My sources say no.",
  "Outlook not so good."
];

function displayAnswer() {
    let index = Math.floor(Math.random() * answers.length);
    let circle = document.getElementById("circle");
    circle.style.display = "flex";
    circle.innerHTML = answers[index];
}

document.getElementById("ball").addEventListener("mousedown", function() {
    let question = document.getElementById("question").value;
    if (question === "") {
        alert("Please enter a question.");
    } else {
        displayAnswer();
    }
});

document.getElementById("reset").addEventListener("click", function() {
    document.getElementById("circle").style.display = "none";
});