import {myListsArray} from "./DOM.js";

function list(name) {
	this.name = name;
    this.contents = [];
    this.active = false;
    this.itemCount = 0;
    myListsArray.push(this);
    return this;
}

export {list};