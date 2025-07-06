<script setup lang="ts">
import HeaderNav from './HeaderNav.vue'
import AppLogo from './AppLogo.vue'
import Container from './Container.vue'
import SocialIcons from './SocialIcons.vue'
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
    </Container>
  </header>
</template>

<style scoped lang="scss">
.header {
  background-color: $white;
  padding: 1rem 20px;
}

.header__container {
  align-items: center;
  display: flex;
}

.header__nav {
  margin-left: auto;
  margin-right: auto;
}

.header__wrap {
  align-items: center;
  display: flex;
  gap: 40px;
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
</style>
