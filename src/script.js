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

addItemBtn.addEventListener("click", addItem);
removeMarkedBtn.addEventListener("click", removeMarked);
itemsList.addEventListener("click", handleCheckbox);

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
}

displayItems();

function addItem() {
  if (newItemInput.value) {
    items.push({ name: newItemInput.value, marked: false });
    newItemInput.value = "";
  }
  displayItems();
}

function removeMarked() {
  for (let i = 0; i < items.length; i++) {
    console.log(items[i]);
    if (items[i].marked) {
      items.splice(i, 1);
      i--;
    }
  }
  displayItems();
}

function checkItemsIndex(e) {
  return Array.from(e.target.parentNode.parentNode.children).indexOf(
    e.target.parentNode
  );
}

function changeMarker(e) {
  items[checkItemsIndex(e)].marked = !items[checkItemsIndex(e)].marked;
}

function handleCheckbox(e) {
  if (e.target.tagName != "INPUT") return;
  changeMarker(e);
}
