let myListsArray = [];

function list(name) {
	this.name = name;
    this.contents = [];
    this.active = false;
    myListsArray.push(this);
    console.log({myListsArray})
    return this;
}

export {list, myListsArray};