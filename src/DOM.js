import {listItem} from './manageToDoItems.js';
import {list, myListsArray} from './manageLists.js';

const addItemButton = document.getElementById("addButton");
const nameField = document.getElementById("nameField");
const descripField = document.getElementById("descripField");
const dueField = document.getElementById("dueField");
const priorityButtons = Array.from(document.getElementsByClassName("priority"));

const mainList = document.querySelector("#mainlist");

//list element object:
const main = document.getElementById("main");

const addListButton = document.getElementById("addListButton");
const nameInput = document.getElementById("listName");

const listTitle = document.getElementById("list-title");

//UL:
let listOfLists = document.getElementById("mylists");
let listElements;
let listNames;

let priority;

//populateStorage();

function populateStorage() {
    listNames = listElements.map(listElement => {
     console.log(listElement.children[0].childNodes[0].nodeValue);
    return listElement.children[0].childNodes[0].nodeValue;
	});
   window.localStorage.setItem("listNames2", JSON.stringify(listNames));
   window.localStorage.setItem("myListsArray2", JSON.stringify(myListsArray));
  console.log({listNames});
   console.log({myListsArray});   
	console.log({listElements});
	console.log(localStorage);
   console.log("populated!");	
}

//window.addEventListener("unload", populateStorage);

window.addEventListener("load", () => {
    listElements = [main];
	//populateStorage();
	if (myListsArray.length == 0) {
		const mainListObject = new list("Main");
		mainListObject.active = true;
	}
    else myListsArray = JSON.parse(window.localStorage.getItem("myListsArray2"));
	console.log({myListsArray});
    //console.log({listNames});
    //console.log(typeof listNames);
    listNames = window.localStorage.getItem("listNames2").split(" ") || ["Main"]; 
    //console.log({listNames});
    //console.log(typeof listNames);
     for (let i = 1; i < listNames.length; i++) {
        console.log(listNames[i]);
		const listElement = document.createElement("li");	
    	listElement.innerHTML = '<a href="#">' + listNames[i] + '</a>';     
		listElements.push(listElement);
    	listOfLists.appendChild(listElement);
	}
	console.log({listElements});
	console.log({myListsArray});
	createList();
});
console.log({listNames});
   console.log({myListsArray});   
	console.log({listElements});
	console.log(localStorage);

priorityButtons.forEach(button => {
    if (button.hasAttribute("checked")) {
		priority = button.value;
    }
   	button.onfocus = () => {
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
		listObject.contents.push(item);
		}
	});
  	displayListItem(item);
    localStorage.clear();
    populateStorage();
	clearFields();   
}

addListButton.onclick = () => {
    let newList = new list(nameInput.value);	
  	displayListElement(newList);
    nameInput.value = "";
	console.log({myListsArray});
}

function displayListElement(list) {
	const listElement = document.createElement("li");	
    listElement.innerHTML = '<a href="#">' + list.name + '</a>';     
	listElements.push(listElement);
    listOfLists.appendChild(listElement);
    createList();
	//console.log({listElements});
}

function createList() {
    console.log({listNames});
   console.log({myListsArray});   
	console.log({listElements});
	console.log(localStorage);
	listElements.forEach(listElement => {
		listElement.onclick = () => {
			    myListsArray.forEach(listObject => {
				if (listObject.name == listElement.innerText) {
				mainList.textContent = "";
				listObject.active = true;
                listTitle.textContent = listObject.name;
				listObject.contents.forEach(listItemObject => {
					displayListItem(listItemObject);
				});			
				}
				else listObject.active = false;
			});
		}
	});
	localStorage.clear();
	populateStorage();
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
	newItem.innerHTML = '<details><summary style="font-size: 1rem;">' + item.name + '</summary><p>' + item.description + '</p></details><label style="font-size: 0.9rem;">Due date: ' + item.dueDate + ' <input type="checkbox" name="completed"></label>';    
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