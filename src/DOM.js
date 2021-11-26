const mainList = document.querySelector(".active");

function displayListItem(item) {
	const newItem = document.createElement("li");
	newItem.classList.add("listItem");
    switch(item.priority) {
		case "high": 
		newItem.classList.add("high-priority");
		break;
		case "medium":
		newItem.classList.add("medium-priority");
		break;
		case "low":
		newItem.classList.add("low-priority");
		break;
	}
	newItem.innerHTML = '<details><summary>' + item.name + '</summary><p>' + item.description + '</p></details><label>Due date: ' + item.dueDate + ' <input type="checkbox" name="completed" value=""></label>';
	mainList.appendChild(newItem);	
}

export {displayListItem};