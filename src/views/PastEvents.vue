<template>
    <div>
        <h2 class="text-xl capitalize text-gray-600 mb-4">past events</h2>
        <div class="max-w-md">
            <Event v-for="event in events" :key="event.eventId" :event-data="event"/>
            <div v-if="!eventsLength" class="capitalize p-5 font-thin text-gray-600">no past events ...</div>
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
      let events = this.$store.getters.pastEvents
      return events.sort((a, b) => (a.ts <= b.ts) ? 1 : -1)
    },
    eventsLength () {
      return this.events.length
    }
  }
}
</script>

<style>
</style>
