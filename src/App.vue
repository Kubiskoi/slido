<template>
  <div>
    <div class="fixed w-full shadow bg-gray-100">
      <div class="container m-auto px-4 py-4">
        <nav class="flex justify-between">
          <div>
            <router-link :to="{ name: 'upcoming-events'}" class="nav-link text-sm text-gray-600 mr-4 relative"><span class="font-thin">Upcomming</span> Events</router-link>
            <router-link :to="{ name: 'past-events'}" class="nav-link text-sm text-gray-600 relative"><span class="font-thin">Past</span> Events</router-link>
          </div>
          <div>
            <router-link :to="{ name: 'add-event'}" class="text-xs flex h-full items-center px-4 bg-green-600 text-white leading-none">Add<span class="hidden">Event</span></router-link>
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

.nav-link.router-link-active::after{
  content: "";
  display: block;
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 100%;
  height: 2px;
  background-color: #38a169;
}
</style>
