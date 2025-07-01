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

  font-weight: 500;
  font-size: 20px;
  line-height: 125%;
  text-transform: uppercase;
  color: $white;
  background-color: $primary-color;
  border: none;
  padding: 10px 50px;
  cursor: pointer;
}

.call-button:hover {
  background-color: #d94e2b;
}
</style>
