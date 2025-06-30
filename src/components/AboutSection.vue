<template>
  <section class="about container">
    <div class="about__text">
      <ul>
        <li>Пункт 1</li>
        <li>Пункт 2</li>
        <li>Пункт 3</li>
        <li>Пункт 4</li>
        <li>Пункт 5</li>
      </ul>
    </div>
    <div class="about__image">
      <!-- <img src="" alt="О нас" /> -->
    </div>
  </section>
</template>

<style scoped>
.about {
  display: flex;
  gap: 20px;
  padding: 40px;
}

.about__text {
  flex: 1;
  font-size: 16px;
  line-height: 1.5;
}

.about__image img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}
</style>
