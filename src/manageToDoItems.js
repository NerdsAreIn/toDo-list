function listItem(name, description, dueDate, priority) {
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.complete = false;
    this.completeValue = 10;
    return this;
}

function getIndex(listItemObject) {
    return listItemObject.index;
}

export {listItem, getIndex};
