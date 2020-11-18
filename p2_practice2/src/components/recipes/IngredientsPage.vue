<template>
    <div id='ingredients-page'>
        <div v-if='!ingredients || ingredients.length == 0'>No ingredients</div>
        <ul class='cleanList' v-if='this.ingredients'>
            <h3>Ingredients</h3>
            <transition name='fade'>
                <div class='alert' v-if='addIngredient'>Your recipe ingredient was added!</div>
            </transition>
            <li v-for='ingredient in ingredients' :key='ingredient'>
                <p>
                    <span>{{ ingredient }}</span>
                    <span>
                        <button
                            @click='addToShoppingList(ingredient)'
                        >Add to cart</button>
                    </span>
                </p>
            </li>
        </ul>
    </div>
</template>

<script>
import * as app from '@/common/app.js';
export default {
    props: ['ingredients'],
    data: function() {
        return {
            addIngredient: false
        };
    },
    methods: {
         addToShoppingList: function(ingredient) {
            let shoppingList = new app.ShoppingList();
            shoppingList.add(ingredient);
            this.$store.commit('updateShoppingListCount', 1);
            this.addIngredient = true;
            setTimeout(() => (this.addIngredient = false), 1000);
        }
    }
};
</script>