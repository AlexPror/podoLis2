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
          Честные отзывы о нашей работе Вы можете прочитать на Google, Yandex или 2GIS картах
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
  color: $black;
  padding: 40px 20px 20px;
  font-size: 14px;
}

.footer-block {
  flex: 1 1 220px;
  min-width: 220px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.block-info {
  // max-width: 300px;
}

// .footer-logo {
//   width: 100%;
//   height: auto;
//   display: flex;
//   align-items: center;
//   justify-content: flex-start;
// }

.logo-icon svg,
.whatsapp-icon svg {
  display: block;
  fill: none;
  stroke: #eee;
}

.info-text {
  font-size: 13px;
  line-height: 1.4;
  color: $black;
}

.footer-link {
  font-family: $base-font;
  background: none;
  border: none;
  padding: 0;
  font-weight: 700;
  font-size: 20px;
  color: $black;
  text-transform: uppercase;
  cursor: pointer;
  text-align: left;
  transition: color 0.3s ease;
}

.footer-link:hover,
.footer-link:focus {
  color: #ff6600;
  outline: none;
}

.footer-title {
  font-weight: 700;
  font-size: 20px;
  text-transform: uppercase;
  margin-bottom: 8px;
}

.reviews-text {
  font-size: 13px;
  color: $black;
  line-height: 1.4;
}

.footer-bottom {
  max-width: 1200px;
  margin: 0 auto;
  border-top: 1px solid #444;
  padding-top: 15px;
  display: flex;
  gap: 20px;
  justify-content: center;
  font-size: 12px;
}

.footer-policy-link {
  color: #888;
  text-decoration: underline;
  transition: color 0.3s ease;
}

.footer-policy-link:hover,
.footer-policy-link:focus {
  color: #ff6600;
  outline: none;
}

/* Адаптив */
@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
    gap: 40px;
  }
  .footer-block {
    min-width: 100%;
  }
  .footer-bottom {
    flex-direction: column;
    gap: 10px;
    font-size: 13px;
  }
}
</style>
