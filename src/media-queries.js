import {listTitle} from './DOM.js';

const mainTitle = document.querySelector("h1");
const mainBox = document.getElementById("mainBox");
const sidebar = document.getElementById("lists-sidebar");
const addItemBox = document.getElementById("addItemBox");
const widthTrigger = window.matchMedia("screen and (max-width: 750px)");

function addMobileStyles(x) {
    if (x.matches) {
        console.log("matched");
        mainBox.classList.add("mobile");
        sidebar.classList.add("mobile", "hidden");
        addItemBox.classList.add("mobile", "hidden");
        const topNavBar = document.createElement("div");
        topNavBar.id = "topNavBar";
        document.body.appendChild(topNavBar);
        topNavBar.appendChild(mainTitle);
        //topNavBar.appendChild(listTitle);
    }
    else {
    
    }
}

export {addMobileStyles, widthTrigger};