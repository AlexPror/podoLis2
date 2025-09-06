<template>
  <div class="container">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.container {
  margin: 0 auto;
  padding: 0 1rem;
  max-width: 1680px;
  width: 100%;

  @media (width <= 768px) {
    padding: 0 0.75rem;
  }

  @media (width <= 480px) {
    padding: 0 0.5rem;
  }
}

.footer-container {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: space-between;
  margin: 0 auto 30px;
}
</style>
