import {listItem} from './manageToDoItems.js';
import {list} from './manageLists.js';

const addItemButton = document.getElementById("addButton");
const nameField = document.getElementById("nameField");
const descripField = document.getElementById("descripField");
const dueField = document.getElementById("dueField");
const priorityButtons = Array.from(document.getElementsByClassName("priority"));

let LOCAL_STORAGE_LISTS_OBJECT = "task.myListsArray";
let myListsArray = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LISTS_OBJECT)) || [];

const mainList = document.querySelector("#mainlist");

//list element object:
const main = document.getElementById("main");

const addListButton = document.getElementById("addListButton");
const nameInput = document.getElementById("listName");

const listTitle = document.getElementById("list-title");

//OL:
const listOfLists = document.getElementById("mylists");
let listElements = [main];
let listNames;
let priority;		

//createList();

function populateStorage() {
	setListNames();    
    localStorage.setItem("listNames2", listNames);
    localStorage.setItem(LOCAL_STORAGE_LISTS_OBJECT, JSON.stringify(myListsArray));
	console.log("populated!");	
}

function setListNames() {
	listNames = listElements.map(listElement => {
		if (listElement.children[0].childNodes[0].nodeValue != null) {
			return listElement.children[0].childNodes[0].nodeValue;
		}
	});
	listNames.toString();
	return listNames;
}

window.addEventListener("beforeunload", populateStorage);
//localStorage.clear();

window.onload = () => {
    if (myListsArray.length == 0) {
		const first = new list("Main");
		first.active = true;	
	}	
    if (localStorage.getItem("listNames2")) {
		listNames = localStorage.getItem("listNames2").split(",");
	}
	else listNames = ["Main"];
	for (let i = 1; i < listNames.length; i++) {
        const listElement = document.createElement("li");	
    	listElement.innerHTML = '<a href="#">' + listNames[i] + '</a><button class="delete-li">X</button>';     
		listElements.push(listElement);
    	listOfLists.appendChild(listElement);
	}
	createList();
};

priorityButtons.forEach(button => {
    if (button.hasAttribute("checked")) {
		priority = button.value;
    }
   	button.onfocus = () => {
		priority = button.value;

	};    
	button.onclick = () => {
		priority = button.value;
	};
});

function clearFields() {
	const fields = Array.from(document.querySelectorAll(".textfield"));
    fields.map(field => field.value = "");
}

addItemButton.onclick = () => {
	let item = new listItem(nameField.value, descripField.value, dueField.value, priority);
	myListsArray.forEach(listObject => {
		if (listObject.active == true) {
			console.log({listObject});	    
			listObject.contents.push(item);
			setItemIndices(listObject);	
			displayListItem(item);
			configDeleteButtons(listObject);	
		}
	});  	
    clearFields();   
}

addListButton.onclick = () => {
    let newList = new list(nameInput.value);
    displayListElement(newList);
    nameInput.value = "";
}

function displayListElement(list) {
	const listElement = document.createElement("li");	
    listElement.innerHTML = '<a href="#">' + list.name + '</a><button class="delete-li">X</button>';     
	listElements.push(listElement);
    listOfLists.appendChild(listElement);
    createList();
}

function createList() {
	console.log({listElements});
    listElements.forEach(listElement => {		
		listElement.onclick = () => {		
			console.log("list element clicked");				
			myListsArray.forEach(listObject => {
				if (listObject.name == listElement.firstElementChild.innerText) {	
					mainList.textContent = "";
					listObject.active = true;
					listTitle.textContent = listObject.name;
					setItemIndices(listObject);
					listObject.contents.forEach(listItemObject => {
						displayListItem(listItemObject);
					});
					configDeleteButtons(listObject);
					console.log({listObject});			
				}
				else  {
					listObject.active = false;
				}
			});			
		};
	});
	localStorage.clear();
	populateStorage();		
}

function setItemIndices(listObject) {
	let number = 1;
	for (let i = 0; i < listObject.contents.length; i++) {
		listObject.contents[i].index = number;
		number++;
	}
}

function configDeleteButtons(listObject) {
	const deleteArray = [...mainList.getElementsByClassName("delete")];
	console.log({deleteArray});
	console.log({listObject});
	console.log({myListsArray});
	deleteArray.forEach(deleteButton => {
		deleteButton.addEventListener("click", (e) => {
			for (let i = 0; i < listObject.contents.length; i++) {
				if (listObject.contents[i].index == e.target.parentElement.parentElement.id) {
					listObject.contents.splice(i, 1);
					console.log("deleted item");
					console.log(listObject.contents);
					setItemIndices(listObject);					
					break;				
				}				       
			} 
			e.target.parentElement.parentElement.remove(); 
			let mainListArray = Array.from(mainList.children);
			console.log({mainListArray});
			console.log(listObject.contents);
			for (let i = 0; i < listObject.contents.length; i++) {    
				console.log(listObject.contents[i].index);
				mainListArray[i].id = getIndex(listObject.contents[i]);
				console.log(mainListArray[i].id);
			}      
			//myListsArray = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LISTS_OBJECT));
			console.log({myListsArray});							                                           
		});
	});	       
}

function getIndex(listItemObject) {
	return listItemObject.index;
}

function displayListItem(item) {
	const newItem = document.createElement("li");
	newItem.id = getIndex(item);
	console.log(newItem.id);	
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
	newItem.innerHTML = '<div class="toDoBox"><details><summary style="font-size: 1rem;">'
	 + item.name + '</summary><p>' + item.description + 
	 '</p></details><label position="relative" style="font-size: 0.9rem;">Due date: ' + item.dueDate +
	  '<p class="complete">Completed: </p><input type="checkbox" name="completed" value=""></label><button class="delete">X</button></div>';    
    //setMargin(newItem, item);
	mainList.appendChild(newItem);	
}

function setMargin(parentItem, item) {
	let checkbox = parentItem.querySelector('[type="checkbox"]');
	if (item.dueDate != "") {
		checkbox.className = "smaller-left-margin";
	}
}

export {displayListItem, myListsArray};