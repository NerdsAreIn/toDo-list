import {mainList, myListsArray} from './DOM.js';
import { displayListItem } from './listItemsDOM.js';
import { populateStorage } from './localStorage.js';

const clearButton = document.getElementById("clearButton");

clearButton.addEventListener("click", () => {
    let activeList = myListsArray.find(list => list.active == true);
    clearCompletedItems(activeList);
});

function clearCompletedItems(listObject) {
    let incompleteItems = listObject.contents.filter(listItem => listItem.complete == false);
    listObject.contents = incompleteItems;
    mainList.textContent = "";
    incompleteItems.forEach(item => displayListItem(item));
    populateStorage();
}