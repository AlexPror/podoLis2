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

      <div 
        :class="['mobile-menu-overlay', { 'mobile-menu-overlay--active': isMobileMenuVisible }]" 
        @click="toggleMobileMenu"
      ></div>

      <div :class="['mobile-menu', { 'mobile-menu--active': isMobileMenuVisible }]">
        <div class="mobile-menu__header">
          <div class="mobile-menu__logo">
            <AppLogo />
          </div>
          <div :class="['header-mobile-menu-toggle', { 'active': isMobileMenuVisible }]" @click="toggleMobileMenu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        
        <nav class="mobile-menu__nav">
          <RouterLink 
            v-for="link in [
              { name: 'Главная', href: '/' },
              { name: 'О нас', href: '/about' },
              { name: 'Прайс услуг', href: '/#price' },
              { name: 'Контакты', href: '/#contacts' }
            ]" 
            :key="link.name" 
            class="mobile-menu__link" 
            :to="link.href"
            @click="toggleMobileMenu"
          >
            {{ link.name }}
          </RouterLink>
        </nav>

        <div class="mobile-menu__contacts">
          <div class="mobile-menu__phones">
            <a href="tel:+79533217582" class="mobile-menu__phone"> +7 953 321-75-82 </a>
            <a href="tel:+79141726408" class="mobile-menu__phone"> +7 914 172-64-08 </a>
          </div>
          <SocialIcons class="mobile-menu__social" />
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
  z-index: 2001;

  @media (width <= 992px) {
    display: flex;
  }

  .mobile-menu & {
    z-index: 2002;
  }
}

.mobile-menu-overlay {
  background-color: rgba(0, 0, 0, 0.5);
  bottom: 0;
  left: 0;
  opacity: 0;
  position: fixed;
  right: 0;
  top: 0;
  transition: opacity 0.3s ease-in-out;
  visibility: hidden;
  z-index: 1999;

  &.mobile-menu-overlay--active {
    opacity: 1;
    visibility: visible;
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
  display: flex;
  flex-direction: column;
  padding: 2rem 1.5rem;
  position: fixed;
  right: 0;
  top: 0;
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;
  width: 100%;
  max-width: 380px;
  z-index: 2000;
  overflow-y: auto;

  @media (width <= 480px) {
    width: 100%;
    max-width: none;
    padding: 1.5rem 1rem;
  }
}

.mobile-menu--active {
  transform: translateX(0);
}

.mobile-menu__header {
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.mobile-menu__logo {
  opacity: 0.9;
}

.mobile-menu__nav {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.mobile-menu__link {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  color: $white;
  display: block;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 1rem 0;
  text-decoration: none;
  text-transform: uppercase;
  transition: color 0.3s ease;

  &:hover,
  &:focus {
    color: $primary-color;
    outline: none;
  }
}

.mobile-menu__contacts {
  margin-top: auto;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.mobile-menu__phones {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.mobile-menu__phone {
  color: $white;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover,
  &:focus {
    color: $primary-color;
    outline: none;
  }
}

.mobile-menu__social {
  justify-content: center;
}
</style>
