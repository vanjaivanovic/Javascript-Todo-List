//    Global Variables
var list = document.getElementById("todoList");
var completeList = document.getElementById("completed");

function todoList() {    //todoList funktionen blir kallad på index.html innuti knappen med onclick eventet.
   //    Create List + List Item
   var item = document.getElementById("todoInput").value;
   var text = document.createTextNode(item);   /* creatextNode innebär att skapa en paragraf. I denna paragraf kallas 'item'
                                                 som är variabeln med ett värde lagrad: som är värdet av todo inputen -> 'todoInput'.value
                                                 */
   var newItem = document.createElement("li");  // här skapas en varibel som skapar elementet som ska printa ut en lista. 'li'
   var span = document.createElement("SPAN");
   var txt = document.createTextNode("\u00D7");
   var button = document.createElement("button");
   var text2 = document.createTextNode("done");

 span.className = "close";
   
 span.onclick = function() {
   var div = this.parentElement;
   list.removeChild(div);
 }

 button.onclick = function(){
   const listItem = this.parentElement;
   completeList.appendChild(listItem);
   listItem.removeChild(button);

        span.onclick = function() {
   var div = this.parentElement;
   completeList.removeChild(div);
 }

 }

 newItem.appendChild(span);
 span.appendChild(txt);

 newItem.appendChild(button);
 button.appendChild(text2);


   newItem.appendChild(text);   //newItem variabeln kallas med hjälp av appendChild med variabeln 'text' som är det som skrivs i inputen.
   list.appendChild(newItem); //här läggs variabeln 'list' in, som är i det här fallet ol id och innuti den sker all det förgående.
}




//    Reset List
function resetList() {        /*resetList funktionen blir kallad på index.html innuti knappen reset med onclik eventet.
                              innuti funktionen ersätts list.innerHTML med tom sträng, för att kunna ta bort getElementByID(todoList)
                              Detta är möjlig eftersom variabeln list är global och därmed kan bli nådd från vart som helst. */
   list.innerHTML = "";  

}

function resetCompleteList() {        /*resetList funktionen blir kallad på index.html innuti knappen reset med onclik eventet.
                              innuti funktionen ersätts list.innerHTML med tom sträng, för att kunna ta bort getElementByID(todoList)
                              Detta är möjlig eftersom variabeln list är global och därmed kan bli nådd från vart som helst. */

   completeList.innerHTML = "";

}