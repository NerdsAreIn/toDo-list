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
    document.body.classList.add("mobile-slide");
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

function createTopNavBar() {
    const topNavBar = document.createElement("div");
    topNavBar.id = "topNavBar";
    document.body.appendChild(topNavBar);
    topNavBar.appendChild(mainTitle);       
    topNavBar.appendChild(createMobileButtons());   
}

function createOverlay() {
    const overlay = document.createElement("div");
    overlay.id = "overlay";
    document.body.appendChild(overlay);
}

function addMobileStyles(x) {
    if (x.matches) {
        addMobileClass();       
        createTopNavBar();             
    }
    else {
        removeMobileClass();
        document.body.removeChild(topNavBar);
        document.body.insertBefore(mainTitle, sidebar);
    }
}

let closeButton = document.createElement("button");
    closeButton.className = "close-button";
    closeButton.textContent = "Close";

function createCloseButton(popup) {
    if (popup.contains(closeButton)) return;
    else return closeButton;    
}

function viewLists() {
    sidebar.classList.add("visible");    
    sidebar.appendChild(createCloseButton(sidebar));
    closeButton.addEventListener("click", () => closePopup(sidebar));
    createOverlay();
}

function closePopup(popup) {
    popup.classList.remove("visible");
    document.body.removeChild(overlay);
}

function openAddItemBox() {
    addItemBox.classList.add("visible");
    addItemBox.appendChild(createCloseButton(addItemBox));    
    closeButton.addEventListener("click", () => closePopup(addItemBox));
    createOverlay();
}

export {addMobileStyles, widthTrigger};