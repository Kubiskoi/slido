<template>
    <div>
        <h2 class="text-xl capitalize text-gray-600 mb-4">upcoming events</h2>
        <div class="max-w-md">
            <transition-group name="event-list">
              <Event v-for="event in events" :key="event.eventId" :event-data="event"/>
            </transition-group>
            <div v-if="!eventsLength" class="capitalize p-5 font-thin text-gray-600">no upcoming events ...</div>
        </div>
    </div>
</template>

<script>
import Event from '@/components/Event.vue'

export default {
  components: {
    Event
  },
  computed: {
    events () {
      let events = this.$store.getters.upcomingEvents
      return events.sort((a, b) => (a.ts >= b.ts) ? 1 : -1)
    },
    eventsLength () {
      return this.events.length
    }
  }
}
</script>

<style>
.event-list-leave-active {
  -webkit-transition: opacity .3s;
  -o-transition: opacity .3s;
  transition: opacity .3s;
}
.event-list-leave-to {
  opacity: 0;
}
</style>
