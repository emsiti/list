const itemsList = document.getElementById("items-list");
const addItemBtn = document.getElementById("add-item-btn");
const removeMarkedBtn = document.getElementById("clear-marked-btn");
const newItemInput = document.getElementById("new-item");
const items = [
  { name: "chleb", marked: false },
  { name: "szynka", marked: true },
  { name: "mleko", marked: false },
  { name: "masło", marked: false },
  { name: "kurczak", marked: false },
  { name: "parówki", marked: false },
];
const storedItems = [];

addItemBtn.addEventListener("click", addItem);
removeMarkedBtn.addEventListener("click", removeMarked);
itemsList.addEventListener("click", handleCheckbox);

function storeItems() {
  localStorage.storedItems = JSON.stringify(items);
}

function getItems() {
  items.length = 0;
  JSON.parse(localStorage.getItem("storedItems")).forEach((item) => {
    items.push(item);
  });
}

displayList();

function displayList() {
  itemsList.innerHTML = "";
  if (localStorage.storedItems) {
    getItems();
  }
  sortItems();
  items.forEach((item) => {
    itemsList.appendChild(createListItem(item));
  });
}

function createListItem(item) {
  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  li.textContent = item.name;
  checkbox.checked = item.marked;
  checkbox.type = "checkbox";
  checkbox.name = "item";
  li.prepend(checkbox);
  return li;
}

function sortItems() {
  items.sort(function compare(a, b) {
    return a.marked - b.marked;
  });
}

function addItem() {
  if (newItemInput.value) {
    items.push({ name: newItemInput.value, marked: false });
    newItemInput.value = "";
  }
  storeItems();
  displayList();
}

function removeMarked() {
  for (let i = 0; i < items.length; i++) {
    if (items[i].marked) {
      items.splice(i, 1);
      i--;
    }
  }
  storeItems();
  displayList();
}

function checkItemsIndex(e) {
  return Array.from(e.target.parentNode.parentNode.children).indexOf(
    e.target.parentNode
  );
}

function changeMarker(e) {
  items[checkItemsIndex(e)].marked = !items[checkItemsIndex(e)].marked;
  storeItems();
  displayList();
}

function handleCheckbox(e) {
  if (e.target.tagName != "INPUT") return;
  changeMarker(e);
}
