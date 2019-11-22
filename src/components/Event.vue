<template>
    <div>
    <div>
        <div class="text-xs font-hairline text-gray-500 pb-1">{{eveDate}} {{eveTime}}</div>
    </div>
    <div class="mb-10 flex justify-between pt-3 border-t-2 border-green-600">
        <div class="flex-shrink-0">
            <div>
                <div class="text-xs font-hairline text-gray-500">{{eventData.entry}} $</div>
            </div>
        </div>
        <div class="flex-grow px-4">
            {{eventData.title}}
        </div>
        <div class="flex-shrink-0">
          edit
          del
        </div>
    </div>
    </div>
</template>

<script>
import getDateAndTime from '@/helpers/GetDateAndTime'

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
