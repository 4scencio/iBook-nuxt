<template>
  <!-- <HomeTemplate /> -->
  <div class="count">
    <h1> {{ $count }}</h1>
    <h2 @click="increment()">Incrementar</h2>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { books } from '@/store'

export default Vue.extend({
  layout: 'ibook',
  computed: {
    $count() {
      return books.$count
    }
  },
  methods: {
    increment() {
      books.increment()
    }
  }
})
</script>

<style lang="scss" scoped></style>
