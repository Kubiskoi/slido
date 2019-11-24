<template>
    <div>
        <div @click="$router.go(-1)" class="capitalize font-hairline text-gray-500 cursor-pointer leading-none hover:underline">back</div>
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
