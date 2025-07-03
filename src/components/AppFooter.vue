<script setup lang="ts">
import { ref } from 'vue'
import AppLogo from './AppLogo.vue'
import Container from './Container.vue'
import SocialIcons from './SocialIcons.vue'

// Функция скролла к элементу по id
const scrollToSection = (id: string) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <footer class="footer-section">
    <Container class="footer-container">
      <!-- Первый блок -->
      <div class="footer-block block-info">
        <div class="footer-logo">
          <AppLogo />
        </div>
        <SocialIcons />
        <p class="info-text">
          Материалы, размещенные на данной странице, носят информационный характер и предназначены
          для ознакомительных целей. Информация, размещенная на сайте, не является публичной
          офертой. Актуальную информацию о ценах, акциях и предложениях уточняйте по телефону.
        </p>
      </div>

      <!-- Второй блок -->
      <div class="footer-block block-price">
        <button class="footer-link" @click="scrollToSection('price')" aria-label="Прайс услуг">
          ПРАЙС УСЛУГ
        </button>
      </div>

      <!-- Третий блок -->
      <div class="footer-block block-about">
        <button class="footer-link" @click="scrollToSection('about')" aria-label="О нас">
          О НАС
        </button>
      </div>

      <!-- Четвёртый блок -->
      <div class="footer-block block-reviews">
        <h3 class="footer-title">ОТЗЫВЫ О НАШЕЙ РАБОТЕ</h3>
        <p class="reviews-text">
          Честные отзывы о нашей работе Вы можете прочитать на Yandex или 2GIS картах
        </p>
      </div>
    </Container>
    <div class="footer-bottom">
      <a href="/privacy-policy" target="_blank" rel="noopener" class="footer-policy-link">
        Политика конфиденциальности
      </a>
      <a href="/cookies-policy" target="_blank" rel="noopener" class="footer-policy-link">
        Политика использования cookies
      </a>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer-section {
  background-color: $white;
  color: $gray;
  font-size: 14px;
  padding: 40px 20px 30px; // увеличил нижний паддинг для баланса с footer-bottom
}

.footer-container {
  display: flex;
  gap: 40px; // добавил промежутки между блоками
  flex-wrap: wrap; // чтобы на узких экранах блоки переносились
  justify-content: center;
}

.footer-block {
  flex: 1 1 220px;
  display: flex;
  flex-direction: column;
  gap: 16px; // немного увеличил для читаемости
  min-width: 220px;
  margin-bottom: 0; // убрал, чтобы отступы были через gap
}

.block-info {
  max-width: 320px; // ограничил ширину для читаемости текста
}

.info-text {
  color: $gray;
  font-size: 13px;
  line-height: 1.5; // чуть больше межстрочного интервала для удобства чтения
  margin: 0; // убрал лишние отступы
}

.footer-link {
  background: none;
  border: none;
  color: $gray;
  cursor: pointer;
  font-size: 20px;
  font-weight: 700;
  padding: 0;
  text-align: left;
  text-transform: uppercase;
  transition: color 0.3s ease;
  margin: 0; // убрать лишние отступы
}

.footer-link:hover,
.footer-link:focus {
  color: #f60;
  outline: none;
}

.footer-title {
  font-size: 20px;
  font-weight: 700;
  margin: 0 0 12px; // увеличил нижний отступ для отделения от текста
  text-transform: uppercase;
}

.reviews-text {
  color: $gray;
  font-size: 13px;
  line-height: 1.5;
  margin: 0;
}

.footer-bottom {
  border-top: 1px solid #444;
  display: flex;
  font-size: 12px;
  gap: 20px;
  justify-content: center;
  margin: 30px auto 0; // добавил верхний margin для отделения от основного футера
  max-width: 1200px;
  padding-top: 15px;
  flex-wrap: wrap; // чтобы ссылки переносились на маленьких экранах
}

.footer-policy-link {
  color: #888;
  text-decoration: underline;
  transition: color 0.3s ease;
  white-space: nowrap; // чтобы ссылки не переносились посередине
}

.footer-policy-link:hover,
.footer-policy-link:focus {
  color: #f60;
  outline: none;
}

/* Адаптив */
@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
    gap: 30px; // чуть меньше, чем на десктопе
  }

  .footer-block {
    min-width: 100%;
  }

  .footer-bottom {
    flex-direction: column;
    font-size: 13px;
    gap: 10px;
    margin-top: 20px;
  }
}
</style>
