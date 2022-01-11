import {listItem, getIndex} from "./manageToDoItems.js";
import {myListsArray, mainList} from "./DOM.js";
import {assignPriority, priority} from "./priority.js";

const addItemButton = document.getElementById("addButton");
const nameField = document.getElementById("nameField");
const descripField = document.getElementById("descripField");
const dueField = document.getElementById("dueField");

function clearFields() {
	const fields = Array.from(document.querySelectorAll(".textfield"));
    fields.map(field => field.value = "");
}

addItemButton.onclick = () => {
	let item = new listItem(nameField.value, descripField.value, dueField.value, priority);
	myListsArray.forEach(listObject => {
		if (listObject.active == true) {
			listObject.contents.push(item);
			setItemIndices(listObject);	
			displayListItem(item);
			configItemDeleteButtons(listObject);
			configCheckBoxes();			
		}
	});  	
	clearFields();   
}

function setItemIndices(listObject) {
	let number = 1;
	for (let i = 0; i < listObject.contents.length; i++) {
		listObject.contents[i].index = number;
		number++;
	}
}

function configItemDeleteButtons(listObject) {
	let deleteArray = [...mainList.getElementsByClassName("delete")];
	deleteArray.forEach(deleteButton => {
		deleteButton.addEventListener("click", (e) => {
			for (let i = 0; i < listObject.contents.length; i++) {
				if (listObject.contents[i].index == e.target.parentElement.parentElement.id) {
					listObject.contents.splice(i, 1);
					setItemIndices(listObject);							
					break;				
				}				       
			} 
			e.target.parentElement.parentElement.remove(); 
			configCheckBoxes();
			let mainListArray = Array.from(mainList.children);
			for (let i = 0; i < listObject.contents.length; i++) {    
				mainListArray[i].id = getIndex(listObject.contents[i]);
			}  						                                           
		});
	});	       
}

function configCheckBoxes() {
	let checkboxes = [...mainList.getElementsByClassName("checkbox")];	   
	checkboxes.forEach(checkbox => {
		checkbox.removeEventListener("click", respondToClick);
		checkbox.addEventListener("click", respondToClick);
	});
}

function respondToClick(e) {
		let targetItem;
		let activeList = myListsArray.find(list => list.active == true);
		e.target.parentElement.parentElement.parentElement.firstChild.firstChild.firstChild.classList.toggle("complete");
		e.target.parentElement.parentElement.parentElement.firstChild.firstChild.children[1].classList.toggle("complete");
		targetItem = activeList.contents.find(listItem => listItem.index == e.target.parentElement.parentElement.parentElement.id);
		if (targetItem.complete == false) {
			targetItem.complete = true;	
			targetItem.completeValue = 0;		
		}
		else if (targetItem.complete == true) {
			targetItem.complete = false;
			targetItem.completeValue = 10;
		}
}

function displayListItem(itemObject) {
	const itemElement = document.createElement("li");
	itemElement.id = getIndex(itemObject);
	itemElement.classList.add("listItem");
	assignPriority(itemElement, itemObject);
	itemElement.innerHTML = createItemContent(itemObject);
	if (itemObject.complete == true) markComplete(itemElement);
    mainList.appendChild(itemElement);	
}

function createItemContent(item) {
	return '<div class="toDoBox"><details><summary>'
	 + item.name + '</summary><p>' + item.description + 
	 '</p></details><p class="dueDate">Due date: ' + item.dueDate + 
	 '</p><label class="completeLabel">Completed: <input type="checkbox" class="checkbox" name="completed" value=""></label><button class="delete">X</button></div>';    
}

function markComplete(itemElement) {
	itemElement.firstChild.firstChild.firstChild.classList.add("complete");
	itemElement.firstChild.firstChild.children[1].classList.add("complete");
	let checkbox = itemElement.querySelector(".checkbox");
	checkbox.setAttribute("checked", true);	
}

export {configCheckBoxes, configItemDeleteButtons, setItemIndices, displayListItem};