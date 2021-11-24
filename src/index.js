import {listItem} from './manageToDoItems.js';
import {displayListItem} from './DOM.js';

const addButton = document.getElementById("addButton");
const nameField = document.getElementById("nameField");
const descripField = document.getElementById("descripField");
const dueField = document.getElementById("dueField");
const priorityField = document.getElementById("priorityField");

addButton.onclick = () => {
	let item = listItem(nameField.value, descripField.value, dueField.value, priorityField.value);
	displayListItem(item);
}