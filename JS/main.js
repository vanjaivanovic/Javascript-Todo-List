var list = document.getElementById("todoList");
var completed = document.getElementById("completed");

function addTask() {
  var task = document.getElementById("todoInput").value;
  var text = document.createTextNode(task);
  var newTask = document.createElement("li");
  var span = document.createElement("span");
  var remove = document.createTextNode("\u00D7");
  var buttonDone = document.createElement("button");
  var buttontxt = document.createTextNode("done");

  span.className = "delete";

  newTask.appendChild(span);
  span.appendChild(remove);
  newTask.appendChild(buttonDone);
  buttonDone.appendChild(buttontxt);
  newTask.appendChild(text);
  list.appendChild(newTask);
}
