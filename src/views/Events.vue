<template>
    <div class="md:flex">
        <UpcomingEvents class="mb-10 md:w-5/12"/>
        <PastEvents/>
    </div>
</template>

<script>
import UpcomingEvents from '@/components/UpcomingEvents.vue'
import PastEvents from '@/components/PastEvents.vue'

export default {
  components: {
    UpcomingEvents,
    PastEvents
  }
}
</script>
