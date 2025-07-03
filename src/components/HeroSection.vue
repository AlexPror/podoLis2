<script setup lang="ts">
import backgroundHeroSection from '@/assets/images/backgroundHeroSection.jpg'
import Button from '@/components/Button.vue'
import Container from './Container.vue'

// const scrollToContact = () => {
//   console.log('привет')
//   const contactSection = document.getElementById('hero')
//   console.log('hero')
//   if (contactSection) {
//     contactSection.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
//   }
// }

const scrollToSection = (id: string) => {
  console.log(id)

  const el = document.getElementById(id)
  console.log(el)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section class="hero-section" id="hero">
    <Container>
      <div
        class="hero-section__background"
        :style="{ backgroundImage: `url(${backgroundHeroSection})` }"
      ></div>
      <slot />
      <div class="hero-section__overlay"></div>
      <div class="hero-section__content">
        <h1 class="hero-section__title">
          Здоровье ваших ног — наша забота
        </h1>
        <div class="hero-section__descr">
          Многолетний опыт и искренняя забота для ваших ног
        </div>
        <div class="footer-block block-price">
          <Button class="footer-link" @click="scrollToSection('contacts')">
            Узнать о нас больше
          </Button>
        </div>
      </div>
    </Container>
  </section>
</template>

<style scoped lang="scss">
.hero-section {
  color: $white;
  display: flex;
  flex-direction: column;
  height: 90vh;
  justify-content: center;
  overflow: hidden;
  position: relative;
  user-select: none;

  &__background {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    inset: 0;
    position: absolute;
    z-index: 0;
  }

  &__overlay {
    background-color: rgba(#3f3834, 70%);
    inset: 0;
    pointer-events: none;
    position: absolute;
  }

  &__content {
    position: relative;
    z-index: 2;
  }

  // &__button {
  //   padding: 12px 30px;
  //   background-color: #ff6600;
  //   border: none;
  //   border-radius: 6px;
  //   color: white;
  //   font-weight: 700;
  //   font-size: 18px;
  //   cursor: pointer;
  //   transition:
  //     background-color 0.3s ease,
  //     box-shadow 0.3s ease;
  //   user-select: none;
  //   box-shadow: 0 4px 10px rgba(255, 102, 0, 0.4);

  //   &:hover,
  //   &:focus {
  //     background-color: #e05500;
  //     box-shadow: 0 6px 14px rgba(224, 85, 0, 0.6);
  //     outline: none;
  //   }

  //   @media (max-width: 768px) {
  //     font-size: 16px;
  //     padding: 10px 24px;
  //   }

  //   @media (max-width: 400px) {
  //     font-size: 14px;
  //     padding: 8px 20px;
  //   }
  // }
}

.hero-section__descr {
  font-size: 1.25rem;
  margin-bottom: 2rem;
}
</style>
