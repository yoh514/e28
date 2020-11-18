<template>
    <div id='recipes'>
        <h2>Recipes</h2>
        <show-recipe v-for='recipe in recipes' :key='recipe.id' :recipe='recipe'></show-recipe>
    </div>
</template>

<script>
import ShowRecipe from '@/components/ShowRecipe.vue';
export default {
    components: {
        'show-recipe': ShowRecipe
    },
    data: function() {
        return {};
    },
    computed: {
        recipes: function() {
            return this.$store.state.recipes;
        }
    }
};
</script>

<style scoped>
</style>