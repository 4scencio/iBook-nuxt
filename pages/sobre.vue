<template>
  <div class="container">
    <h1>Página Sobre :)</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      title: 'Página Sobre'
    }
  },
  head(this:any) {
    return {
      title: this.title
    }
  }
})
</script>

<style scoped>
a.nuxt-link-exact-active {
  font: bold;
  color: green;
}
</style>
