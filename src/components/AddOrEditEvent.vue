<template>
    <div class="container">
        <div class="text-6xl bg-blue">add or edit</div>
    </div>
</template>

<script>
export default {
  props: {
    eventId: String
  },
  data () {
    return {
      editing: false
    }
  },
  created () {
    if (typeof this.eventId === 'string' && this.eventId.length > 0) {
      this.editing = true
    }
    console.log(this.editing)
  }
}
</script>

<style>

</style>
