const itemsList = document.getElementById("items-list");
const addItemBtn = document.getElementById("add-item-btn");
const clearMarkedBtn = document.getElementById("clear-marked-btn");
const newItemInput = document.getElementById("new-item");
const items = [
  { name: "chleb", marked: false },
  { name: "szynka", marked: true },
  { name: "mleko", marked: false },
];

function displayItems() {
  itemsList.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    li.textContent = item.name;
    itemsList.appendChild(li);
    checkbox.type = "checkbox";
    checkbox.checked = item.marked;
    li.prepend(checkbox);
  });
  addListener();
}

displayItems();

function addItem() {
  items.push({ name: newItemInput.value, marked: false });
  newItemInput.value = "";
  displayItems();
}

function addListener() {
  itemsList.childNodes.forEach((item) => {
    item.childNodes[0].addEventListener("click", changeMarked);
  });
}

addItemBtn.addEventListener("click", addItem);

function checkIndex(e) {
  return Array.from(e.target.parentNode.parentNode.children).indexOf(
    e.target.parentNode
  );
}

function changeMarked(e) {
  items[checkIndex(e)].marked = !items[checkIndex(e)].marked;
}
