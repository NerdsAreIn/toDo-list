import {listItem} from './manageToDoItems.js';
import {list} from './manageLists.js';

const addItemButton = document.getElementById("addButton");
const nameField = document.getElementById("nameField");
const descripField = document.getElementById("descripField");
const dueField = document.getElementById("dueField");
const priorityButtons = Array.from(document.getElementsByClassName("priority"));
const mainList = document.querySelector(".active");
const addListButton = document.getElementById("addListButton");
const nameInput = document.getElementById("listName");
const listOfLists = document.getElementById("mylists");

let priority = "medium";

addItemButton.onclick = () => {
	let item = new listItem(nameField.value, descripField.value, dueField.value, priority);
  	displayListItem(item);
}

addListButton.onclick = () => {
    let newList = new list(nameInput.value);
  	displayList(newList);
}

priorityButtons.forEach(button => {
	button.onfocus = () => {
		priority = button.value;
	};
});	

function displayList(list) {
	const newList = document.createElement("li");
    newList.classList.add("list");
    newList.textContent = list.name;
    listOfLists.appendChild(newList);
}

function displayListItem(item) {
	const newItem = document.createElement("li");
	newItem.classList.add("listItem");
        switch(item.priority) {
		case "high": 
		newItem.classList.add("high-priority");
		break;
		case "medium":
		newItem.classList.add("medium-priority");
		break;
		case "low":
		newItem.classList.add("low-priority");
		break;
	}
	newItem.innerHTML = '<details><summary style="font-size: 1rem;">' + item.name + '</summary><p>' + item.description + '</p></details><label style="font-size: 0.9rem;">Due date: ' + item.dueDate + ' <input type="checkbox" name="completed" value=""></label>';
    setMargin(newItem, item);
	mainList.appendChild(newItem);	
}
function setMargin(parentItem, item) {
	let checkbox = parentItem.querySelector('[type="checkbox"]');
	if (item.dueDate != "") {
		checkbox.className = "smaller-left-margin";
	}
}

export {displayListItem};