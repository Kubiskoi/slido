import Vue from 'vue'
import Vuex from 'vuex'
import getTimeStamp from '../helpers/TimeStampSeconds'
import events from './events'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    events
  },
  getters: {
    upcomingEvents: state => {
      const now = getTimeStamp()
      return state.events.filter((event) => {
        return event.ts > now
      })
    },
    pastEvents: state => {
      const now = getTimeStamp()
      return state.events.filter((event) => {
        return event.ts <= now
      })
    }
  },
  mutations: {
    storeEvent (state, event) {
      state.events.push(event)
    }
  },
  actions: {
    saveEvent ({ commit }, event) {
      commit('storeEvent', event)
    }
  },
  modules: {
  }
})
