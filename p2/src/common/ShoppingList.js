export default class ShoppingList {

    /**
     * 
     */
    constructor() {
        // Extract JSON shoppingList string from local storage
        let shoppingList = localStorage.getItem('shoppingList');

        // Parse JSON cart String to `items` object
        this.items = (shoppingList) ? JSON.parse(shoppingList) : [];
    }

    /**
     * Getter method for items
     */
    getItems() {
        return this.items;
    }

    /**
     * Returns how many total items are in the shopping list
     */
    count() {
        let sum = 0;
        for (let key of Object.keys(this.items)) {
            sum += this.items[key].quantity;
        }
        return sum;
    }

    /**
     * Updates shopping in localstorage
     */
    update() {
        localStorage.setItem('shoppingList', JSON.stringify(this.items))
    }

    /**
     * Add a new item of the given name
     */
    add(name, quantity = 1) {

        // First see if recipe ingredient is already present
        name = this.normalizeName(name);
        let item = this.getItem(name)

        if (item) {
            // Recipe ingredient is already in shopping list; increment quantity by 1
            item.quantity += quantity;

        } else {
            // Recipe ingredient is not in shopping list yet, add as new item
            this.items.push({
                name: name,
                quantity: quantity
            });
        }

        this.update();
    }

    /**
     * Remove an item from items via name
     */
    remove(name) {
        let item = this.getItem(name);

        let itemIndex = this.items.indexOf(item);

        if (item) {
            this.items.splice(itemIndex, 1);
            this.update();
        }
    }

    /**
     * Get an item from items via name
     * Returns null if recipe does not exist in items
     */
    getItem(recipeIngredientName) {
        return this.items.find(({ name }) => name === recipeIngredientName) || null;
    }

     /**
     * Updates name to remove unnecessary information
     */
    normalizeName(name) { //TODO: remove numbers
        return name;
    }
}