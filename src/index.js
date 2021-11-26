import {listItem} from './manageToDoItems.js';
import {displayListItem} from './DOM.js';
import './toDo.css';

const addButton = document.getElementById("addButton");
const nameField = document.getElementById("nameField");
const descripField = document.getElementById("descripField");
const dueField = document.getElementById("dueField");
const priorityButtons = Array.from(document.getElementsByClassName("priority"));
//console.log({addButton});
//console.log({nameField});
//console.log({descripField});
//console.log({dueField});
//console.log({priorityButtons});

let priority;

priorityButtons.forEach(button => {
	button.onfocus = () => {
		priority = button.value;
	};
});	

addButton.onclick = () => {
	let item = new listItem(nameField.value, descripField.value, dueField.value, priority);
  	displayListItem(item);
}