<script setup lang="ts">
import HeaderNav from './HeaderNav.vue'
import AppLogo from './AppLogo.vue'
import Container from './Container.vue'
import SocialIcons from './SocialIcons.vue'
import { ref } from 'vue'

const isMobileMenuVisible = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuVisible.value = !isMobileMenuVisible.value
}
</script>

<template>
  <header class="header">
    <Container class="header__container">
      <AppLogo />
      <HeaderNav class="header__nav" />
      <div class="header__wrap">
        <SocialIcons />
        <div class="header__actions">
          <a href="tel:+79533217582" class="header__phone"> +7 953 321-75-82 </a>
          <a href="tel:+79141726408" class="header__phone"> +7 914 172-64-08 </a>
        </div>
      </div>
      <div :class="['header-mobile-menu-toggle', { 'active': isMobileMenuVisible }]" @click="toggleMobileMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div :class="['mobile-menu', { 'mobile-menu--active': isMobileMenuVisible }]">
        Я мобильное меню, юхууу

        <div :class="['header-mobile-menu-toggle', { 'active': isMobileMenuVisible }]" @click="toggleMobileMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </Container>
  </header>
</template>

<style scoped lang="scss">
.header {
  background-color: $white;
  padding: 1rem 0;
}

.header__container {
  align-items: center;
  display: flex;

  @media (width <= 992px) {
    justify-content: space-between;
  }
}

.header__nav {
  margin-left: auto;
  margin-right: auto;

  @media (width <= 992px) {
    display: none;
  }
}

.header__wrap {
  align-items: center;
  display: flex;
  gap: 40px;

  @media (width <= 992px) {
    display: none;
  }
}

// Phone
.header__phone {
  font-size: 1.15rem;
  font-weight: 600;
  letter-spacing: 1px;

  &:hover {
    color: $primary-color;
  }
}

.header__actions {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

/* Базовые стили для контейнера */
.header-mobile-menu-toggle {
  cursor: pointer;
  display: none;
  flex-direction: column;
  height: 24px;
  justify-content: space-between;
  position: relative;
  width: 30px;

  @media (width <= 992px) {
    display: flex;
  }
}

/* Общие стили для линий */
.header-mobile-menu-toggle span {
  background-color: #000;
  border-radius: 2px;
  display: block;
  height: 4px;
  transform-origin: center;
  transition: $transition-base;
  width: 100%;

  .mobile-menu & {
    background-color: $white;
  }
}

.header-mobile-menu-toggle.active span:nth-child(1) {
  transform: translateY(10px) rotate(45deg);
}

.header-mobile-menu-toggle.active span:nth-child(2) {
  opacity: 0;
}

.header-mobile-menu-toggle.active span:nth-child(3) {
  transform: translateY(-10px) rotate(-45deg);
}

.mobile-menu {
  background-color: $black;
  bottom: 0;
  color: $white;
  padding: 1rem;
  position: fixed;
  right: 0;
  top: 0;
  transform: translateX(100%);
  transition: $transition-base;
  width: 320px;
  z-index: 2000;
}

.mobile-menu--active {
  transform: translateX(0);
}
</style>
