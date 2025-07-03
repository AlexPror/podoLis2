<script setup lang="ts">
const links = [
  { name: 'Главная', href: '/' },
  { name: 'О нас', href: '/about' },
  { name: 'Прайс услуг', href: '/#price' },
  { name: 'Контакты', href: '#contacts' },
  { name: 'Мда-страница', href: '/mda' },
]
</script>

<template>
  <nav class="header-nav">
    <RouterLink v-for="link in links" :key="link.name" class="header-nav__link" :to="link.href">
      {{ link.name }}
    </RouterLink>
  </nav>
</template>

<style scoped lang="scss">
.header-nav {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (width <= 768px) {
    background-color: #000c;
    flex-direction: column;
    max-height: calc(100vh - 60px);
    overflow-y: auto;
    position: fixed;
    right: 0;
    top: 60px;
    width: 100%;
    z-index: 1000;
  }
}

.header-nav__link {
  border-bottom: 1px solid $link-color;
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: $transition-base;

  @media (width <= 768px) {
    border-bottom: 1px solid rgb(255 255 255 / 10%);
    font-size: 18px;
    padding: 1rem 1.5rem;
  }

  &:hover {
    border-bottom-color: transparent;
    color: $primary-color;
  }
}
</style>
