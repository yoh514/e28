<template>
    <div>
        <p><i>A recipe book for all your favorite recipes</i></p>
        <show-recipes />
    </div>
</template>

<script>
import RecipesPage from '@/components/recipes/RecipesPage.vue';
export default {
    components: {
        'show-recipes': RecipesPage
    }
};
</script>

<style scoped>
</style>