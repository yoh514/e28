<template>
    <div>
        <h2>Add a Recipe</h2>

        <label for='name'>Name</label>
        <input type='text' v-model='recipe.name' id='name' />

        <label for='slug'>URL Identifier:</label>
        <input type='text' v-model='recipe.slug' id='slug' />

        <label for='description'>Description</label>
        <textarea v-model='recipe.description' id='description'></textarea>

        <input type='submit' value='Add' @click.prevent='addRecipe' />

        <transition name='fade'>
            <div class='alert' v-if='added'>Your recipe was added!</div>
        </transition>
    </div>
</template>

<script>
import * as app from '@/common/app.js';
export default {
    data: function() {
        return {
            added: false,
            recipe: {
                name: '',
                slug: '',
                summary: '',
                ingredients: []
            }
        };
    },
    methods: {
        addRecipe: function() {
            app.api.add('recipes', this.recipe).then(() => {
                this.added = true;
                setTimeout(() => (this.added = false), 3000);
                this.recipe = {
                    name: '',
                    slug: '',
                    summary: '',
                    ingredients: []
                };
            });
        }
    }
};
</script>

<style scoped>
input {
    font-size: 15pt;
}
textarea,
input[type='text'] {
    width: 50%;
}
textarea {
    height: 75px;
    display: block;
    margin: auto;
}
label {
    margin-top: 20px;
    display: block;
    font-weight: bold;
}
input[type='submit'] {
    display: inline-block;
    margin-top: 10px;
}
</style>