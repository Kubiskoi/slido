<template>
    <div>
        <div>
            <div class="text-xs font-hairline text-gray-500 pb-1">{{eveDate}}, {{eveTime}}</div>
        </div>
        <div class="mb-10 flex justify-between pt-3 border-t-2 border-green-600">
            <div class="flex-shrink-0">
              <div class="text-xs font-hairline text-gray-500">{{eventData.entry}} $</div>
            </div>
            <div class="flex-grow px-4">
                <router-link :to="{ name: 'event-details', params: { eventId: eventData.eventId }}" class="cursor-pointer outline-none leading-none hover:text-green-600 color-transition">{{eventData.title}}</router-link>
            </div>
            <div class="flex-shrink-0">
                <div>
                    <router-link :to="{ name: 'edit-event', params: { eventId: eventData.eventId }}" class="capitalize cursor-pointer text-xs font-hairline text-gray-500 outline-none leading-none hover:text-green-600">edit</router-link>
                </div>
                <div>
                    <span @click="deleteEvent" class="capitalize cursor-pointer text-xs font-hairline text-gray-500 outline-none leading-none hover:text-red-600">delete</span>
                </div>
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
  methods: {
    deleteEvent () {
      if (confirm('Delete event: ' + this.eventData.title + '?')) {
        this.$store.dispatch('deleteEvent', this.eventData.eventId)
      }
    }
  },
  created () {
    const dateTime = getDateAndTime(this.eventData.ts, 'show')
    this.eveDate = dateTime.date
    this.eveTime = dateTime.time
  }
}
</script>

<style>

</style>
