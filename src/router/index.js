import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'formView',
    component: () => import('../views/formView.vue')
  },
  {
    path: '/tableView',
    name: 'tableView',
    component: () => import('../views/tableView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
