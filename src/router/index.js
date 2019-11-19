import Vue from 'vue'
import VueRouter from 'vue-router'
import Events from '../views/Events.vue'
import AddEvent from '../views/AddEvent.vue'
import EditEvent from '../views/EditEvent.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'events',
    component: Events
  },
  {
    path: '/add-event',
    name: 'add-event',
    component: AddEvent
  },
  {
    path: '/edit-event/:eventId',
    name: 'edit-event',
    component: EditEvent
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
