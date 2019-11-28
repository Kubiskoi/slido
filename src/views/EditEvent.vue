<template>
  <div>
    <SectionTitle title='edit event'/>
    <AddOrEditEvent :eventId='this.eventId'/>
  </div>
</template>

<script>
import AddOrEditEvent from '@/components/AddOrEditEvent.vue'
import SectionTitle from '@/components/SectionTitle.vue'

export default {
  components: {
    AddOrEditEvent,
    SectionTitle
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
