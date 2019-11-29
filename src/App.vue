<template>
  <div>
    <div class="fixed w-full shadow bg-gray-100 z-50">
      <div class="container m-auto px-4 py-4">
        <nav class="flex justify-between">
          <div>
            <router-link :to="{ name: 'upcoming-events'}" class="nav-link text-sm md:text-xl text-gray-600 mr-4 relative"><span class="font-light">Upcoming</span> Events</router-link>
            <router-link :to="{ name: 'past-events'}" class="nav-link text-sm md:text-xl text-gray-600 relative"><span class="font-light">Past</span> Events</router-link>
          </div>
          <transition name="fade">
            <div v-if="this.$store.getters.addButtonVisibility" class="whitespace-pre">
              <router-link :to="{ name: 'add-event'}" class="text-xs flex h-full items-center px-4 bg-green-600 hover:bg-green-700 text-white leading-none bg-transition"><span>Add</span><span class="hidden sm:inline-block">&nbsp;Event</span></router-link>
            </div>
          </transition>
        </nav>
      </div>
    </div>
    <transition name="fade" mode="out-in">
      <router-view class="router-view container px-6 mx-auto relative"/>
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
.router-view{
  top: 56px;
}

@media screen and (min-width: 768px){
  .router-view{
    top: 62px;
  }
}

.fade-enter-active,
.fade-leave-active {
  -webkit-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: opacity;
  -o-transition-property: opacity;
  transition-property: opacity;
  -webkit-transition-timing-function: ease;
  -o-transition-timing-function: ease;
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
  bottom: -3px;
  width: 100%;
  height: 2px;
  background-color: #38a169;
}

.nav-link:not(.router-link-active)::after{
  content: "";
  display: block;
  position: absolute;
  left: 0;
  bottom: -3px;
  width: 0;
  height: 2px;
  background-color: #38a169;
  -webkit-transition: width .2s;
  -o-transition: width .2s;
  transition: width .2s;
}

.nav-link:not(.router-link-active):hover::after{
  width: 100%;
}
</style>
