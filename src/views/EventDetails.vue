<template>
    <div>
        <SectionTitle title='event details'/>
        {{event}}
    </div>
</template>

<script>
import SectionTitle from '@/components/SectionTitle.vue'

export default {
  components: {
    SectionTitle
  },
  data () {
    return {
      eventId: ''
    }
  },
  computed: {
    event () {
      return this.$store.getters.eventDetail(this.eventId)
    }
  },
  created () {
    this.eventId = this.$route.params.eventId
  }
}
</script>
