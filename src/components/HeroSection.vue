<script setup lang="ts">
import { useRouter } from 'vue-router'
import backgroundHeroSection from '@/assets/images/alisa-top-master.jpg'
import Button from '@/components/Button.vue'
import Container from './Container.vue'

const router = useRouter()

const scrollToSection = (id: string) => {
  console.log(id)

  const el = document.getElementById(id)
  console.log(el)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

const goToAbout = () => {
  router.push('/about')
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
        <h1 class="hero-section__title">Здоровье ваших ног — наша забота</h1>
        <div class="hero-section__descr">Многолетний опыт и искренняя забота для ваших ног</div>
        <div class="footer-block block-price">
          <Button class="footer-link" @click="goToAbout"> Узнать о нас больше </Button>
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
  height: 100vh;
  justify-content: center;
  overflow: hidden;
  position: relative;
  user-select: none;
}

.hero-section__background {
  background-position: right center;
  background-repeat: no-repeat;
  background-size: cover;
  inset: 0;
  position: absolute;
  z-index: 0;
}

.hero-section__overlay {
  background-color: rgba(#3f3834, 70%);
  inset: 0;
  pointer-events: none;
  position: absolute;
}

.hero-section__content {
  position: relative;
  z-index: 2;
  // text-align: left; /* текст слева */
  // max-width: 50%;
}

.hero-section__descr {
  font-size: 1.25rem;
  margin-bottom: 2rem;
}
</style>
