let myListsArray = [];

function list(name) {
	this.name = name;
    this.contents = [];
    this.active = false;
    myListsArray.push(this);
    console.log({myListsArray})
}

export {list, myListsArray};