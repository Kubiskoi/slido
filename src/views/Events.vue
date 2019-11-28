<template>
  <div>
    <div class="mb-10">
      <input
        class="appearance-none rounded-none bg-transparent border-b-2 border-green-600 text-gray-700 py-1 px-2 focus:outline-none"
        type="text"
        @input="search"
        placeholder="Search">
    </div>
    <div class="max-w-md">
      <transition-group name="event-list">
        <Event v-for="event in events" :key="event.eventId" :event-data="event"/>
      </transition-group>
      <div v-if="!eventsLength" class="capitalize p-5 font-thin text-gray-600">no events found ...</div>
    </div>
  </div>
</template>

<script>
import Event from '@/components/Event.vue'
import { debounce } from 'lodash'

export default {
  components: {
    Event
  },
  data () {
    return {
      searchString: ''
    }
  },
  computed: {
    events () {
      let events = []
      if (this.$router.currentRoute.name === 'past-events') {
        events = this.$store.getters.pastEvents
        events.sort((a, b) => (a.ts <= b.ts) ? 1 : -1)
      } else if (this.$router.currentRoute.name === 'upcoming-events') {
        events = this.$store.getters.upcomingEvents
        events.sort((a, b) => (a.ts >= b.ts) ? 1 : -1)
      }
      if (this.searchString === '') {
        return events
      } else {
        return events.filter(ev => ev.title.toLowerCase().includes(this.searchString.toLowerCase()))
      }
    },
    eventsLength () {
      return this.events.length
    }
  },
  methods: {
    search: debounce(function (e) {
      this.searchString = e.target.value
    }, 300)
  }
}
</script>

<style>
.event-list-enter-active,.event-list-leave-active {
  -webkit-transition: opacity .3s;
  -o-transition: opacity .3s;
  transition: opacity .3s;
}
.event-list-enter,.event-list-leave-to {
  opacity: 0;
}
</style>
