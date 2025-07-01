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
  padding: 50px 20px 50px;
  // max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.problems-section .title {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.problems-section .subtitle {
  font-size: 1.25rem;
  margin-bottom: 50px;
  color: #464646;
}

.problems-section .cards {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  gap: 2rem;
  justify-content: center;
}

.problems-section .card {
  background: $white;
  border: 1px solid #eee;
  border-radius: 12px;
  flex: 1 0 0;
  overflow: hidden;
  max-width: 360px;
  display: flex;
  flex-direction: column;
}

.problems-section .card-image {
  width: 100%;
  height: 200px;
}

.problems-section .card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.problems-section .card-content {
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
}

.problems-section .card-title {
  font-weight: 700;
  font-size: 1.5rem;
  margin-bottom: 15px;
}

.problems-section .card-list {
  list-style: none;
  padding-left: 0;
}

.problems-section .card-list li {
  position: relative;
  padding-left: 20px;
  margin-bottom: 10px;
  font-size: 1rem;
  color: #464646;
}

.problems-section .card-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 8px;
  width: 10px;
  height: 10px;
  background-color: $primary-color;
  border-radius: 50%;
}

.services-card {
  display: flex;
  flex-direction: column;
}

.card-buttons {
  margin-top: auto;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  padding: 10px;
}

.btn-orange {
  background-color: $primary-color;
  color: $white;
  transition:
    background 0.3s,
    color 0.3s;
  // font-weight: 500;

  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-transform: uppercase;
  display: inline-block;

  &:hover,
  &:focus {
    background-color: #f0785a;
    color: white;
    outline: none;
  }
}

.all-services-button {
  margin-top: 60px;
  padding: 14px 36px;
  font-size: 20px;
  font-weight: 700;
  border-radius: 4px;
  cursor: pointer;
  display: inline-block;
}
</style>
