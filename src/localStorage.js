import {listElements, myListsArray, createListElements, loadDefaultList} from './DOM.js';
import {addMobileStyles, widthTrigger} from './media-queries.js';

let listNames;
let LOCAL_STORAGE_LISTS_OBJECT = "task.myListsArray";

window.onload = () => {
	console.log({myListsArray});
	if (myListsArray.length == 0) {
		const first = new list("Main");
		first.active = true;	
	}	
    if (localStorage.getItem("listNames2")) {
		// will already include "main" as first item:
		listNames = localStorage.getItem("listNames2").split(",");
	}
	// first time app is used; "main" is added:
	else listNames = ["Main"];
	createListElements(listNames);	
	loadDefaultList();
	addMobileStyles(widthTrigger);
};

function setListNames() {
	listNames = listElements.map(listElement => {
		if (listElement.children[0].childNodes[0].nodeValue != null) {
			return listElement.children[0].childNodes[0].nodeValue;
		}
	});
	return listNames;
}

function populateStorage() {
	setListNames();   
	listNames.toString();
    localStorage.setItem("listNames2", listNames);
    localStorage.setItem(LOCAL_STORAGE_LISTS_OBJECT, JSON.stringify(myListsArray));
	console.log("populated!");	
}

export {populateStorage, listNames, setListNames, LOCAL_STORAGE_LISTS_OBJECT};