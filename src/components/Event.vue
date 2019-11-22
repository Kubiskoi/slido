<template>
    <div class="mb-4 flex">
        <div>
            <div>{{eventData.date}}</div>
            <div>{{eventData.time}}</div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    eventData: Object
  }
}
</script>

<style>

</style>
