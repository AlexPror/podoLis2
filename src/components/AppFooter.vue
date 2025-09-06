<script setup lang="ts">
import { ref } from 'vue'
import AppLogo from './AppLogo.vue'
import Container from './Container.vue'
import SocialIcons from './SocialIcons.vue'
import Section from './Section.vue'

const scrollToSection = (id: string) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
    el.focus({ preventScroll: true })
  }
}
</script>

<template>
  <footer class="footer">
    <Section is-gray :noPaddingBottom="true">
      <Container class="footer__container">
        <div class="footer__block footer__block--info">
          <div class="footer__logo">
            <AppLogo />
          </div>
          <SocialIcons class="footer__social-icons" />
        </div>

        <div class="footer__block footer__block--price">
          <RouterLink :to="{ path: '/', hash: '#price' }" class="footer__link">
            Прайс услуг
          </RouterLink>
        </div>

        <div class="footer__block footer__block--about">
          <RouterLink to="/about" class="footer__link">О нас</RouterLink>
        </div>

        <div class="footer__block footer__block--reviews">
          <h3 class="footer__title">ОТЗЫВЫ О НАШЕЙ РАБОТЕ</h3>
          <p class="footer__reviews-text">
            Честные отзывы о нашей работе Вы можете прочитать на
            <a
              href="https://yandex.ru/maps/org/podolis/162946540799/?ll=36.260784%2C54.519887&z=16"
              target="_blank"
              rel="noopener noreferrer"
              class="footer__link--external"
              >Yandex</a
            >
            или
            <a
              href="https://2gis.ru/kaluga/firm/70000001102210712"
              target="_blank"
              rel="noopener noreferrer"
              class="footer__link--external"
              >2GIS</a
            >
            картах
          </p>
        </div>

        <p class="footer__info-text">
          Материалы, размещенные на данной странице, носят информационный характер и предназначены
          для ознакомительных целей. Информация, размещенная на сайте, не является публичной
          офертой. Актуальную информацию о ценах, акциях и предложениях уточняйте по телефону.
        </p>
      </Container>

      <div class="footer__bottom">
        <a href="/privacy-policy" target="_blank" rel="noopener" class="footer__policy-link">
          Политика конфиденциальности
        </a>
        <a href="/cookies-policy" target="_blank" rel="noopener" class="footer__policy-link">
          Политика использования cookies
        </a>
      </div>
    </Section>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  background-color: $white;
  color: $gray;
  font-size: 14px;
}

.footer__container {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;

  @media (width <= 768px) {
    flex-direction: column;
    gap: 30px;
  }
}

.footer__block {
  display: flex;
  flex: 1 1 220px;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 0;
  min-width: 220px;

  @media (width <= 768px) {
    min-width: 100%;
  }
}

.footer__block--info {
  max-width: 320px;
}

.footer__block--price,
.footer__block--about {
  align-items: center;
  display: flex;
  justify-content: center;
  text-transform: uppercase;
}

.footer__link {
  background: none;
  border: none;
  color: $gray;
  cursor: pointer;
  font-size: 20px;
  font-weight: 700;
  margin: 0;
  padding: 0;
  text-align: left;
  text-transform: uppercase;
  transition: color 0.3s ease;
}

.footer__link:hover,
.footer__link:focus {
  color: #f60;
  outline: none;
}

.footer__link--external {
  border-bottom: 1px solid $link-color;
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: $transition-base;
}

.footer__link--external:hover,
.footer__link--external:focus {
  color: #f60;
  outline: none;
}

.footer__title {
  font-size: 20px;
  font-weight: 700;
  margin: 0 0 12px;
  text-transform: uppercase;
}

.footer__reviews-text {
  color: $gray;
  font-size: 13px;
  line-height: 1.5;
  margin: 0;
}

.footer__info-text {
  color: $gray;
  font-size: 13px;
  line-height: 1.5;
  margin: 0;
}

.footer__bottom {
  border-top: 1px solid #444;
  display: flex;
  flex-wrap: wrap;
  font-size: 12px;
  gap: 20px;
  justify-content: center;
  margin: 30px auto 0;
  max-width: 1200px;
  padding-top: 15px;

  @media (width <= 768px) {
    flex-direction: column;
    font-size: 13px;
    gap: 10px;
    margin-top: 20px;
  }
}

.footer__policy-link {
  color: #888;
  text-decoration: underline;
  transition: color 0.3s ease;
  white-space: nowrap;
}

.footer__policy-link:hover,
.footer__policy-link:focus {
  color: #f60;
  outline: none;
}
</style>
