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
        <div class="header__social">
          <SocialIcons />
        </div>
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
  color: $white;
  background-color: rgba($white, 0.2);
  padding: 0 20px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
}

.header__container {
  display: flex;
  align-items: center;
}

.header__nav {
  margin-left: auto;
  margin-right: auto;
}

.header__wrap {
  display: flex;
  align-items: center;
  gap: 40px;
}

.header__social {
  padding-top: 10px;
}

// Phone
.header__phone {
  font-family: $base-font;
  font-size: 20px;
  letter-spacing: 1px;
  color: $white;
  text-decoration: none;

  &:hover {
    color: $primary-color;
  }
}

.header__actions {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

// Action Button
// .header__button {
//   padding: 8px 16px;
//   background-color: $primary-color;
//   border: none;
//   color: white;
//   cursor: pointer;
//   border-radius: 4px;
//   font-weight: 600;
//   transition: $transition-base;

//   &:hover {
//     background-color: #d94a1a;
//   }
// }

// .header__phone-button {
//   background-color: $primary-color;
//   border: none;
//   font-family: $base-font;
//   border-radius: 6px;
//   padding: 8px 16px;
//   font-weight: 600;
//   font-size: 16px;
//   color: white;
//   cursor: pointer;
//   transition: background-color 0.3s ease;
//   user-select: none;

//   &:hover {
//     background-color: #d94a1a;
//   }
// }
</style>
