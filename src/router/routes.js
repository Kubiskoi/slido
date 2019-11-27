import UpcommingEvents from '@/views/UpcomingEvents.vue'
import PastEvents from '@/views/PastEvents.vue'
import AddEvent from '@/views/AddEvent.vue'
import EditEvent from '@/views/EditEvent.vue'
import EventDetails from '@/views/EventDetails.vue'
import PageNotFound from '@/views/PageNotFound.vue'

export default [
  {
    path: '/',
    redirect: '/upcoming-events'
  },
  {
    path: '/upcoming-events',
    name: 'upcoming-events',
    component: UpcommingEvents
  },
  {
    path: '/past-events',
    name: 'past-events',
    component: PastEvents
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
  },
  {
    path: '/event-details/:eventId',
    name: 'event-details',
    component: EventDetails
  },
  {
    path: '*',
    component: PageNotFound
  }
]
