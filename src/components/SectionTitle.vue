<template>
    <div>
        <div @click="$router.go(-1)" class="capitalize font-light text-gray-600 cursor-pointer leading-none hover:underline">back</div>
        <h1 class="text-xl capitalize text-gray-600 mt-6 mb-4">{{title}}</h1>
    </div>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>

<style>
</style>
