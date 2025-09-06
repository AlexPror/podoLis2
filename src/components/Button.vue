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
  border-radius: 2rem;
  box-shadow: 0 5px 0 #9b400b;
  color: $white;
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 1px;
  outline: none;
  padding: 1rem 1.3rem 0.9rem;
  text-transform: uppercase;
  transition: $transition-base;
  white-space: nowrap;
  text-align: center;
  display: inline-block;

  @media (width <= 768px) {
    font-size: 0.8rem;
    padding: 0.9rem 1.1rem 0.8rem;
  }

  @media (width <= 480px) {
    font-size: 0.75rem;
    padding: 0.8rem 1rem 0.7rem;
    letter-spacing: 0.5px;
  }

  &:hover {
    box-shadow: 0 5px 0 transparent;
    transform: translateY(-5px);
  }

  &:active {
    transform: translateY(0);
  }

  &--small {
    box-shadow: 0 2px 0 #9b400b;
    font-size: 0.8rem;
    padding: 0.5rem 1rem;

    @media (width <= 768px) {
      font-size: 0.75rem;
      padding: 0.4rem 0.8rem;
    }

    @media (width <= 480px) {
      font-size: 0.7rem;
      padding: 0.35rem 0.7rem;
    }

    &:hover {
      transform: translateY(-2px);
    }
  }

  &--large {
    font-size: 1.2rem;
    padding: 1.2rem 2rem;

    @media (width <= 768px) {
      font-size: 1rem;
      padding: 1rem 1.5rem;
    }

    @media (width <= 480px) {
      font-size: 0.9rem;
      padding: 0.9rem 1.2rem;
    }
  }

  &--primary {
    background-color: $primary-color;
  }

  &--secondary {
    background-color: #918b8b;
    box-shadow: 0 5px 0 #5c5858;
  }
}
</style>
