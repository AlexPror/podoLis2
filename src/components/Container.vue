<template>
  <div class="container">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.container {
  max-width: 1680px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-container {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin: 0 auto 30px;
  justify-content: space-between;
}
</style>
