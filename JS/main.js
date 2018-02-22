// Här hämtas todoList och completed listan. 
var list = document.getElementById("todoList");
var completed = document.getElementById("completed");


// Här skapas listan med värdet som skrivs i input fältet. 
 function addTask() {
  var task = document.getElementById("todoInput").value;
  var text = document.createTextNode(task);
  var newTask = document.createElement("li");


// Här skapas knapparna för att radera och bocka av. 
  var span = document.createElement("span");
  var remove = document.createTextNode("\u00D7");
  var buttonDone = document.createElement("button");
  var buttontxt = document.createTextNode("\u2713");

  span.className = "delete";
  buttonDone.className = "buttonDone";


// Radera funktion 
  span.onclick = function() {
    const div = this.parentElement;
    list.removeChild(div);
  }


// Bocka av, flytta och bocka av knappen försvinner. 
  buttonDone.onclick = function() {
    const listItem = this.parentElement;
    completed.appendChild(listItem);
    listItem.removeChild(buttonDone);

    span.onclick = function() {
      var div = this.parentElement;
      completed.removeChild(div);
    }
  }

  // Meddelande visas att input fältet måste fyllas i.
  if (task === '') {
    alert("Add new task!");
  } else {

// Här läggs radera och bocka av knappen till varje ny uppgift och varje ny uppgift läggs till ul lista. 
  newTask.appendChild(span);
  span.appendChild(remove);
  newTask.appendChild(buttonDone);
  buttonDone.appendChild(buttontxt);
  newTask.appendChild(text);
  list.appendChild(newTask);
 }
} // Stänger addTask


// Rensar hela listan på Todos och Finitos. 
function reset () {
  list.innerHTML = " ";
}

function resetCompleted() {
  completed.innerHTML = " ";
}

 document.getElementById("todoList").onkeypress = function(event){
                if (event.keyCode == '13' || event.which == '13'){
                    addTask();
                }
            };
