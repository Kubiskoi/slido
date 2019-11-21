<template>
    <div>
        <div class="max-w-sm md:mx-auto">
            <form @submit.prevent="onSubmit">
                <div class="mb-4">
                    <input
                        v-model="eveTitle"
                        class="appearance-none bg-transparent w-full text-gray-700 py-1 px-2 leading-tight border-b-2 focus:outline-none"
                        :class="{ 'border-red-600': $v.eveTitle.$error, 'border-green-600': !$v.eveTitle.$error}"
                        type="text"
                        placeholder="Title">
                </div>
                <div class="mb-4">
                    <input
                        v-model.number="eveEntry"
                        class="appearance-none bg-transparent w-full text-gray-700 py-1 px-2 leading-tight border-b-2 focus:outline-none"
                        :class="{ 'border-red-600': $v.eveEntry.$error, 'border-green-600': !$v.eveEntry.$error}"
                        type="number"
                        step="0.01"
                        placeholder="Entry $">
                </div>
                <div class="">
                  <div>
                    <div class="mb-4">
                      <pikaday
                        v-model="eveDate"
                        placeholder="Date"
                        class="appearance-none bg-transparent w-full text-gray-700 py-1 px-2 leading-tight border-b-2 focus:outline-none"
                        :class="{ 'border-red-600': $v.eveDate.$error, 'border-green-600': !$v.eveDate.$error}"></pikaday>
                    </div>
                    <div class="mb-4 timepicker">
                      <vue-timepicker
                        class="omg"
                        v-model="eveTime"
                        close-on-complete></vue-timepicker>
                    </div>
                  </div>
                </div>
                <div class="flex md:justify-center">
                    <input
                        type="submit"
                        class="capitalize mr-4 px-4 py-2 bg-green-600 text-white text-xs leading-none focus:outline-none"
                        :value="submitButtonValue">
                    <router-link
                        :to="{ name: 'events'}"
                        class="capitalize px-4 py-2 bg-gray-600 text-white text-xs leading-none">cancel</router-link>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import Pikaday from '@idecardo/vue-pikaday'
import VueTimepicker from 'vue2-timepicker'
import { required, minValue, decimal } from 'vuelidate/lib/validators'
import * as IdGenerator from '../helpers/IdGenerator'

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
      eveId: '',
      eveTitle: '',
      eveEntry: '',
      eveDate: '',
      eveTime: ''
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
    }
  },
  methods: {
    onSubmit () {
      this.$v.$touch()
      if (this.$v.$invalid) {
        console.log('err')
      } else {
        const formData = {
          eventId: this.eveId,
          title: this.eveTitle,
          entry: this.eveEntry,
          date: this.eveDate
        }
        this.$store.dispatch('saveEvent', formData)
      }
    }
  },
  created () {
    if (typeof this.eventId === 'string' && this.eventId.length > 0) {
      this.editing = true
      this.eveId = this.eventId
      this.submitButtonValue = 'update'
    } else {
      this.eveId = IdGenerator.generateId()
    }
  }
}
</script>

<style scoped>
  .timepicker span{
    width: 100%;
  }
</style>
