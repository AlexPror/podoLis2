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
  text-transform: uppercase;
  color: $white;
  white-space: nowrap;
  cursor: pointer;
  letter-spacing: 1px;
  text-decoration: none;
  font-family: $base-font;
  font-weight: 700;
  background-color: $primary-color;
  border: none;
  border-radius: 0.25rem;
  outline: none;
  padding: 0.85rem 1.5rem;
  transition: $transition-base;
  font-size: 1rem;

  &--small {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
  }

  &--large {
    padding: 1.2rem 2rem;
    font-size: 1.2rem;
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
