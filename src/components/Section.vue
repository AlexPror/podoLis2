<template>
  <section
    :class="sectionClasses"
  >
    <slot />
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';

// Используем defineProps для получения пропсов
const props = defineProps<{
  isGray?: boolean;
}>();

// Вычисляем класс секции для цвета фона
const sectionClasses = computed(() => ([
  'section',
  {
    'bg-gray': props.isGray,
    'bg-white': !props.isGray,
  }
]));
</script>

<style lang="scss" scoped>
.section {
  padding-bottom: 7rem;
  padding-top: 7rem;
}

.bg-gray {
  background-color: #eee;
}
</style>
