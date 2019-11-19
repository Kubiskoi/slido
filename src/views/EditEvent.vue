<template>
    <div>
        <h1>Edit event</h1>
        <AddOrEditEvent :eventId='this.eventId'/>
    </div>
</template>

<script>
import AddOrEditEvent from '@/components/AddOrEditEvent.vue'

export default {
  components: {
    AddOrEditEvent
  },
  data () {
    return {
      eventId: ''
    }
  },
  created () {
    this.eventId = this.$route.params.eventId
  }
}
</script>
