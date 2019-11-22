<template>
    <div>
        <router-link
            :to="{ name: 'events'}"
            class="capitalize font-hairline text-gray-500 hover:underline leading-none">back</router-link>
        <h1 class="text-xl capitalize text-gray-600 md:text-center mt-6 mb-4">add event</h1>
        <AddOrEditEvent/>
    </div>
</template>

<script>
import AddOrEditEvent from '@/components/AddOrEditEvent.vue'

export default {
  components: {
    AddOrEditEvent
  }
}
</script>
