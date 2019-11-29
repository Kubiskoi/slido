<template>
  <div>
    <div class="max-w-sm">
      <form @submit.prevent="onSubmit">
        <div class="mb-6 relative">
          <input
            v-model="eveTitle"
            class="appearance-none rounded-none bg-transparent w-full text-gray-700 py-1 px-2 leading-tight border-b-2 focus:outline-none"
            :class="{ 'border-red-600': $v.eveTitle.$error, 'border-green-600': !$v.eveTitle.$error}"
            type="text"
            placeholder="Title">
          <div v-if="$v.eveTitle.$error" class="absolute text-red-600 text-xs">Error in this field!</div>
        </div>
        <div class="mb-6 relative">
          <input
            v-model.number="eveEntry"
            class="appearance-none rounded-none bg-transparent w-full text-gray-700 py-1 px-2 leading-tight border-b-2 focus:outline-none"
            :class="{ 'border-red-600': $v.eveEntry.$error, 'border-green-600': !$v.eveEntry.$error}"
            type="number"
            step="0.01"
            placeholder="Entry $">
          <div v-if="$v.eveEntry.$error" class="absolute text-red-600 text-xs">Error in this field!</div>
        </div>
        <div class="sm:flex sm:justify-between">
          <div class="mb-6 relative sm:w-5/12">
            <pikaday
              v-model="eveDate"
              class="appearance-none rounded-none bg-transparent w-full text-gray-700 py-1 px-2 leading-tight border-b-2 focus:outline-none"
              :class="{ 'border-red-600': $v.eveDate.$error, 'border-green-600': !$v.eveDate.$error}"
              placeholder="Date"></pikaday>
            <div v-if="$v.eveDate.$error" class="absolute text-red-600 text-xs">Error in this field!</div>
          </div>
          <div class="mb-6 relative sm:w-5/12">
            <vue-timepicker
              v-model="eveTime"
              class="tp-wrap"
              :input-class="tp"
              placeholder="Time"
              close-on-complete></vue-timepicker>
            <div v-if="$v.eveTime.$error" class="absolute text-red-600 text-xs">Error in this field!</div>
          </div>
        </div>
        <div class="mb-6 relative">
          <textarea
            v-model="eveDesc"
            class="desc appearance-none rounded-none bg-transparent w-full text-gray-700 py-1 px-2 leading-tight border-b-2 focus:outline-none"
            :class="{ 'border-red-600': $v.eveDesc.$error, 'border-green-600': !$v.eveDesc.$error}"
            cols="30"
            rows="4"
            placeholder="Description"></textarea>
          <div v-if="$v.eveDesc.$error" class="absolute text-red-600 text-xs">Error in this field!</div>
        </div>
        <div v-if="visibleFormControl" class="flex">
          <input
            type="submit"
            class="capitalize appearance-none rounded-none mr-4 px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-xs leading-none cursor-pointer focus:outline-none bg-transition"
            :value="submitButtonValue">
          <div @click="$router.go(-1)" class="capitalize px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white text-xs cursor-pointer leading-none bg-transition">cancel</div>
        </div>
        <div v-show="sameEventData" class="text-red-800 mt-4">Please update at least one field.</div>
      </form>
      <div v-if="loading">
        <img class="w-10 p-2 mx-auto" src="../../public/img/load.gif" alt="loading">
      </div>
      <div v-if="visibleMessage" class="text-gray-600">
        {{message}}
      </div>
    </div>
  </div>
</template>

<script>
import Pikaday from '@idecardo/vue-pikaday'
import VueTimepicker from 'vue2-timepicker'
import { required, minValue, decimal } from 'vuelidate/lib/validators'
import generateId from '@/helpers/IdGenerator'
import calcTimestamp from '@/helpers/TimeStampCalc'
import getDateAndTime from '@/helpers/GetDateAndTime'
import { isEqual } from 'lodash'

export default {
  props: {
    eventId: String
  },
  components: {
    Pikaday,
    VueTimepicker
  },
  data () {
    return {
      editing: false,
      submitButtonValue: 'save',
      loading: false,
      visibleFormControl: true,
      visibleMessage: false,
      message: '',
      eveId: '',
      eveTitle: '',
      eveEntry: '',
      eveDate: '',
      eveTime: '',
      eveDesc: '',
      originalEvent: {},
      sameEventData: false
    }
  },
  validations: {
    eveTitle: {
      required
    },
    eveEntry: {
      required,
      decimal,
      mV: minValue(1)
    },
    eveDate: {
      required
    },
    eveTime: {
      required
    },
    eveDesc: {
      required
    }
  },
  computed: {
    tp () {
      if (this.$v.eveTime.$error) {
        return 'tp tp-error rounded-none'
      } else {
        return 'tp tp-ok rounded-none'
      }
    }
  },
  methods: {
    onSubmit () {
      this.$v.$touch()
      if (this.$v.$invalid) {
      // console.log('error')
      } else {
        const formData = {
          eventId: this.eveId,
          title: this.eveTitle,
          entry: this.eveEntry,
          desc: this.eveDesc,
          ts: calcTimestamp(this.eveDate, this.eveTime)
        }
        if (this.editing) {
          if (isEqual(formData, this.originalEvent)) {
            this.sameEventData = true
            return
          } else {
            this.sameEventData = false
          }
          this.$store.dispatch('updateEvent', formData)
        } else {
          this.$store.dispatch('saveEvent', formData)
        }

        this.loading = !this.loading
        this.visibleFormControl = !this.visibleFormControl

        setTimeout(() => {
          this.loading = !this.loading
          this.visibleMessage = !this.visibleMessage
        }, 400)
      }
    }
  },
  created () {
    this.$store.dispatch('toggleAddButton')

    if (typeof this.eventId === 'string' && this.eventId.length > 0) {
      this.editing = true
      this.eveId = this.eventId

      this.originalEvent = this.$store.getters.eventDetail(this.eveId)
      if (typeof this.originalEvent === 'undefined') {
        this.$router.push('/404')
        return
      }

      const dateTime = getDateAndTime(this.originalEvent.ts, 'edit')

      this.eveTitle = this.originalEvent.title
      this.eveEntry = this.originalEvent.entry
      this.eveDate = dateTime.date
      this.eveTime = dateTime.time
      this.eveDesc = this.originalEvent.desc

      this.submitButtonValue = 'update'
      this.message = 'Event updated!'
    } else {
      this.eveId = generateId()
      this.message = 'Event saved!'
    }
  },
  destroyed () {
    this.$store.dispatch('toggleAddButton')
  }
}
</script>

<style>
.tp-wrap{
  width: 100%;
}

.tp{
  width: 100%!important;
  height: 30px!important;
  border: none!important;
  outline: none!important;
}

.tp-ok{
  border-bottom: 2px solid #38a169!important;
}

.tp-error{
  border-bottom: 2px solid #e53e3e!important;
}

.desc{
  resize: none;
}
</style>
