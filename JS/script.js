const itemInput = document.getElementById("itemInput");
const itemList = document.getElementById("itemList");
const showListBtn = document.getElementById("showList");
const clearListBtn = document.getElementById("clearList");

// Array to hold shopping list items
let shoppingList = [];

// Function to render the shopping list
function renderList() {
  // Clear current list
  itemList.innerHTML = "";

  // Add each item to the list
  shoppingList.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = item.name;

    // Add class 'completed' if item is purchased
    if (item.purchased) {
      li.classList.add("completed");
    }

    // Toggle 'completed' class on click
    li.addEventListener("click", function () {
      item.purchased = !item.purchased;
      this.classList.toggle("completed");
    });

    itemList.appendChild(li);
  });
}
// Get input value
const newItemName = itemInput.value.trim();

if (newItemName !== "") {
  // Create new item object
  const newItem = {
    name: newItemName,
    purchased: false,
  };

  // Add item to shopping list array
  shoppingList.push(newItem);

  // Render the updated shopping list
  renderList();

  // Clear input
  itemInput.value = "";
}

// Event listener for showing the list
showListBtn.addEventListener("click", function () {
  renderList();
});

// Event listener for clearing the list
clearListBtn.addEventListener("click", function () {
  // Clear shopping list array
  shoppingList = [];

  // Clear the displayed list
  itemList.innerHTML = "";
});
