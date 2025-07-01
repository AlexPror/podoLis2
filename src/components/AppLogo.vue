<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
const route = useRoute()
console.log(route);

const isHome = computed(() => {
  return route.name === 'home'
})

</script>

<template>
  <component class="logo" :is="isHome ? 'div' : RouterLink">
    <img class="logo__img" src="../assets/images/logo2.svg" alt="" />
  </component>
</template>

<style lang="scss" scoped>
.logo {
  max-width: 300px;
}
</style>
