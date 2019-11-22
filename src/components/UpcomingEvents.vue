<template>
    <div>
        <h2 class="text-xl capitalize text-gray-600 mb-4">upcoming events</h2>
        <div>
            <Event v-for="event in events" :key="event.eventId" :event-data="event"/>
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
    }
  }
}
</script>

<style>
</style>
