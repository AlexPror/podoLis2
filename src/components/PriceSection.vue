<script setup lang="ts">
import { ref, computed } from 'vue'
import Container from './Container.vue'

const services = [
  {
    name: 'Консультация',
    rows: [
      { title: 'Консультация в кабинете', price: 1500 },
      { title: 'Консультация по телефону', price: 500 },
    ],
  },
  {
    name: 'Комплексные услуги',
    rows: [
      { title: 'Подологический педикюр при грибке первичный прием', price: 3300 },
      { title: 'Подологический педикюр при грибке вторичный прием', price: 3000 },
      { title: 'Подологический педикюр первичный прием', price: 2900 },
      { title: 'Подологический педикюр вторичный прием', price: 2700 },
      { title: 'Подологическая обработка ногтевых пластин при грибке', price: 2500 },
      { title: 'Подологическая обработка кожи стоп при грибке', price: 2200 },
      { title: 'Обработка кожи стоп при незначительных изменениях трещины/кератоз', price: 2000 },
      { title: 'Гигиеническая обработка кожи стоп /без ногтей/эстетика', price: 1600 },
      { title: 'Гигиеническая обработка ногтевых пластин /без изменений/эстетика', price: 1800 },
      { title: 'Эстетический педикюр', price: 2400 },
      { title: 'Вросший ноготь 1 ед. первичный прием', price: 1800 },
      { title: 'Вросший ноготь 1 ед. вторичный прием', price: 1400 },
      { title: 'Вросший ноготь 2 ед. первичный прием', price: 2500 },
      { title: 'Вросший ноготь 2 ед. вторичный прием', price: 2100 },
    ],
  },
  {
    name: 'Чистка ногтевых пластин',
    rows: [
      { title: 'Зачистка 1 ногтевой пластины при грибке', price: 1000 },
      { title: 'Зачистка 1 ногтевой пластины при утолщении/деформации', price: 900 },
    ],
  },
  {
    name: 'Коррекционные системы',
    rows: [
      { title: 'Установка коррекционной системы «Титановая нить»', price: 3300 },
      { title: 'Переустановка коррекционной системы «Титановая нить»', price: 2500 },
      { title: 'Снятие коррекционной системы «Титановая нить»', price: 500 },
      { title: 'Установка крючковой коррекционной системы 3то', price: 4800 },
      { title: 'Переустановка крючковой коррекционной системы 3то', price: 4000 },
    ],
  },
  {
    name: 'Процедуры',
    rows: [
      { title: 'Локальная обработка до 3 ед.', price: 1500 },
      { title: 'Тампонирование 1 ед.', price: 500 },
      { title: 'Тейпирование 1 ед.', price: 500 },
    ],
  },
  {
    name: 'Прочее',
    rows: [
      { title: 'Знакомство с мастером (скидка на первый прием)', price: 500 },
      { title: 'Выезд на дом подологическая обработка стоп и ногтей при грибке', price: 7000 },
      { title: 'Выезд на дом подологическая обработка ногтевых пластин при грибке', price: 5000 },
      { title: 'Выезд на дом подологическая обработка стоп при грибке', price: 4000 },
      { title: 'Акция участникам ВОВ и ветеранам боевых действий (первичный прием)', price: 0 },
      { title: 'Акция 80+ (первичный прием)', price: 0 },
      {
        title: 'Акция «Модель для новичка подолога» (половина прайса на любую процедуру)',
        price: null,
      },
    ],
  },
]
const selectedIndex = ref(0)
const selectedService = computed(() => services[selectedIndex.value])
</script>

<template>
  <section id="price" class="price">
    <Container>
      <div class="price__buttons">
        <button
          v-for="(service, index) in services"
          :key="index"
          :class="['price__button', { active: selectedIndex === index }]"
          @click="selectedIndex = index"
          type="button"
        >
          {{ service.name }}
        </button>
      </div>

      <div class="price__table-wrapper" v-if="selectedService">
        <table class="price__table">
          <thead>
            <tr>
              <th>{{ selectedService.name }}</th>
              <th>топ-мастер</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(row, rowIndex) in selectedService.rows"
              :key="rowIndex"
              :class="{ even: rowIndex % 2 !== 0, odd: rowIndex % 2 === 0 }"
            >
              <td>{{ row.title }}</td>
              <td>
                <template v-if="row.price === 0">Бесплатно</template>
                <template v-else-if="row.price === null">По акции</template>
                <template v-else>{{ row.price }} ₽</template>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="reservation-rules">
        <h4>Правила резервирования времени</h4>
        <ol>
          <li>
            Формирование резерва времени на основе имеющихся данных.<br />
            Резерв времени, предварительная запись и консультация по ориентировочной стоимости услуг
            осуществляются Исполнителем, исходя из информации, доступной на момент консультации как
            у Исполнителя, так и у Заказчика. Такая информация может включать обсуждение
            предполагаемой даты и времени предоставления услуг, а также предварительный перечень и
            примерный диапазон стоимости на основе актуального Прейскуранта. Предварительная запись
            на выбранную Заказчиком дату не является договором-офертой, коммерческим предложением,
            подтверждением окончательной стоимости, заказом или бронированием цен и условий. При
            одностороннем изменении записи ни Заказчик, ни Исполнитель не несут штрафных санкций.
          </li>
          <li>
            Уточнение перечня и стоимости услуг непосредственно перед приёмом.<br />
            В день оказания услуг Исполнитель обязан ознакомить Заказчика с актуальными ценами,
            размещёнными на сайте www.podomed.ru или предоставленными в бумажном виде на месте
            оказания услуги. Непосредственно перед началом работы согласовывается окончательный
            список услуг и их стоимость, исходя из действующего на этот день Прейскуранта.
          </li>
          <li>
            Учёт индивидуальных особенностей.<br />
            При записи просим сообщать о состоянии здоровья, включая беременность, хронические
            заболевания, травмы или перенесённые операции. Услуги несовершеннолетним предоставляются
            только в присутствии законного представителя. Просим заранее информировать о любых
            изменениях, связанных с записью. При опоздании более чем на 10 минут специалист может
            быть вынужден перенести приём. Неявка без предупреждения вызывает сожаление.
          </li>
          <li>
            Система поощрений и скидок.<br />
            Мы ценим клиентов, которые проявляют уважение: приходят вовремя, ведут себя корректно и
            следуют рекомендациям специалистов. Решение о предоставлении скидок принимается
            Исполнителем в одностороннем порядке.
          </li>
        </ol>
      </div>
    </Container>
  </section>
</template>

<style scope lang="scss">
.price {
  background: $white;
}

.price__table-wrapper {
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  padding: 0 10px;
  width: 100%;
}

.price__table {
  border-collapse: collapse;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgb(0 0 0 / 10%);
  font-size: 20px;
  max-width: 960px;
  overflow: hidden;
  width: 100%;
}

.price__table thead th {
  background-color: $white;
  border-bottom: 1px solid black;
  color: $gray;
  font-weight: 700;
  padding: 14px 12px;
  text-align: left;
  user-select: none;
}

.price__table tbody tr.odd {
  background-color: #fff;
  color: $gray;
}

.price__table tbody tr.even {
  background-color: $white;
  color: $gray;
}

.price__table tbody tr:hover {
  background-color: $white;
  color: $gray;
  transition: background-color 0.3s ease;
}

.price__table tbody td {
  border-bottom: 1px solid #ddd;
  font-weight: 500;
  padding: 12px;
  vertical-align: middle;
}

.price__table tbody td:first-child {
  font-weight: 600;
  max-width: 600px;
  word-wrap: break-word;
}

@media (width <= 768px) {
  .price__table-wrapper {
    padding: 0 5px;
  }

  .price__table {
    font-size: 14px;
  }

  .price__table thead th,
  .price__table tbody td {
    padding: 10px 8px;
  }
}

.price__buttons {
  display: flex;
  gap: 10px;
  padding: 100px 0;
  width: 100%;

}

.price__button {
  background: $white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  flex: 1 1 0;
  font-size: 20px;
  font-weight: 600;
  padding: 14px 0;
  text-align: center;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
  user-select: none;
}

.price__button:hover {
  background-color: $primary-color;
  color: $white;
}

.price__button.active {
  background-color: $primary-color;
  box-shadow: 0 4px 8px rgb(246 98 62 / 50%);
  color: $white;
  font-weight: 700;
}
//Правила резервирования времени
.reservation-rules {
  color: $gray;
  line-height: 1.6;
  margin: 0 auto;
  margin-top: 3rem;
  max-width: 960px;
  padding: 1.5rem 2rem; // добавляем внутренние отступы для удобства чтения
  text-align: center;
  text-align: left;
  width: 100%; // растягиваем по всей ширине родителя

  h4 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  ol {
    margin-bottom: 1.5rem; // отступ снизу для списка
    padding-left: 1.5rem; // отступ слева для списка, чтобы не прилипал к краю
  }

  li {
    margin-bottom: 1rem; // отступ между пунктами списка для читаемости
  }

  p {
    margin-bottom: 1.25rem;
  }
}
</style>
