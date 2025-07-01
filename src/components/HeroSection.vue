<script setup lang="ts">
import backgroundHeroSection from '@/assets/images/backgroundHeroSection.jpg'
import Button from '@/components/Button.vue'

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
    <div
      class="hero-section__background"
      :style="{ backgroundImage: `url(${backgroundHeroSection})` }"
    ></div>
    <div class="hero-section__overlay"></div>
    <div class="hero-section__content">
      <p class="hero-section__address-label">Наш адрес:</p>
      <p class="hero-section__address-text">г. Калуга, ул. Воронина 3, офис 104, первый этаж</p>
      <div class="footer-block block-price">
        <Button class="footer-link" @click="scrollToSection('contacts')" aria-label="Контакты">
          Контакты
        </Button>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.hero-section {
  position: relative;
  height: 90vh;
  overflow: hidden;
  user-select: none;

  &__background {
    position: absolute;
    inset: 0;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 0;
  }

  &__overlay {
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 1;
    pointer-events: none;
  }

  &__content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-weight: 500;
    text-align: center;
    text-shadow: 0 0 6px rgba(0, 0, 0, 0.7);
    font-size: 20px;
    line-height: 1.4;
    z-index: 10;
    display: flex;
    flex-direction: column;
    gap: 25px;
    align-items: center;

    @media (max-width: 768px) {
      font-size: 16px;
      gap: 16px;
      padding: 0 15px;
      width: 90%;
      max-width: 350px;
    }

    @media (max-width: 400px) {
      font-size: 14px;
      gap: 12px;
    }
  }

  &__address-label,
  &__address-text {
    margin: 0;
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
</style>
