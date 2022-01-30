import {list} from "./manageLists.js";
import {
  populateStorage,
  listNames,
  setListNames,
  LOCAL_STORAGE_LISTS_OBJECT,
} from "./localStorage.js";
import {
  configCheckBoxes,
  configItemDeleteButtons,
  setItemIndices,
  displayListItem,
} from "./listItemsDOM.js";

//OL:
const mainList = document.querySelector("#mainlist");
//list element object:
const main = document.getElementById("main");
const addListButton = document.getElementById("addListButton");
const nameInput = document.getElementById("listName");
const listTitle = document.getElementById("list-title");
//OL:
const listOfLists = document.getElementById("mylists");

let listElements = [main];
let myListsArray = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LISTS_OBJECT)) || [];

function createListElements(listNames) {
    for (let i = 1; i < listNames.length; i++) {
        const listElement = document.createElement("li");
        listElement.innerHTML = '<a href="#">' +
            listNames[i] +
            '</a><button class="delete-li">X</button>';
        listElement.id = listNames[i];
        listElements.push(listElement);
        listOfLists.appendChild(listElement);
        setListEventHandlers();
        configListDeleteButtons();
    }
}

function clearListOfLists() {
    while (listOfLists.hasChildNodes()) {
        listOfLists.firstChild.remove();
    }
    return;
}

function configListDeleteButtons() {
    let deleteArray2 = [...listOfLists.getElementsByClassName("delete-li")];
    deleteArray2.forEach(deleteButton => {
        deleteButton.addEventListener("click", (e) => {
            e.stopPropagation();
            deleteButton.parentElement.remove();
            let toBeDeleted = listElements.findIndex(
                listElement => listElement.id == e.target.parentElement.id
            );
            if (toBeDeleted > 0) {
                listElements.splice(toBeDeleted, 1);
                let index = myListsArray.findIndex(
                    listObject => listObject.name == e.target.parentElement.id
                );
                myListsArray.splice(index, 1);
                listNames = setListNames();
                listElements = [main];
                clearListOfLists();
                listOfLists.appendChild(main);
                createListElements(listNames);
            }
        });
    });
}

function loadDefaultList() {
    myListsArray[0].active = true;
    setItemIndices(myListsArray[0]);
    myListsArray[0].contents.forEach(listItemObject => {
        displayListItem(listItemObject);
    });
    configItemDeleteButtons(myListsArray[0]);
    configCheckBoxes();
}

addListButton.onclick = () => {
    let newList = new list(nameInput.value);
    displayListElement(newList);
    nameInput.value = "";
};

function displayListElement(list) {
    const listElement = document.createElement("li");
    listElement.innerHTML = '<a href="#">' + 
        list.name + 
        '</a><button class="delete-li">X</button>';
    listElement.id = list.name;
    listElements.push(listElement);
    listOfLists.appendChild(listElement);
    configListDeleteButtons();
    setListEventHandlers();
}

function setListEventHandlers() {
    listElements.forEach(listElement => {
        listElement.onclick = () => {
            myListsArray.forEach(listObject => {
                if (listObject.name == listElement.firstElementChild.innerText) {
                    mainList.textContent = "";
                    listObject.active = true;
                    listTitle.textContent = listObject.name;
                    setItemIndices(listObject);
                    listObject.contents.forEach(listItemObject => {
                        displayListItem(listItemObject);
                    });
                    configItemDeleteButtons(listObject);
                    configCheckBoxes();
                } 
                else {
                    listObject.active = false;
                }
            });
        };
    });
    localStorage.clear();
    populateStorage();
}

export {
  myListsArray,
  listTitle,
  mainList,
  listElements,
  loadDefaultList,
  createListElements,
};
