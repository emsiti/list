const itemsList = document.getElementById("items-list");
const addItemBtn = document.getElementById("add-item-btn");
const clearMarkedBtn = document.getElementById("clear-marked-btn");
const newItemInput = document.getElementById("new-item");

function addItem() {
  const li = document.createElement("li");
  li.textContent = newItemInput.value;
  itemsList.appendChild(li);
  newItemInput.value = "";
}

addItemBtn.addEventListener("click", addItem);
