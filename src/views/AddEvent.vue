<template>
    <div>
        <SectionTitle title='add event'/>
        <AddOrEditEvent/>
    </div>
</template>

<script>
import AddOrEditEvent from '@/components/AddOrEditEvent.vue'
import SectionTitle from '@/components/SectionTitle.vue'

export default {
  components: {
    AddOrEditEvent,
    SectionTitle
  }
}
</script>
