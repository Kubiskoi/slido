<template>
    <div>
        <div class="text-6xl bg-blue">test</div>
        <router-link :to="{ name: 'edit-event', params: { eventId: 'hjbsda54q23' }}">edit evet</router-link>
        <ul>
            <li v-for="event in events" :key="event.eventId">{{event.eventId}} - {{event.title}}</li>
        </ul>
    </div>
</template>

<script>
export default {
  computed: {
    events () {
      return this.$store.getters.upcomingEvents
    }
  }
}
</script>

<style>
</style>
