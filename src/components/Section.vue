<script setup lang="ts">
import { computed } from 'vue'

// Получаем пропсы
const props = defineProps<{
  isGray?: boolean
  noPaddingBottom?: boolean
}>()

// Вычисляем классы секции
const sectionClasses = computed(() => [
  'section',
  {
    'bg-gray': props.isGray,
    'bg-white': !props.isGray,
    'no-padding-bottom': props.noPaddingBottom,
  },
])
</script>

<template>
  <section :class="sectionClasses">
    <slot />
  </section>
</template>

<style lang="scss" scoped>
.section {
  padding-top: 5rem;
  padding-bottom: 5rem;
}

.bg-gray {
  background-color: #eee;
}

/* Класс для отключения нижнего паддинга */
.no-padding-bottom {
  padding-bottom: 0 !important;
}
</style>
