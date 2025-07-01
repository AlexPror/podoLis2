<script setup lang="ts">
import { ref } from 'vue'
import ModalForm from './ModalForm.vue'
import Button from './Button.vue'
import Container from './Container.vue'

const isModalOpen = ref(false)

const openModal = () => {
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
}
</script>

<template>
  <section id="problems" class="problems-section">
    <Container>
      <h2 class="title">С какими проблемами мы работаем</h2>
      <p class="subtitle">
        Здесь Вы можете найти свою проблему и наши специалисты помогут вам решить её
      </p>

      <div class="cards">
        <article class="card services-card">
          <div class="card-image">
            <img src="../assets/images/fungus.webp" alt="Грибок стопы" />
          </div>
          <div class="card-content">
            <h3 class="card-title">Грибок стопы</h3>
            <ul class="card-list">
              <li>Очень сухая кожа стопы</li>
              <li>Покраснения и раздражения</li>
              <li>Мелкие трещины на коже</li>
              <li>Зуд</li>
              <li>Излишняя потливость</li>
              <li>Изменение цвета и формы ногтевой пластины</li>
            </ul>
          </div>
          <div class="card-buttons">
            <Button theme="secondary" size="small" to="/problems/fungus">Подробнее</Button>
            <Button theme="primary" size="small" @click="openModal">Решить проблему</Button>
          </div>
        </article>

        <article class="card">
          <div class="card-image">
            <img src="../assets/images/problem2.webp" alt="Сухая кожа стопы" />
          </div>
          <div class="card-content">
            <h3 class="card-title">Вросший ноготь</h3>
            <ul class="card-list">
              <li>Боль во время ходьбы</li>
              <li>Покраснение и отечность кожи на пальце</li>
              <li>Повышение температуры</li>
              <li>Появление гноя</li>
              <li>Кровотечение</li>
              <li>Осложнения после хирургического удаления</li>
            </ul>
          </div>
          <div class="card-buttons">
            <Button theme="secondary" size="small">Подробнее</Button>
            <Button theme="primary" size="small" @click="openModal">Решить проблему</Button>
          </div>
        </article>

        <article class="card">
          <div class="card-image">
            <img src="../assets/images/fungus.webp" alt="Трещины на коже" />
          </div>
          <div class="card-content">
            <h3 class="card-title">Трещины на коже</h3>
            <ul class="card-list">
              <li>Болезненность</li>
              <li>Покраснения</li>
              <li>Риск инфекции</li>
            </ul>
          </div>
          <div class="card-buttons">
            <Button theme="secondary" size="small" to="/problems/cracks">Подробнее</Button>
            <Button theme="primary" size="small" @click="openModal">Решить проблему</Button>
          </div>
        </article>
      </div>

      <div class="all-services-wrapper">
        <a href="#price" class="btn-orange all-services-button">Все услуги</a>
      </div>

      <ModalForm :isModalOpen="isModalOpen" @close="closeModal" />
    </Container>
  </section>
</template>

<style scoped lang="scss">
.problems-section {
  // max-width: 1200px;
  margin: 0 auto;
  padding: 50px 20px;
  text-align: center;
}

.problems-section .title {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.problems-section .subtitle {
  color: #464646;
  font-size: 1.25rem;
  margin-bottom: 50px;
}

.problems-section .cards {
  align-items: stretch;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}

.problems-section .card {
  background: $white;
  border: 1px solid #eee;
  border-radius: 12px;
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  max-width: 360px;
  overflow: hidden;
}

.problems-section .card-image {
  height: 200px;
  width: 100%;
}

.problems-section .card-image img {
  display: block;
  height: 100%;
  object-fit: cover;
  width: 100%;
}

.problems-section .card-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  text-align: left;
}

.problems-section .card-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 15px;
}

.problems-section .card-list {
  list-style: none;
  padding-left: 0;
}

.problems-section .card-list li {
  color: #464646;
  font-size: 1rem;
  margin-bottom: 10px;
  padding-left: 20px;
  position: relative;
}

.problems-section .card-list li::before {
  background-color: $primary-color;
  border-radius: 50%;
  content: '';
  height: 10px;
  left: 0;
  position: absolute;
  top: 8px;
  width: 10px;
}

.services-card {
  display: flex;
  flex-direction: column;
}

.card-buttons {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  margin-top: auto;
  padding: 10px;
}

.btn-orange {
  background-color: $primary-color;
  // font-weight: 500;

  border: none;
  border-radius: 4px;
  color: $white;
  cursor: pointer;
  display: inline-block;
  text-transform: uppercase;
  transition:
    background 0.3s,
    color 0.3s;

  &:hover,
  &:focus {
    background-color: #f0785a;
    color: white;
    outline: none;
  }
}

.all-services-button {
  border-radius: 4px;
  cursor: pointer;
  display: inline-block;
  font-size: 20px;
  font-weight: 700;
  margin-top: 60px;
  padding: 14px 36px;
}
</style>
