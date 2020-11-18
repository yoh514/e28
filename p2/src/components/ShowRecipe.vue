<template>
    <router-link class='recipe' :to='{ name: "recipe", params: {slug: recipe.slug }}'>
        <div class='recipe-name'>{{ recipe.name }}</div>
        <img class='recipe-thumb' :src='imageSrc' />
        <div class='recipe-summary'>{{ recipe.summary }}</div>
    </router-link>
</template>

<script>
export default {
    props: ['recipe'],
    data: function() {
        return {};
    },
    computed: {
        imageSrc: function() {
            try {
                return require('@/assets/images/recipes/' +
                    this.recipe.slug +
                    '.png');
            } catch (e) {
                return require('@/assets/images/recipes/image-not-available.jpg');
            }
        }
    }
};
</script>

<style scoped>
</style>