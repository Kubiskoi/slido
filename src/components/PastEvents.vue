<template>
    <div>
        <h2 class="text-xl capitalize text-gray-600 mb-4">past events</h2>
        <!-- <router-link :to="{ name: 'edit-event', params: { eventId: 'hjbsda54q23' }}">edit evet</router-link> -->
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
      let events = this.$store.getters.pastEvents
      return events.sort((a, b) => (a.ts <= b.ts) ? 1 : -1)
    }
  }
}
</script>

<style>
</style>
