<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ name: 'events'}">All events</router-link>
      <router-link :to="{ name: 'add-event'}">Add event</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import '@/assets/css/main.css'

export default {
}
</script>

<style>
</style>
