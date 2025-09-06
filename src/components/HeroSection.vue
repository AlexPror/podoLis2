<script setup lang="ts">
import { useRouter } from 'vue-router'
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
      <div class="hero-section__bg"></div>
      <slot />
      <div class="hero-section__overlay" />
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
  color: #4e4b46;
  display: flex;
  flex-direction: column;
  height: 100vh;
  min-height: 600px;
  justify-content: center;
  overflow: hidden;
  position: relative;

  @media (width <= 768px) {
    height: 100vh;
    min-height: 500px;
    justify-content: flex-end;
    padding-bottom: 3rem;
  }

  @media (width <= 480px) {
    min-height: 450px;
    padding-bottom: 2rem;
  }
}

.hero-section__bg {
  background: url('@/assets/images/alisa-anna.jpg') 0 0 repeat;
  background-position: right center;
  background-repeat: no-repeat;
  background-size: cover;
  inset: 0;
  position: absolute;
  z-index: 0;

  @media (width <= 768px) {
    background-position: center 20%;
    background-size: cover;
  }
}

.hero-section__overlay {
  background: rgba(#515c5b, 50%) url('@/assets/images/pattern.png') 0 0 repeat;
  inset: 0;
  pointer-events: none;
  position: absolute;
}

.hero-section__content {
  color: $white;
  position: relative;
  z-index: 5;
  max-width: 600px;

  @media (width <= 768px) {
    max-width: 100%;
    text-align: center;
    padding: 0 1rem;
  }
}

.hero-section__title {
  font-weight: 700;
  font-size: clamp(2rem, 5vw, 3.5rem);
  line-height: 1.2;
  margin-bottom: 1rem;

  @media (width <= 768px) {
    font-size: clamp(1.8rem, 8vw, 2.5rem);
  }
}

.hero-section__descr {
  font-size: clamp(1.1rem, 3vw, 1.5rem);
  margin-bottom: 3rem;
  margin-top: 1rem;
  line-height: 1.4;

  @media (width <= 768px) {
    font-size: clamp(1rem, 4vw, 1.3rem);
    margin-bottom: 2rem;
  }
}

.footer-block {
  @media (width <= 768px) {
    display: flex;
    justify-content: center;
  }
}
</style>
