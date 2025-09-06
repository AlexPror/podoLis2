<script setup lang="ts">
import { ref } from 'vue'
import ModalForm from './ModalForm.vue'
import Button from './Button.vue'
import Container from './Container.vue'
import Section from './Section.vue'

const isModalOpen = ref(false)

const openModal = () => {
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
}
</script>

<template>
  <Section id="problems" class="problems-section">
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
            <h3 class="card-title">Симптомы грибка стопы</h3>
            <ul class="card-list">
              <li>Покраснение и воспаление кожи, особенно между пальцами</li>
              <li>Интенсивный зуд и жжение в области стоп</li>
              <li>Сухость и шелушение кожи с образованием белых чешуек</li>
              <li>Мелкие болезненные трещины и ранки на подошвах и межпальцевых пространствах</li>
              <li>Появление пузырьков и мокнущих участков кожи</li>
            </ul>
          </div>
          <div class="card-buttons">
            <!-- <Button theme="secondary" size="small" to="/problems/fungus">Подробнее</Button> -->
            <Button theme="primary" size="small" @click="openModal">Записаться</Button>
          </div>
        </article>

        <article class="card">
          <div class="card-image">
            <img src="../assets/images/problem2.webp" alt="Сухая кожа стопы" />
          </div>
          <div class="card-content">
            <h3 class="card-title">Симптомы вросшего ногтя</h3>
            <ul class="card-list">
              <li>Острая или пульсирующая боль при ходьбе и нажатии на палец</li>
              <li>Покраснение, отёчность и воспаление вокруг ногтевого валика</li>
              <li>Повышение местной температуры кожи, ощущение жара</li>
              <li>Выделение гнойного содержимого при присоединении инфекции</li>
              <li>Кровоточивость и раздражение кожи в зоне врастания ногтя</li>
            </ul>
          </div>
          <div class="card-buttons">
            <!-- <Button theme="secondary" size="small">Подробнее</Button> -->
            <Button theme="primary" size="small" @click="openModal">Записаться</Button>
          </div>
        </article>

        <article class="card">
          <div class="card-image">
            <img src="../assets/images/foot.jpg" alt="Трещины на коже" />
          </div>
          <div class="card-content">
            <h3 class="card-title">Симптомы трещин на коже стоп</h3>
            <ul class="card-list">
              <li>Сухая, натянутая и огрубевшая кожа с выраженным шелушением</li>
              <li>Появление мелких или глубоких линейных разрывов кожи, вызывающих боль</li>
              <li>Жжение и зуд в поражённых местах</li>
              <li>Кровянистые выделения из глубоких трещин</li>
              <li>Покраснение и отёчность вокруг трещин — признак воспаления</li>
            </ul>
          </div>
          <div class="card-buttons">
            <!-- <Button theme="secondary" size="small" to="/problems/cracks">Подробнее</Button> -->
            <Button theme="primary" size="small" @click="openModal">Записаться</Button>
          </div>
        </article>
      </div>

      <div class="all-services-wrapper mt-5">
        <!-- <a href="#price" class="btn-orange all-services-button">Все услуги</a> -->

        <Button size="large" to="#price">Все услуги</Button>
      </div>

      <ModalForm :isModalOpen="isModalOpen" @close="closeModal" />
    </Container>
  </Section>
</template>

<style scoped lang="scss">
.problems-section {
  margin: 0 auto;
  text-align: center;
}

.problems-section .title {
  font-size: 2.5rem;
  margin-bottom: 20px;

  @media (width <= 620px) {
    font-size: 2rem;
    margin-bottom: 15px;
    padding: 0 1rem;
  }
}

.problems-section .subtitle {
  color: #464646;
  font-size: 1.25rem;
  margin-bottom: 50px;

  @media (width <= 620px) {
    font-size: 1.1rem;
    margin-bottom: 30px;
    padding: 0 1rem;
  }
}

.problems-section .cards {
  align-items: stretch;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  margin-bottom: 3rem;

  @media (width <= 620px) {
    gap: 1.5rem;
    margin-bottom: 2rem;
  }
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

  @media (width <= 620px) {
    flex: 1 1 100%;
    max-width: 100%;
    margin-bottom: 1rem;
  }
}

.problems-section .card-image {
  height: 200px;
  width: 100%;
}

.problems-section .card-image img {
  display: block;
  height: 100%;
  object-fit: cover;
  object-position: center 30%;
  width: 100%;
}

@media (width <= 768px) {
  .problems-section .card-image {
    height: 180px;
  }

  .problems-section .card-image img {
    object-position: center 25%;
    transform: scale(0.95);
  }
}

@media (width <= 480px) {
  .problems-section .card-image {
    height: 160px;
  }

  .problems-section .card-image img {
    object-position: center 20%;
    transform: scale(0.9);
  }
}

.problems-section .card-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  text-align: left;

  @media (width <= 620px) {
    padding: 15px 10px;
  }
}

.problems-section .card-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 15px;

  @media (width <= 620px) {
    font-size: 1.1rem;
    margin-bottom: 12px;
  }
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

  @media (width <= 620px) {
    font-size: 0.9rem;
    margin-bottom: 8px;
    padding-left: 18px;
  }
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

  @media (width <= 620px) {
    padding: 15px 10px;
    margin-top: 1rem;
  }
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
