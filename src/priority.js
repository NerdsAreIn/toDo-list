const priorityButtons = Array.from(document.getElementsByClassName("priority"));
let priority;

priorityButtons.forEach(button => {
    if (button.hasAttribute("checked")) {
        priority = button.value;
    }
    button.onfocus = () => {
        priority = button.value;
    };
    button.onclick = () => {
        priority = button.value;
    };
});

function assignPriority(itemElement, itemObject) {
    switch (itemObject.priority) {
        case "high":
          itemElement.classList.add("high-priority");
          itemObject.value = 10;
          break;
        case "medium":
          itemElement.classList.add("medium-priority");
          itemObject.value = 20;
          break;
        case "low":
          itemElement.classList.add("low-priority");
          itemObject.value = 30;
          break;
    }
}

export {assignPriority, priority};
