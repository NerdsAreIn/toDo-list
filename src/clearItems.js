import {myListsArray} from './DOM.js';

const clearButton = document.getElementById("clearButton");

clearButton.addEventListener("click", () => {
    let activeList = myListsArray.find(list => list.active == true);
    clearCompletedItems(activeList);
});

function clearCompletedItems(listObject) {
    let completedItems = listObject.contents.filter(listItem => listItem.complete == true);
    console.log({completedItems});
    
}