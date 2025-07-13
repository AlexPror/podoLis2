<template>
  <div class="container">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.container {
  margin: 0 auto;
  max-width: 1680px;
  padding: 0 1rem;
  width: 100%;
}

.footer-container {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: space-between;
  margin: 0 auto 30px;
}
</style>
