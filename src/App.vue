<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>

<template>
  <div class="app">
    <AppHeader class="app__header" />
    <main class="app__main">
      <RouterView v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component" />
        </transition>
      </RouterView>
    </main>
    <AppFooter class="app__footer" />
  </div>
</template>

<style lang="scss" scoped>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.app__header,
.app__footer {
  flex: 0;
}

.app__main {
  flex: 1 0 auto;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .25s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
