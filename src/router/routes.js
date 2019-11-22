import Events from '@/views/Events.vue'
import AddEvent from '@/views/AddEvent.vue'
import EditEvent from '@/views/EditEvent.vue'

export default [
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
