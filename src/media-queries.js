const mainTitle = document.querySelector("h1");
const ribbon = document.getElementById("title-bar");
const mainBox = document.getElementById("mainBox");
const leftSidebar = document.getElementById("lists-sidebar");
const rightSidebar = document.getElementById("right-sidebar");
const addItemBox = document.getElementById("addItemBox");
const sortBox = document.getElementById("sortBox");
const widthTrigger = window.matchMedia("screen and (max-width: 750px)");

let viewListsButton;
let openAddItemBoxButton;
let overlay;
let closeButton = document.createElement("button");
let topNavBar;
closeButton.className = "close-button";
closeButton.textContent = "Close";

function addMobileClass() {
    mainBox.classList.add("mobile");
    leftSidebar.classList.add("mobile-slide");
    addItemBox.classList.add("mobile-slide");
    sortBox.classList.add("mobile");
    document.body.classList.add("mobile");
}

function removeMobileClass() {
    mainBox.classList.remove("mobile");
    leftSidebar.classList.remove("mobile-slide");
    addItemBox.classList.remove("mobile-slide");
    addItemBox.classList.remove("visible");
    leftSidebar.classList.remove("visible");
    sortBox.classList.remove("mobile");
    document.body.classList.remove("mobile");
}

function createMobileButtons() {
    const innerNav = document.createElement("nav");
    viewListsButton = document.createElement("button");
    openAddItemBoxButton = document.createElement("button");
    viewListsButton.textContent = "View Lists";
    openAddItemBoxButton.textContent = "Add To-Do Item";
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
    topNavBar = document.createElement("div");
    topNavBar.id = "topNavBar";
    document.body.appendChild(topNavBar);
    topNavBar.appendChild(mainTitle);
    topNavBar.appendChild(createMobileButtons());
}

function createOverlay() {
    if (document.body.contains(overlay)) return;
    else {
        setTimeout(() => {
            overlay = document.createElement("div");
            overlay.id = "overlay";
            document.body.appendChild(overlay);
        }, 200);
    }
}

function addMobileStyles(x) {
    if (x.matches) {
        rightSidebar.remove();
        addMobileClass();
        ribbon.remove();
        createTopNavBar();
        document.body.appendChild(sortBox);
        document.body.appendChild(addItemBox);
    } 
    else {
        removeMobileClass();
        document.body.appendChild(rightSidebar);
        rightSidebar.appendChild(sortBox);
        rightSidebar.appendChild(addItemBox);
        document.body.removeChild(topNavBar);
        document.body.appendChild(ribbon);
        ribbon.appendChild(mainTitle);
        if (document.body.contains(overlay)) {
            document.body.removeChild(overlay);
        }
        if (document.body.contains(closeButton)) {
            closeButton.remove();
        }
    }
}

function viewLists() {
    leftSidebar.classList.add("visible");
    if (!leftSidebar.contains(closeButton)) leftSidebar.appendChild(closeButton);
    closeButton.addEventListener("click", () => closePopup(leftSidebar));
    createOverlay();
}

function openAddItemBox() {
    addItemBox.classList.add("visible");
    if (!addItemBox.contains(closeButton)) addItemBox.appendChild(closeButton);
    closeButton.addEventListener("click", () => closePopup(addItemBox));
    createOverlay();
}

function closePopup(popup) {
    popup.classList.remove("visible");
    if (document.body.contains(overlay)) {
        document.body.removeChild(overlay);
    }
}

widthTrigger.addEventListener("change", addMobileStyles);

export {addMobileStyles, widthTrigger};
