import {listTitle} from './DOM.js';

const mainTitle = document.querySelector("h1");
const mainBox = document.getElementById("mainBox");
const sidebar = document.getElementById("lists-sidebar");
const addItemBox = document.getElementById("addItemBox");
const widthTrigger = window.matchMedia("screen and (max-width: 750px)");
const sortBox = document.getElementById("sortBox");

function addMobileStyles(x) {
    if (x.matches) {
        console.log("matched");
        mainBox.classList.add("mobile");
        sidebar.classList.add("mobile");
        addItemBox.classList.add("mobile");
        sortBox.classList.add("mobile");
        const topNavBar = document.createElement("div");
        topNavBar.id = "topNavBar";
        document.body.appendChild(topNavBar);
        topNavBar.appendChild(mainTitle);
        //topNavBar.appendChild(listTitle);
    }
    else {
        mainBox.classList.remove("mobile");
        sidebar.classList.remove("mobile");
        addItemBox.classList.remove("mobile");
        sortBox.classList.remove("mobile");
        document.body.removeChild(topNavBar);
        document.body.insertBefore(mainTitle, sidebar);
    }
}

export {addMobileStyles, widthTrigger};