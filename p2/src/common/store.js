import Vue from 'vue'
import Vuex from 'vuex'

import * as app from '@/common/app.js'

Vue.use(Vuex)

export default new Vuex.Store({
    // State - Single source of truth; object where all data is stored.
    state: {
        shoppingListCount: 0,
        favoritesListCount: 0,
        recipes: [],
    },
    // Mutations - Methods used to update data in the store.
    mutations: {
        setShoppingListCount(state, payload) {
            state.shoppingListCount = payload;
        },
        setFavoritesListCount(state, payload) {
            state.favoritesListCount = payload;
        },
        updateShoppingListCount(state, payload) {
            state.shoppingListCount += payload;
        },
        updateFavoritesListCount(state, payload) {
            state.favoritesListCount = payload;
        },
        updateRecipes(state, payload) {
            state.recipes = payload;
        }
    },
    // Actions - Methods used to asynchronously change the store, committing the changes via mutations.
    actions: {
        setRecipes(context) {
            app.api.all('recipes').then(response => {
                context.commit('updateRecipes', response);
            });
        }
    },
    // Getters - Methods used to retrieve and perform some operation on data in the store.
    getters: {
        getRecipeBySlug(state) {
            return function (slug) {
                for (let key of Object.keys(state.recipes)) {
                    if (state.recipes[key].slug == slug) {
                        return state.recipes[key];
                    }
                }
            }
        }
    }
})