import Vue from 'vue'
import Vuex from 'vuex'
import getTimeStamp from '@/helpers/TimeStampSeconds'
import events from './events'
import findIndex from '@/helpers/FindIndex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    events,
    showAddButton: true
  },
  getters: {
    eventDetail: state => {
      return eventId => {
        return state.events.find(event => event.eventId === eventId)
      }
    },
    upcomingEvents: state => {
      const now = getTimeStamp()
      return state.events.filter((event) => {
        return event.ts > now
      })
    },
    pastEvents: state => {
      const now = getTimeStamp()
      return state.events.filter((event) => {
        return event.ts < now
      })
    },
    addButtonVisibility: state => {
      return state.showAddButton
    }
  },
  mutations: {
    storeEvent (state, newEvent) {
      state.events.push(newEvent)
    },
    updateEvent (state, editedEvent) {
      const index = findIndex(state.events, editedEvent.eventId)

      state.events[index].title = editedEvent.title
      state.events[index].entry = editedEvent.entry
      state.events[index].desc = editedEvent.desc
      state.events[index].ts = editedEvent.ts
    },
    removeEvent (state, eventId) {
      const index = findIndex(state.events, eventId)
      state.events.splice(index, 1)
    },
    toggleAddButton (state) {
      state.showAddButton = !state.showAddButton
    }
  },
  actions: {
    saveEvent ({ commit }, newEvent) {
      commit('storeEvent', newEvent)
    },
    updateEvent ({ commit }, editedEvent) {
      commit('updateEvent', editedEvent)
    },
    deleteEvent ({ commit }, eventId) {
      commit('removeEvent', eventId)
    },
    toggleAddButton ({ commit }) {
      commit('toggleAddButton')
    }
  },
  modules: {
  }
})
