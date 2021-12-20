import {myListsArray} from "./DOM.js";

function list(name) {
	this.name = name;
    this.contents = [];
    this.active = false;
    myListsArray.push(this);
    return this;
}
//yes

export {list};