<template>
  <!-- <HomeTemplate /> -->
  <div class="count">
    <h1> {{ $count }}</h1>
    <h2 @click="increment()">Incrementar</h2>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'ibook',
})
</script>

<style lang="scss" scoped></style>
