<template>
    <div class="lg:flex lg:justify-between">
        <UpcomingEvents class="mb-10 lg:w-5/12 lg:mb-0"/>
        <PastEvents class="lg:w-5/12"/>
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
