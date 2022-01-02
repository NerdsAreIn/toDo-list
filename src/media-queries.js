import {listTitle} from './DOM.js';

const mainTitle = document.querySelector("h1");
const mainBox = document.getElementById("mainBox");
const sidebar = document.getElementById("lists-sidebar");
const addItemBox = document.getElementById("addItemBox");
const widthTrigger = window.matchMedia("screen and (max-width: 750px)");
const sortBox = document.getElementById("sortBox");

function addMobileClass() {
    mainBox.classList.add("mobile");
    sidebar.classList.add("mobile");
    addItemBox.classList.add("mobile");
    sortBox.classList.add("mobile");
}

function removeMobileClass() {
    mainBox.classList.remove("mobile");
    sidebar.classList.remove("mobile");
    addItemBox.classList.remove("mobile");
    sortBox.classList.remove("mobile");
}

function createMobileButtons() {
    const innerNav = document.createElement("nav");
    const viewListsButton = document.createElement("button");
    const openAddItemBoxButton = document.createElement("button");
    viewListsButton.textContent = "View Lists";
    openAddItemBoxButton.textContent = "Add To-Do Item"
    innerNav.id = "innerNav";    
    viewListsButton.className = "mobile-button";  
    openAddItemBoxButton.className = "mobile-button"; 
    innerNav.appendChild(viewListsButton);
    innerNav.appendChild(openAddItemBoxButton);
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

export {addMobileStyles, widthTrigger};