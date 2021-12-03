let myListsArray = [];

function list(name) {
	this.name = name;
    this.contents = [];
    myListsArray.push(this);
    console.log({myListsArray})
}

export {list, myListsArray};