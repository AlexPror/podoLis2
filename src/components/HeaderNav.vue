<script setup lang="ts">
const links = [
  { name: 'Главная', href: '#home' },
  { name: 'О нас', href: '#about' },
  { name: 'Прайс услуг', href: '#price' },
  { name: 'Контакты', href: '#contacts' },
]
</script>

<template>
  <nav class="header-nav">
    <a v-for="link in links" :key="link.name" class="header-nav__link" :href="link.href">
      {{ link.name }}
    </a>
  </nav>
</template>

<style scoped lang="scss">
.header-nav {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    background-color: #000000cc;
    position: fixed;
    top: 60px;
    right: 0;
    width: 100%;
    max-height: calc(100vh - 60px);
    overflow-y: auto;
    z-index: 1000;
  }
}

.header-nav__link {
  font-weight: 500;
  text-transform: uppercase;
  color: $white;
  font-size: 20px;
  padding: 2rem 1.5rem;
  text-decoration: none;
  transition: $transition-base;

  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
    font-size: 18px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
}

.header-nav__link:hover {
  color: $primary-color;
}
</style>
