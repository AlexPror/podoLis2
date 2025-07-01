<script setup lang="ts">
import Container from './Container.vue'

const openWhatsApp = () => {
  window.open('https://wa.me/79533217582', '_blank')
}
</script>

<template>
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
</template>

<style scoped lang="scss">
.contacts {
  align-items: center;
  color: #333;
  display: flex;
  flex-wrap: wrap;
  font-size: 20px;
  justify-content: center;
  padding: 75px 0 60px;

  &__info {
    flex: 1 1 300px;
  }

  &__title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  &__phones {
    margin-bottom: 15px;
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
    margin-bottom: 15px;
  }

  &__whatsapp {
    margin-bottom: 15px;

    &-link {
      background-color: #f0f0f0;
      border-radius: 6px;
      box-shadow: none;
      padding: 5px 10px;
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
    margin-bottom: 15px;
  }

  &__map {
    border-radius: 8px;
    flex: 1 1 280px;
    height: 571px;
    max-height: 571px;
    min-height: 571px;
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
  }

  .contacts__map {
    min-height: 250px;
    width: 100%;
  }
}
</style>
