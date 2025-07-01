<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
console.log(route)
const isHome = computed(() => {
  return true ?
})
</script>

<template>
  <div class="logo">
    <img class="logo__img" src="../assets/images/logo.svg" alt="" />{{ isHome }}
  </div>
</template>

<style lang="scss" scoped>
.logo {
  max-width: 300px;
}
</style>
