<script setup lang="ts">
import Container from './Container.vue'
import Section from './Section.vue';

const openWhatsApp = () => {
  window.open('https://wa.me/79533217582', '_blank')
}
</script>

<template>
  <Section>
    <Container>
      <section id="contacts" class="contacts">
        <div class="contacts__info">
          <h3 class="contacts__title">Наши контакты</h3>
          <div class="contacts__phones">
            <span class="contacts__label">Мессенджер:</span>
            <a href="tel:+79533217582" class="contacts__phone-link">+7 953 321-75-82</a>
            <br />
            <span class="contacts__label">Телефон:</span>
            <a href="tel:+79141726408" class="contacts__phone-link">+7 914 172-64-08</a>
          </div>
          <div class="contacts__worktime">Мы работаем ежедневно с 9 до 20 часов</div>
          <div class="contacts__whatsapp">
            Ссылка для записи через
            <a href="#" class="contacts__whatsapp-link" @click.prevent="openWhatsApp">WhatsApp</a>
          </div>
          <div class="contacts__address">
            Адрес: <br />
            г. Калуга, ул. Воронина 3, офис 104, первый этаж
          </div>
        </div>
        <div class="contacts__map">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Af99f5ef680cd791ac7ead01df441bc5650ec9db9e06040d6cda9a0e0ddbe1b3c&amp;source=constructor"
            frameborder="0"
            class="contacts__iframe"
          ></iframe>
        </div>
      </section>
    </Container>
  </Section>
</template>

<style scoped lang="scss">
#contacts {
  margin-top: -80px; /* Отрицательный внешний отступ компенсирует padding */
  padding-top: 80px; /* Отступ сверху равен высоте футера */
  position: relative;
  scroll-margin-top: 80px; /* Отступ при скролле (для современных браузеров) */
}

.contacts {
  align-items: flex-start; // лучше выравнивание по верхнему краю для секций разной высоты
  color: #333;
  display: flex;
  flex-wrap: wrap;
  font-size: 20px;
  justify-content: center;
  padding: 60px 0; // убрал верхний 75px, сделал симметрично сверху и снизу

  &__info {
    box-sizing: border-box;
    flex: 1 1 300px;
    padding: 0 20px 40px; // внутренние отступы справа и слева, снизу — чтобы отделить от карты
  }

  &__title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 24px; // чуть больше для визуального разделения
  }

  &__phones {
    margin-bottom: 20px; // увеличил для более комфортного чтения
  }

  &__label {
    font-weight: 600;
    margin-right: 6px;
  }

  &__phone-link,
  &__whatsapp-link {
    color: $primary-color;
    cursor: pointer;
    display: inline-block;
    transition: color 0.3s ease;
  }

  &__phone-link:focus,
  &__whatsapp-link:focus {
    outline: 2px solid #007bff;
    outline-offset: 2px;
  }

  &__phone-link:hover,
  &__whatsapp-link:hover {
    color: darken($primary-color, 10%);
  }

  &__worktime {
    margin-bottom: 20px; // увеличил для единообразия
  }

  &__whatsapp {
    margin-bottom: 20px;

    &-link {
      background-color: #f0f0f0;
      border-radius: 6px;
      box-shadow: none;
      padding: 6px 12px; // чуть больше, чтобы кнопка была удобнее
      transition:
        background-color 0.3s ease,
        color 0.3s ease;

      &:hover {
        background-color: #d9d9d9;
        color: $primary-color;
      }
    }
  }

  &__address {
    margin-bottom: 20px; // единообразный отступ
  }

  &__map {
    border-radius: 8px;
    box-sizing: border-box;
    flex: 1 1 280px;
    height: 571px;
    margin: 0 20px 40px; // добавил внешние отступы справа, слева и снизу
    overflow: hidden;
  }

  &__iframe {
    border: none;
    display: block;
    height: 100%;
    width: 100%;
  }
}

/* Адаптив */
@media (width <= 768px) {
  .contacts {
    flex-direction: column;
    padding: 40px 0; // чуть меньше отступы сверху/снизу на мобильных
  }

  .contacts__info,
  .contacts__map {
    flex: 1 1 100%;
    margin: 0 0 30px; // отступ снизу для разделения блоков
    padding: 0 15px; // внутренние отступы по бокам для мобильных
  }

  .contacts__map {
    height: 250px;
  }
}
</style>
