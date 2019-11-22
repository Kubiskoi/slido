<template>
  <div>
    <div class="fixed w-full shadow bg-gray-100">
      <div class="container m-auto px-4 py-4">
        <nav class="flex justify-between">
          <router-link :to="{ name: 'events'}" class="text-xl text-gray-600"><span class="font-thin">ALL</span> Events</router-link>
          <div>
            <router-link :to="{ name: 'add-event'}" class="flex h-full items-center px-4 bg-green-600 text-white text-sm leading-none">Add Event</router-link>
          </div>
        </nav>
      </div>
    </div>
    <transition name="fade" mode="out-in">
      <router-view class="container px-6 mx-auto pt-20"/>
    </transition>
  </div>
</template>

<script>
import '@/assets/css/main.css'
import 'pikaday/css/pikaday.css'
import 'vue2-timepicker/dist/VueTimepicker.css'

export default {
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
