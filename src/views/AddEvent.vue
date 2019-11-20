<template>
    <div class="container px-6 mx-auto">
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
