<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import Button from '@/components/Button.vue'
// import about3 from '@/assets/images/about3.jpg'
// import about5 from '@/assets/images/about5.jpg'
import about6 from '@/assets/images/about6.jpg'
import about7 from '@/assets/images/about7.jpg'
import about8 from '@/assets/images/about8.jpg'
import about9 from '@/assets/images/about9.jpg'
import about10 from '@/assets/images/about10.jpg'
import about11 from '@/assets/images/about11.jpg'
// import Container from '@/components/Container.vue'
import Section from '@/components/Section.vue'

const slides = [about7, about6, about8, about9, about10, about11]
const currentSlide = ref(0)

let timer: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  timer = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % slides.length
  }, 3000)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})

const router = useRouter()

const goToContactsSection = async () => {
  await router.push({ path: '/contacts', hash: '#contacts' })
  // Скролл выполнит роутер через scrollBehavior (см. ниже)
}
</script>

<template>
  <section class="about-section" id="about">
    <div
      class="about-section__bg"
      :style="{ backgroundImage: `url(${slides[currentSlide]})` }"
    ></div>
    <div class="about-section__overlay"></div>
    <div class="about-section__content">
      <h2 class="about-section__title">
        Кабинет подологии «Подоли́с»: здоровье и комфорт ваших ног
      </h2>
      <div class="about-section__address-label">Наш адрес:</div>
      <div class="about-section__address-text">
        г. Калуга, ул. Воронина 3, офис 104, первый этаж
      </div>
      <div class="about-section__address-text">Мы работаем ежедневно с 9 до 20 часов</div>
      <div class="footer-block block-price">
        <Button class="footer-link" @click="goToContactsSection" aria-label="Контакты">
          Контакты
        </Button>
      </div>
    </div>
  </section>
  <Section class="specialisation" is-gray>
    <h3 class="specialisation__title">Центр специализируется на подологии</h3>
    <div class="specialisation__text">
      <p class="specialisation__paragraph">
        <strong class="specialisation__name">Подология</strong> — медицинская дисциплина,
        занимающаяся уходом за стопами, профилактикой заболеваний и коррекцией нарушений ногтей. Она
        помогает поддерживать здоровье стоп и решать проблемы кожи и ногтей.
      </p>
      <p class="specialisation__paragraph">
        <strong class="specialisation__name">Подолог</strong> — квалифицированный специалист с
        современными методами восстановления повреждённых ногтей и лечения кожи стоп. Он не только
        устраняет существующие проблемы, но и предотвращает их появление в будущем.
      </p>
    </div>
  </Section>
  <section class="podology-issues">
    <h2 class="podology-issues__title">Распространённые проблемы и их лечение</h2>
    <ul class="podology-issues__list">
      <li class="podology-issues__item">
        <div class="podology-issues__number">1</div>
        <div>
          <h3 class="podology-issues__subtitle">Вросший ноготь</h3>
          <p class="podology-issues__text">
            При вросшем ногте, особенно если нагноение отсутствует, рекомендуется обратиться к
            подологу для эффективного лечения и предотвращения дальнейших осложнений. Подолог
            специализируется на консервативных методах терапии, которые позволяют решить проблему
            без хирургического вмешательства.
          </p>
        </div>
      </li>
      <li class="podology-issues__item">
        <div class="podology-issues__number">2</div>
        <div>
          <h3 class="podology-issues__subtitle">Грибок ногтей</h3>
          <p class="podology-issues__text">
            Подолог профессионально удаляет поражённые участки ногтевой пластины, что значительно
            повышает эффективность противогрибковой терапии и способствует быстрому восстановлению.
          </p>
        </div>
      </li>
      <li class="podology-issues__item">
        <div class="podology-issues__number">3</div>
        <div>
          <h3 class="podology-issues__subtitle">Гиперкератоз</h3>
          <p class="podology-issues__text">
            Утолщения кожи, часто возникающие в следствии неправильно подобранной обуви, различных
            патологических изменений кожи и многое другое. Для выявления причины гиперкератоза лучше
            проконсультироваться с подологом.
          </p>
        </div>
      </li>
      <li class="podology-issues__item">
        <div class="podology-issues__number">4</div>
        <div>
          <h3 class="podology-issues__subtitle">Трещины на стопах</h3>
          <p class="podology-issues__text">
            Эта проблема связана с чрезмерной сухостью кожи и неправильно подобранным уходом,
            обычный педикюр не всегда помогает. Подологический педикюр позволяет быстро и эффективно
            восстановить ваши стопы.
          </p>
        </div>
      </li>
      <li class="podology-issues__item">
        <div class="podology-issues__number">5</div>
        <div>
          <h3 class="podology-issues__subtitle">Стержневые мозоли</h3>
          <p class="podology-issues__text">
            Только квалифицированный подолог способен правильно обработать ороговевшие участки кожи
            и, при необходимости, применить разгрузочную повязку для облегчения боли и ускорения
            заживления.
          </p>
        </div>
      </li>
      <li class="podology-issues__item">
        <div class="podology-issues__number">6</div>
        <div>
          <h3 class="podology-issues__subtitle">Диабетические стопы</h3>
          <p class="podology-issues__text">
            Клиентам с диабетом требуется особенно бережный уход и применение специализированной
            космецевтики, которая улучшает состояние кожи, помогает бороться с трещинами и
            изменениями ногтей, снижая риск осложнений.
          </p>
        </div>
      </li>
    </ul>
  </section>
</template>

<style scoped lang="scss">
.about-section {
  box-sizing: border-box;
  height: 100vh;
  overflow: hidden;
  position: relative;
  user-select: none;
}

.about-section__bg {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  inset: 0;
  position: absolute;
  z-index: 0;
}

.about-section__overlay {
  background-color: rgb(0 0 0 / 40%);
  inset: 0;
  pointer-events: none;
  position: absolute;
  z-index: 1;
}

.about-section__content {
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
}

@media (width <= 768px) {
  .about-section__content {
    font-size: 16px;
    gap: 16px;
    max-width: 350px;
    padding: 0 15px;
    width: 90%;
  }
}

@media (width <= 400px) {
  .about-section__content {
    font-size: 14px;
    gap: 12px;
  }
}

.about-section__title {
  color: white;
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 50px;
  text-shadow: 0 0 8px rgb(0 0 0 / 70%);
}

@media (width <= 768px) {
  .about-section__title {
    font-size: 22px;
  }
}

@media (width <= 400px) {
  .about-section__title {
    font-size: 18px;
  }
}

/* --------------------------------- */

.specialisation {
  color: #333;
  line-height: 1.55;
  margin: 40px auto;
  max-width: 800px;
  padding: 2rem 4rem;
  text-align: left;
}

.specialisation__title {
  font-size: 20px;
  margin-bottom: 1.25rem;
}

.specialisation__paragraph {
  margin-bottom: 1.25rem;
}

.specialisation__name {
  color: $primary-color;
  font-weight: 700;
}

@media (width <= 768px) {
  .specialisation {
    max-width: 100%;
    padding: 0 15px;
  }

  .specialisation__title {
    font-size: 20px;
  }

  .specialisation__paragraph {
    font-size: 14px;
  }
}

/* --------------------------------- */

.podology-issues {
  margin: 0 auto;
  max-width: 800px;
  padding: 2rem 1rem;
}

.podology-issues__title {
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 0.05em;
  margin-bottom: 2rem;
  text-align: center;
}

.podology-issues__subtitle {
  color: #333;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.05em;
  margin: 0 0 0.5rem;
}

.podology-issues__list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.podology-issues__item {
  align-items: flex-start;
  display: flex;
  gap: 1rem;
  margin-bottom: 1.8rem;
}

.podology-issues__number {
  align-items: center;
  background-color: #f60; /* оранжевый */
  border-radius: 50%;
  color: #fff;
  display: flex;
  flex-shrink: 0;
  font-size: 18px;
  font-weight: 700;
  height: 36px;
  justify-content: center;
  letter-spacing: 0.1em;
  user-select: none;
  width: 36px;
}

.podology-issues__text {
  color: #333;
  font-size: 16px;
  letter-spacing: 0.03em;
  line-height: 1.6;
  margin: 0;
}

/* Адаптив */
@media (width <= 768px) {
  .podology-issues__title {
    font-size: 24px;
  }

  .podology-issues__text {
    font-size: 15px;
  }
}

@media (width <= 400px) {
  .podology-issues__title {
    font-size: 20px;
  }

  .podology-issues__text {
    font-size: 14px;
  }
}
</style>
