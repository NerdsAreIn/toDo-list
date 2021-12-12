import {listItem} from './manageToDoItems.js';
import {list} from './manageLists.js';

const addItemButton = document.getElementById("addButton");
const nameField = document.getElementById("nameField");
const descripField = document.getElementById("descripField");
const dueField = document.getElementById("dueField");
const priorityButtons = Array.from(document.getElementsByClassName("priority"));

let myListsArray = [];
const mainListObject = new list("Main");
mainListObject.active = true;
console.log({myListsArray});	

const mainList = document.querySelector("#mainlist");

//list element object:
const main = document.getElementById("main");

const addListButton = document.getElementById("addListButton");
const nameInput = document.getElementById("listName");

const listTitle = document.getElementById("list-title");

//UL:
let listOfLists = document.getElementById("mylists");
let listElements = [main];
let listNames;

let priority;		
const localStorage = window.localStorage;

function populateStorage() {
    getListNames();
    listNames.toString();
    //Object(myListsArray);
	console.log({listNames});
	console.log({myListsArray});
    localStorage.setItem("listNames2", listNames);
    localStorage.setItem("myListsArray", myListsArray);
    console.log({listNames});       
	console.log({listElements});
	console.log(localStorage);
    console.log("populated!");	
}

function getListNames() {
	listNames = listElements.map(listElement => {
		console.log(listElement.children[0].childNodes[0].nodeValue);
		return listElement.children[0].childNodes[0].nodeValue;
	});
	return listNames;
}

window.addEventListener("beforeunload", populateStorage);

// TODO: for each object in myListsArray, create two arrays of keys and values, respectively. Turn each of these into strings and save them in localStorage. When retrieving, convert these back into arrays and build up each object in myListsArray by joining the corresponding items in the two arrays - i.e., key-value pairs. 

window.onload = () => {
console.log(myListsArray.length);
	console.log({myListsArray});
    if (localStorage.getItem("myListsArray") != null || undefined) {
        console.log("found!");
        console.log({myListsArray});
        console.log(typeof myListsArray);        
  		myListsArray = Array.from(JSON.parse(localStorage.getItem("myListsArray")));
	}	
    listNames = localStorage.getItem("listNames2").split(",")|| ["Main"]; 
    console.log(listNames.length);
    for (let i = 1; i < listNames.length; i++) {
        console.log(listNames[i]);
		const listElement = document.createElement("li");	
    	listElement.innerHTML = '<a href="#">' + listNames[i] + '</a>';     
		listElements.push(listElement);
    	listOfLists.appendChild(listElement);
	}
	console.log({listElements});
	console.log({myListsArray});
	console.log({listNames});
	createList();
};

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
    //localStorage.clear();
    //populateStorage();
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
    //getListNames();
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
	//localStorage.clear();
	//populateStorage();
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


export {displayListItem, myListsArray};