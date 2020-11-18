export default class FavoritesList {

    /**
     * 
     */
    constructor() {
        // Extract JSON favoritesList string from local storage
        let favoritesList = localStorage.getItem('favoritesList');

        // Parse JSON favoritesList String to `items` object
        this.items = (favoritesList) ? JSON.parse(favoritesList) : [];
    }

    /**
     * Returns how many total items are in the list
     */
    count() {
        return this.items.length;
    }

    /**
     * Updates favoritesList in localstorage
     */
    update() {
        localStorage.setItem('favoritesList', JSON.stringify(this.items))
    }

    /**
     * Add a new item of the given slug
     */
    add(slug) {

        // First see if recipe is already present
        let item = this.getItem(slug)

        if (item) {
            // Recipe is already in favoritesList 
            return;

        } else {
            // Recipe is not in favoritesList, add as new item
            this.items.push({
                slug: slug
            });
        }

        this.update();
    }

    /**
     * Remove an item from items via slug
     */
    remove(slug) {
        let item = this.getItem(slug);

        let itemIndex = this.items.indexOf(item);

        if (item) {
            this.items.splice(itemIndex, 1);
            this.update();
        }
    }

    /**
     * Get an item from items via slug
     * Returns null if recipe does not exist in items
     */
    getItem(recipeSlug) {
        return this.items.find(({ slug }) => slug === recipeSlug) || null;
    }

    /**
     * Getter method for items
     */
    getItems() {
        return this.items;
    }

}