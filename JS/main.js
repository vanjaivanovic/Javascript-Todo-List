var list = document.getElementById("todoList");
var completed = document.getElementById("completed");

function addTask() {
  var task = document.getElementById("todoInput").value;
  var text = document.createTextNode(task);
  var newTask = document.createElement("li");

  newTask.appendChild(text);
  list.appendChild(newTask);
}