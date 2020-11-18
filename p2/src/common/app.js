import Api from '@/common/api.js';

export { default as ShoppingList } from '@/common/ShoppingList.js';

export { default as FavoritesList } from '@/common/FavoritesList.js';

export const config = {
    firebase: {
        apiKey: 'AIzaSyBiVFyAmIexbkQ60XlcxN0arHSpD6x_oIU',
        projectId: 'e28-p2-76e95'
    }
}

export const api = new Api({
    apiKey: config.firebase.apiKey,
    projectId: config.firebase.projectId
});