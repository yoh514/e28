import Vue from 'vue'
import App from '@/App.vue'
import VueRouter from 'vue-router';
import HomePage from '@/components/recipes/HomePage.vue';
import RecipePage from '@/components/recipes/RecipePage.vue';
import RecipeCreatePage from '@/components/recipes/RecipeCreatePage.vue';
import ShoppingListPage from '@/components/recipes/ShoppingListPage.vue';
import FavoritesListPage from '@/components/recipes/FavoritesListPage.vue';

import store from '@/common/store';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: HomePage, name: 'home' },
  { path: '/recipe/:slug', component: RecipePage, name: 'recipe', props: true },
  { path: '/recipes/create', component: RecipeCreatePage, name: 'add a recipe' },
  { path: '/shoppingList', component: ShoppingListPage, name: 'shoppingList' },
  { path: '/favoritesList', component: FavoritesListPage, name: 'favoritesList' },
];

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

new Vue({
  store: store,
  router: router,
  render: h => h(App),
}).$mount('#app')