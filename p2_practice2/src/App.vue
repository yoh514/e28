<template>
    <div id='app'>
        <img alt='Recipe Book logo' id='logo' src='@/assets/images/recipe-book-logo.jpg' />

        <nav>
            <ul>
                <li v-for='link in links' :key='link'>
                    <router-link :to='{ name: link }' exact>
                        {{ link }}
                        <span v-if='link == "shoppingList"'>({{ shoppingListCount }})</span>
                        <span v-if='link == "favoritesList"'>({{ favoritesListCount }})</span>
                    </router-link>
                </li>
            </ul>
        </nav>

        <router-view></router-view>
    </div>
</template>

<script>
import * as app from '@/common/app.js';
export default {
    name: 'App',
    components: {},
    data: function() {
        return {
            links: ['home', 'shoppingList', 'favoritesList', 'add a recipe'],
            favoritesList: null,
        };
    },
    mounted: function() {
        let shoppingList = new app.ShoppingList();
        let favoritesList = new app.FavoritesList();
        this.$store.commit('setShoppingListCount', shoppingList.count());
        this.$store.commit('setFavoritesListCount', favoritesList.count());
        this.$store.dispatch('setRecipes');
    },
    computed: {
        shoppingListCount: function() {
            return this.$store.state.shoppingListCount;
        },
        favoritesListCount: function() {
            return this.$store.state.favoritesListCount;
        }
    }
};
</script>

<style lang='scss'>
@import '@/assets/scss/recipe-book.scss';
</style>