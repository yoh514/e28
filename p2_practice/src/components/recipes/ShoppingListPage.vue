<template>
    <div id='shopping-page'>
        <h1>Your Ingredients Shopping List</h1>

        <div v-if='items.length == 0'>No items</div>
        <ul class='cleanList' v-if='recipes'>
            <li v-for='item in items' :key='item.name'>
                <p>
                    <span>({{ item.quantity }}) x {{ item.name }}</span>
                    <span>
                        <button
                            @click='removeFromShoppingList(item.name, item.quantity)'
                        >Remove</button>
                    </span>
                </p>
            </li>
        </ul>
    </div>
</template>

<script>
import * as app from '@/common/app.js';
export default {
    data: function() {
        return {
            items: [],
            shoppingList: null
        };
    },
    mounted() {
        // Making ShoppingList instant a data property so we can use it later in a removeFromShoppingList method
        this.shoppingList = new app.ShoppingList();
        this.items = this.shoppingList.getItems();
    },
    methods: {
        removeFromShoppingList(ingredient, quantity) {
            this.shoppingList.remove(ingredient);
            this.$store.commit('updateShoppingListCount', -quantity);
        }
    },
    computed: {
        recipes: function() {
            return this.$store.state.recipes;
        }
    }
};
</script>