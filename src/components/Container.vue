<template>
  <div class="container">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.container {
  margin: 0 auto;
  max-width: 100%;
  padding: 0 1rem;
}

.footer-container {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: space-between;
  margin: 0 auto 30px;
}
</style>
