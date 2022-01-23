import {mainList, myListsArray} from "./DOM.js";
import {
    displayListItem,
    configCheckBoxes,
    configItemDeleteButtons,
    setItemIndices,
} from "./listItemsDOM.js";
import {populateStorage} from "./localStorage.js";

const clearButton = document.getElementById("clearButton");

clearButton.addEventListener("click", () => {
    let activeList = myListsArray.find((list) => list.active == true);
    clearCompletedItems(activeList);
});

function clearCompletedItems(listObject) {
    let incompleteItems = listObject.contents.filter(
        (listItem) => listItem.complete == false
    );
    listObject.contents = incompleteItems;
    mainList.textContent = "";
    setItemIndices(listObject);
    listObject.contents.forEach((item) => displayListItem(item));
    configItemDeleteButtons(listObject);
    configCheckBoxes();
    populateStorage();
}
