<template>
    <div>
        <p><i>Explore Korean Food At Home!</i></p>
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