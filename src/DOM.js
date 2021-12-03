import {listItem} from './manageToDoItems.js';
import {list, myListsArray} from './manageLists.js';


const addItemButton = document.getElementById("addButton");
const nameField = document.getElementById("nameField");
const descripField = document.getElementById("descripField");
const dueField = document.getElementById("dueField");
const priorityButtons = Array.from(document.getElementsByClassName("priority"));

//prepopulated list example:
const main = document.getElementById("main");

const addListButton = document.getElementById("addListButton");
const nameInput = document.getElementById("listName");

const listContainer = document.getElementById("mainBox");

//UL:
let listOfLists = document.getElementById("mylists");
let listElements = [main];

let mainList = document.querySelector("mainlist");

let priority = "medium";

addItemButton.onclick = () => {
	let item = new listItem(nameField.value, descripField.value, dueField.value, priority);
	
  	displayListItem(item);
}

addListButton.onclick = () => {
    let newList = new list(nameInput.value);
	
  	displayList(newList);
	console.log({newList});
	console.log(newList.name);
	console.log({myListsArray});
}

listElements.forEach(listElement => {
	listElement.onclick = (e) => {
		myListsArray.forEach(listObject => {
			if (listObject.name == listElement.innerText) {
			//listElement.classList.add("active");
			mainList.textContent = "";
			listObject.contents.forEach(listItemObject => {displayListItem(listItemObject)});			
			}
		});
	//mainList = document.querySelector(".active");
    
	}
});
//listObject.contents = an array of list item objects
//listObject.contents.forEach(listItemObject => {displayListItem(listItemObject)});

priorityButtons.forEach(button => {
	button.onfocus = () => {
		priority = button.value;
	};
});	

function displayList(list) {
	const listElement = document.createElement("li");	
    listElement.innerHTML = '<a href="#">' + list.name + '</a>';
	listElements.push(listElement);
    listOfLists.appendChild(listElement);
	console.log({listOfLists});
    console.log({listElements});
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