import {listItem} from './manageToDoItems.js';
import {list} from './manageLists.js';

const addItemButton = document.getElementById("addButton");
const nameField = document.getElementById("nameField");
const descripField = document.getElementById("descripField");
const dueField = document.getElementById("dueField");
const priorityButtons = Array.from(document.getElementsByClassName("priority"));

let myListsArray = [];
//let myListsArrayNumber;

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
	//setKeysAndValues();
	setMyListsArray();
    setListNames();    
    console.log({listNames});
    localStorage.setItem("listNames2", listNames);
    localStorage.setItem("myListsStrings2", myListsStrings);
	localStorage.setItem("myListsArray2", myListsArray);
	console.log({myListsArray});
    console.log({localStorage});
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

let keys = [];
let values = [];

/*function setKeysAndValues() {
	for (let i = 0; i < myListsArray.length; i++) {
        keys[i] = Object.keys(myListsArray[i]);
        values[i] = Object.values(myListsArray[i]);
        console.log(keys[i]);
		console.log(values[i]);
    }
	localStorage.setItem("keys2", keys);
	localStorage.setItem("values2", values);
	console.log({keys});
	console.log({localStorage});
}*/
let myListsStrings = [];

function setMyListsArray() {
	if (myListsArray.length == 0) return;
	for (let i = 0; i < myListsArray.length; i++) {
		myListsArray[i] = String(Object.entries(myListsArray[i]));
		console.log(myListsArray[i]);
		console.log({myListsArray});
		//myListsStrings.push(myListsArray[i]);
		console.log({myListsStrings});
	}
}
//setMyListsArray();
/*function getKeysAndValues() {   
	keys = localStorage.getItem("keys2");
	values = localStorage.getItem("values2");    
	for (let i = 0; i < myListsArray.length; i++) {
		myListsArray[i] = {
			[keys[i][0]]: values[i][0],
			[keys[i][1]]: values[i][1],
			[keys[i][2]]: values[i][2],                        
		};
       console.log(myListsArray[i]);
    }
	console.log({keys});
	console.log({values});
	console.log({localStorage});
}*/

window.addEventListener("beforeunload", populateStorage);
//localStorage.clear();

// TODO: for each object in myListsArray, create two arrays of keys and values, respectively. 
// Turn each of these into strings and save them in localStorage. When retrieving, convert these back into arrays 
// and build up each object in myListsArray by joining the corresponding items in the two arrays -
// i.e., key-value pairs. 

window.onload = () => {
    if (localStorage.getItem("myListsArray2")) {
		myListsArray = localStorage.getItem("myListsArray2").split(",");
	    console.log({myListsArray});
		for	(let i = 0; i < myListsArray.length; i++) {
			myListsStrings.push(myListsArray[i]);
			console.log(myListsArray[i]);
			console.log({myListsStrings});
		}
	}
	else if (myListsArray.length == 0) {
			const first = new list("Main");
			first.active = true;	
	}		
	 /*if (myListsArrayNumber == 0) {
		 myListsArrayNumber++;
	 }*/     
    /*if (localStorage.getItem("myListsArray") != null || undefined) {
        console.log("found!");		
        console.log({myListsArray});
        console.log(typeof myListsArray);        
  		//myListsArray = Array.from(JSON.parse(localStorage.getItem("myListsArray")));
	}*/	
    if (localStorage.getItem("listNames2")) {
		listNames = localStorage.getItem("listNames2").split(",");
	}
	else listNames = ["Main"];
	//listNames.split(","); 
    for (let i = 1; i < listNames.length; i++) {
        const listElement = document.createElement("li");	
    	listElement.innerHTML = '<a href="#">' + listNames[i] + '</a>';     
		listElements.push(listElement);
    	listOfLists.appendChild(listElement);
	}
	console.log({myListsArray});
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
    clearFields();   
}

addListButton.onclick = () => {
    let newList = new list(nameInput.value);
    //myListsArrayNumber++;	
  	displayListElement(newList);
    nameInput.value = "";
}

function displayListElement(list) {
	const listElement = document.createElement("li");	
    listElement.innerHTML = '<a href="#">' + list.name + '</a>';     
	listElements.push(listElement);
    listOfLists.appendChild(listElement);
    createList();
}

function createList() {
    console.log({myListsArray});   
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