import Vue from 'vue'
import Router from 'vue-router'
import Board from '@/components/Board';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Read',
      component: Read
    },
    {
      path: '/create/:contentId?',
      name: 'Create',
      component: Create
    },
    {
      path: '/detail/:contentId',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/board/free',
      name: 'Board',
      component: Board
    }
  ]
})
