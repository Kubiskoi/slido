<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">All events</router-link>
      <router-link to="/add">Add event</router-link>
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
