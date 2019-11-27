<template>
    <div>
        <SectionTitle title='event details'/>
        <div class="max-w-md mb-10">
        <div class="mb-4">
            <div class="capitalize text-gray-600 inline-block border-b-2 border-green-600 mb-2">title</div>
            <div class="text-2xl">{{event.title}}</div>
        </div>
        <div class="mb-4">
            <div class="capitalize text-gray-600 inline-block border-b-2 border-green-600 mb-2">entry $</div>
            <div class="text-2xl">{{event.entry}}</div>
        </div>
        <div class="mb-4">
            <div class="capitalize text-gray-600 inline-block border-b-2 border-green-600 mb-2">date &amp; time</div>
            <div class="text-2xl">{{dateTime.date}}, {{dateTime.time}}</div>
        </div>
        <div class="mb-4">
            <div class="capitalize text-gray-600 inline-block border-b-2 border-green-600 mb-2">description</div>
            <div class="text-xl">{{event.desc}}</div>
        </div>
      </div>
      <div class="mb-20">
          <div @click="$router.go(-1)" class="capitalize px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white text-xs cursor-pointer leading-none bg-transition inline">back</div>
      </div>
    </div>
</template>

<script>
import SectionTitle from '@/components/SectionTitle.vue'
import getDateAndTime from '@/helpers/GetDateAndTime'

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
    },
    dateTime () {
      return getDateAndTime(this.event.ts, 'show')
    }
  },
  created () {
    this.eventId = this.$route.params.eventId
  }
}
</script>
