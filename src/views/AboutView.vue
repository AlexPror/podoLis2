<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import Button from '@/components/Button.vue'
import about3 from '@/assets/images/about3.jpg'
import about5 from '@/assets/images/about5.jpg'
import about6 from '@/assets/images/about6.jpg'
import about7 from '@/assets/images/about7.jpg'
import about8 from '@/assets/images/about8.jpg'

const slides = [about3, about5, about6, about7, about8]
const currentSlide = ref(0)

let timer: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  timer = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % slides.length
  }, 5000)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})

const scrollToSection = (id: string) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section class="about-section" id="about">
    <div
      class="about-section__background"
      :style="{ backgroundImage: `url(${slides[currentSlide]})` }"
    ></div>
    <div class="about-section__overlay"></div>
    <div class="about-section__content">
      <h2 class="about-section__title">
        Кабинет подологии «Подолис»: здоровье и комфорт ваших ног
      </h2>
      <div class="about-section__address-label">Наш адрес:</div>
      <div class="about-section__address-text">
        г. Калуга, ул. Воронина 3, офис 104, первый этаж
      </div>
      <div class="about-section__address-text">Мы работаем ежедневно с 9 до 20 часов</div>
      <div class="footer-block block-price">
        <Button class="footer-link" @click="scrollToSection('contacts')" aria-label="Контакты">
          Контакты
        </Button>
      </div>
    </div>
  </section>
  <section class="specialisation">
    <h3 class="specialisation__title">Центр специализируется на подологии</h3>
    <div class="specialisation__text">
      <p class="specialisation__paragraph">
        <strong class="specialisation__name">Подология</strong> — это область медицины, посвящённая
        уходу за стопами, профилактике заболеваний и коррекции нарушений ногтей на ногах. Особое
        внимание уделяется как поддержанию здоровья стоп, так и решению различных проблем, связанных
        с кожей и ногтями.
      </p>
      <p class="specialisation__paragraph">
        <strong class="specialisation__name">Подолог</strong> — квалифицированный специалист,
        обладающий современными знаниями и технологиями для восстановления повреждённых или
        утраченных ногтевых пластин, а также для лечения и ухода за кожей стоп. Такой эксперт
        помогает не только устранить существующие проблемы, но и предотвратить их появление в
        будущем.
      </p>
    </div>
  </section>
</template>

<style scoped lang="scss">
.about-section {
  box-sizing: border-box;
  height: 100vh;
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
    background-color: rgb(0 0 0 / 40%);
    inset: 0;
    pointer-events: none;
    position: absolute;
    z-index: 1;
  }

  &__content {
    align-items: center;
    color: white;
    display: flex;
    flex-direction: column;
    font-size: 20px;
    font-weight: 500;
    gap: 25px;
    left: 50%;
    line-height: 1.4;
    max-width: 600px;
    padding: 0 20px;
    position: absolute;
    text-align: center;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;

    @media (width <= 768px) {
      font-size: 16px;
      gap: 16px;
      max-width: 350px;
      padding: 0 15px;
      width: 90%;
    }

    @media (width <= 400px) {
      font-size: 14px;
      gap: 12px;
    }
  }

  // &__wrapper {
  //   padding-top: 50px;
  // }

  &__title {
    color: white;
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 50px;
    text-shadow: 0 0 8px rgb(0 0 0 / 70%);

    @media (width <= 768px) {
      font-size: 22px;
    }

    @media (width <= 400px) {
      font-size: 18px;
    }
  }

  &__address-label,
  &__address-text {
    color: white;
    font-size: 14px;
    margin: 0;
  }
}

.specialisation {
  color: #333;
  margin: 40px auto;
  max-width: 800px;
  padding: 0 20px;
  text-align: left;

  &__title {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 16px;
  }

  &__text {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__paragraph {
    font-size: 16px;
    line-height: 1.5;
    margin: 0;
  }

  &__name {
    color: $primary-color;
    font-weight: 700;
  }

  @media (width <= 768px) {
    max-width: 100%;
    padding: 0 15px;

    &__title {
      font-size: 20px;
    }

    &__paragraph {
      font-size: 14px;
    }
  }
}
</style>
