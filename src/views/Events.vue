<template>
    <div>
        <UpcomingEvents/>
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
