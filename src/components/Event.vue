<template>
    <div class="mb-4 flex">
        <div>
            <div>{{eventData.title}}</div>
            <div>{{eveTime}}</div>
            <div>{{eventData.ts}}</div>
        </div>
    </div>
</template>

<script>
import getDateAndTime from '../helpers/GetDateAndTime'

export default {
  props: {
    eventData: Object
  },
  data () {
    return {
      eveDate: '',
      eveTime: ''
    }
  },
  created () {
    const dateTime = getDateAndTime(this.eventData.ts)
    this.eveDate = dateTime.date
    this.eveTime = dateTime.time
  }
}
</script>

<style>

</style>
