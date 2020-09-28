/*v2
const app = new Vue({
    el: '#app',
    data: {
        item: '',
        items: [],
    },
});
*/

//v3
const app = Vue.createApp({
    data() {
        return {
            item: '',
            items: [],
        }
    }
}).mount('#app');