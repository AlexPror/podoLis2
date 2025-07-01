<script setup lang="ts">
const scrollToForm = () => {
  const formSection = document.getElementById('formsection')
  console.log(formSection)
  if (formSection) formSection.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <button type="button" class="call-button" @click="scrollToForm">Записаться на прием</button>
</template>

<style scoped lang="scss">
.call-button {
  background-color: $primary-color;
  border: none;
  color: $white;
  cursor: pointer;
  font-size: 20px;
  font-weight: 500;
  line-height: 125%;
  padding: 10px 50px;
  text-transform: uppercase;
}

.call-button:hover {
  background-color: #d94e2b;
}
</style>
