import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    events: []
  },
  getters: {
    upcomingEvents: state => {
      return state.events
    }
  },
  mutations: {
    storeEvent (state, event) {
      console.log(event)
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
