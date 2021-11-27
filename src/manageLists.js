let myLists = [];

function list(name) {
	this.name = name;
    this.contents = [];
    myLists.push(list);
}

export {list};