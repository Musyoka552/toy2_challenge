
### Explanation:
1. **HTML**: 
   - Add items, buttons (`showList` and `clearList`) to show the list and clear the list respectively, and an unordered list (`itemList`) where items are dynamically added.

2. **JavaScript**: 
   - **Event Listeners**: 
     - When an item is added, it creates an object with the item's name and `purchased` status 
     - Listens for clicks on the `showList` button to render the current shopping list.
     - Listens for clicks on the `clearList` button to clear both the `shoppingList` array and the displayed list (`itemList`).

   - **Rendering Function (`renderList()`)**:
     - Clears the current list (`itemList`).
     - Iterates through the `shoppingList` array and creates a new `li` element for each item.
     - Adds a click event listener to each `li` element to toggle the `completed` class (line-through styling) and update the `purchased` status of the corresponding item in the `shoppingList` array.

3. **Functionality**: 
   - Users can add items to the shopping list by entering text and clicking "Add Item".
   - Clicking on an item marks it as purchased (toggles line-through styling).
   - Clicking "Show List" displays the current shopping list.
   - Clicking "Clear List" removes all items from the shopping list.