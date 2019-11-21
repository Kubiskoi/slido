<template>
    <div>
        <div class="max-w-sm mx-auto">
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
                <div class="sm:flex sm:justify-between">
                    <div class="mb-4 sm:w-5/12">
                        <pikaday
                            v-model="eveDate"
                            placeholder="Date"
                            class="appearance-none bg-transparent w-full text-gray-700 py-1 px-2 leading-tight border-b-2 focus:outline-none"
                            :class="{ 'border-red-600': $v.eveDate.$error, 'border-green-600': !$v.eveDate.$error}"></pikaday>
                    </div>
                    <div class="mb-4 sm:w-5/12">
                        <vue-timepicker
                            placeholder="Time"
                            class="tp-wrap"
                            :input-class="tp"
                            v-model="eveTime"
                            close-on-complete></vue-timepicker>
                    </div>
                </div>
                <div class="mb-4">
                    <textarea
                        placeholder="Description"
                        v-model="eveDesc"
                        class="desc appearance-none bg-transparent w-full text-gray-700 py-1 px-2 leading-tight border-b-2 focus:outline-none"
                        :class="{ 'border-red-600': $v.eveDesc.$error, 'border-green-600': !$v.eveDesc.$error}"
                        cols="30"
                        rows="4"></textarea>
                </div>
                <div class="flex sm:justify-center">
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
      eveTime: '',
      eveDesc: ''
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
        return 'tp tp-error'
      } else {
        return 'tp tp-ok'
      }
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
          date: this.eveDate,
          time: this.eveTime,
          desc: this.eveDesc
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
