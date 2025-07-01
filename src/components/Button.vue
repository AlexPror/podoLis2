<script setup lang="ts">
import { computed, defineProps, defineEmits } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps<{
  to?: string
  size?: 'small' | 'medium' | 'large'
  theme?: 'primary' | 'secondary'
}>()

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()

const sizeClass = computed(() => {
  switch (props.size) {
    case 'small':
      return 'button--small'
    case 'large':
      return 'button--large'
    default:
      return 'button--medium'
  }
})

const themeClass = computed(() => {
  return props.theme === 'secondary' ? 'button--secondary' : 'button--primary'
})

const scrollToForm = () => {
  const formSection = document.getElementById('formsection')
  if (formSection) formSection.scrollIntoView({ behavior: 'smooth' })
}

const onClick = (event: MouseEvent) => {
  emit('click', event)
  if (!props.to) {
    scrollToForm()
  }
}
</script>

<template>
  <component
    :is="props.to ? RouterLink : 'button'"
    :to="props.to"
    type="button"
    class="button"
    :class="[sizeClass, themeClass]"
    @click="onClick"
  >
    <slot />
  </component>
</template>

<style scoped lang="scss">
.button {
  background-color: $primary-color;
  border: none;
  border-radius: 0.25rem;
  color: $white;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 1px;
  outline: none;
  padding: 0.85rem 1.5rem;
  text-transform: uppercase;
  transition: $transition-base;
  white-space: nowrap;

  &--small {
    font-size: 0.8rem;
    padding: 0.5rem 1rem;
  }

  &--large {
    font-size: 1.2rem;
    padding: 1.2rem 2rem;
  }

  &--primary {
    background-color: $primary-color;
  }

  &--secondary {
    background-color: #918b8b; /* серый цвет для secondary */
  }

  &:hover {
    opacity: 0.8;
  }
}
</style>
