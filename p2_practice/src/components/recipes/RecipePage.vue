<template>
    <div id='recipe-page' v-if='recipe'>
        <h2>{{ recipe.name }}</h2>
        <img class='recipe-thumb' :alt='"Recipe image of  " + recipe.name' :src='imageSrc' />
        <p class='description'>{{ recipe.summary }}</p>
        <show-ingredients :ingredients='recipe.ingredients'></show-ingredients>

        <button @click='addToFavoritesList(slug)'>Add to favorites list</button>

        <transition name='fade'>
            <div class='alert' v-if='addAlert'>Your favorites list has been updated!</div>
        </transition>

        <router-link :to='{ name: "home" }'>&larr; Return to all recipes</router-link>
    </div>
</template>

<script>
import * as app from '@/common/app.js';
import IngredientsPage from '@/components/recipes/IngredientsPage.vue';
export default {
    name: '',
    props: ['slug'],
    data: function() {
        return {
            addAlert: false
        };
    },
    components: {
        'show-ingredients': IngredientsPage
    },
    computed: {
        recipe() {
            return this.$store.getters.getRecipeBySlug(this.slug);
        },
        imageSrc: function() {
            try {
                return require('@/assets/images/recipes/' +
                    this.recipe.slug +
                    '.jpg');
            } catch (e) {
                return require('@/assets/images/recipes/image-not-available.jpg');
            }
        }
    },
    methods: {
        addToFavoritesList: function(slug) {
            let favoritesList = new app.FavoritesList();
            favoritesList.add(slug);
            this.$store.commit('updateFavoritesListCount', favoritesList.count());
            this.addAlert = true;
            setTimeout(() => (this.addAlert = false), 1000);
        }
    }
};
</script>

<style scoped>
</style>