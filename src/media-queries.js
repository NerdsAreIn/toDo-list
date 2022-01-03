import {listTitle} from './DOM.js';

const mainTitle = document.querySelector("h1");
const mainBox = document.getElementById("mainBox");
const sidebar = document.getElementById("lists-sidebar");
const addItemBox = document.getElementById("addItemBox");
const widthTrigger = window.matchMedia("screen and (max-width: 750px)");
const sortBox = document.getElementById("sortBox");
let viewListsButton;
let openAddItemBoxButton;

function addMobileClass() {
    mainBox.classList.add("mobile");
    sidebar.classList.add("mobile-slide");
    addItemBox.classList.add("mobile-slide");
    sortBox.classList.add("mobile");
}

function removeMobileClass() {
    mainBox.classList.remove("mobile");
    sidebar.classList.remove("mobile-slide");
    addItemBox.classList.remove("mobile-slide");
    sortBox.classList.remove("mobile");
}

function createMobileButtons() {
    const innerNav = document.createElement("nav");
    viewListsButton = document.createElement("button");
    openAddItemBoxButton = document.createElement("button");
    viewListsButton.textContent = "View Lists";
    openAddItemBoxButton.textContent = "Add To-Do Item"
    innerNav.id = "innerNav";    
    viewListsButton.className = "mobile-button";  
    openAddItemBoxButton.className = "mobile-button"; 
    innerNav.appendChild(viewListsButton);
    innerNav.appendChild(openAddItemBoxButton);
    openAddItemBoxButton.addEventListener("click", openAddItemBox);
    viewListsButton.addEventListener("click", viewLists);
    return innerNav;
}

function addMobileStyles(x) {
    if (x.matches) {
        addMobileClass();       
        const topNavBar = document.createElement("div");
        topNavBar.id = "topNavBar";
        document.body.appendChild(topNavBar);
        topNavBar.appendChild(mainTitle);       
        topNavBar.appendChild(createMobileButtons());               
    }
    else {
        removeMobileClass();
        document.body.removeChild(topNavBar);
        document.body.insertBefore(mainTitle, sidebar);
    }
}

function viewLists() {
    sidebar.classList.add("visible");
}

function openAddItemBox() {
    addItemBox.classList.add("visible");
}



export {addMobileStyles, widthTrigger};