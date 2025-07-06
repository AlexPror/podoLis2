<script setup lang="ts">
import { defineProps, defineEmits, reactive } from 'vue'
import Button from '@/components/Button.vue'

const props = defineProps({
  isModalOpen: Boolean,
})

const emit = defineEmits(['close'])

const formData = reactive({
  name: '',
  phone: '',
  problem: '',
  consent: false,
})

const errors = reactive({
  name: '',
  phone: '',
  consent: '',
})

function validatePhoneNumber(phone: string): boolean {
  const digitsOnly = phone.replace(/\D/g, '')
  return digitsOnly.length === 11
}

const onPhoneInput = (event: Event) => {
  let input = (event.target as HTMLInputElement).value
  input = input.replace(/\D/g, '')
  if (input.length > 11) input = input.slice(0, 11)

  let formatted = '+7 '
  if (input.length > 1) {
    formatted += '(' + input.slice(1, 4)
  }
  if (input.length >= 4) {
    formatted += ') ' + input.slice(4, 7)
  }
  if (input.length >= 7) {
    formatted += '-' + input.slice(7, 9)
  }
  if (input.length >= 9) {
    formatted += '-' + input.slice(9, 11)
  }
  if (input.length < 2) formatted = '+7 '

  formData.phone = formatted
}

const validate = () => {
  let valid = true
  errors.name = ''
  errors.phone = ''
  errors.consent = ''

  if (!formData.name.trim()) {
    errors.name = 'Пожалуйста, введите ваше имя'
    valid = false
  }

  if (!formData.phone.trim()) {
    errors.phone = 'Пожалуйста, введите телефон'
    valid = false
  } else if (!validatePhoneNumber(formData.phone)) {
    errors.phone = 'Введите корректный номер телефона в формате +7 (xxx) xxx-xx-xx'
    valid = false
  }

  if (!formData.consent) {
    errors.consent = 'Необходимо согласие на обработку данных'
    valid = false
  }

  return valid
}

const closeModal = () => {
  emit('close')
  formData.name = ''
  formData.phone = ''
  formData.problem = ''
  formData.consent = false

  errors.name = ''
  errors.phone = ''
  errors.consent = ''
}

const submitForm = () => {
  if (!validate()) return

  alert('Заявка отправлена!')
  closeModal()
}
</script>

<template>
  <teleport to="body">
    <div v-if="isModalOpen" class="modal-wrapper">
      <div class="modal-overlay" @click="closeModal" />
      <div class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <button
          class="modal-close"
          @click="closeModal"
          aria-label="Закрыть"
          tabindex="0"
          role="button"
        >
          &times;
        </button>
        <h3 id="modal-title">Оставьте заявку на консультацию</h3>
        <form @submit.prevent="submitForm" class="modal-form" novalidate>
          <label>
            Ваше имя
            <input type="text" v-model="formData.name" />
            <span v-if="errors.name" class="error-message">{{ errors.name }}</span>
          </label>
          <label>
            Ваш телефон с мессенджером
            <input
              type="tel"
              v-model="formData.phone"
              placeholder="+7 (___) ___-__-__"
              @input="onPhoneInput"
            />
            <span v-if="errors.phone" class="error-message">{{ errors.phone }}</span>
          </label>
          <label>
            Опишите вашу проблему
            <textarea v-model="formData.problem" rows="3"></textarea>
          </label>
          <label class="consent">
            <input type="checkbox" v-model="formData.consent" />
            Согласен(а) на обработку персональных данных
          </label>
          <span v-if="errors.consent" class="error-message">{{ errors.consent }}</span>
          <Button type="submit" class="btn btn-orange btn-block">Отправить</Button>
        </form>
      </div>
    </div>
  </teleport>
</template>

<style scoped>
.modal-wrapper {
  align-items: center;
  display: flex;
  inset: 0;
  justify-content: center;
  position: fixed;
  padding: 20px;
  z-index: 100;
}

.modal-overlay {
  background: rgba(0, 0, 0, 0.5);
  inset: 0;
  position: fixed;
}

.modal {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  padding: 30px 25px;
  position: relative;
  text-align: center;
  width: 100%;
}

.modal-close {
  background: none;
  border: none;
  color: #999;
  cursor: pointer;
  font-size: 2rem;
  line-height: 1;
  position: absolute;
  right: 15px;
  top: 12px;
}

.modal-close:hover {
  color: #333;
}

.modal-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  text-align: left;
}

.modal-form label {
  color: #333;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  font-weight: 600;
}

.modal-form input,
.modal-form textarea {
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
  margin-top: 6px;
  padding: 8px 10px;
  resize: vertical;
}

.modal-form .consent {
  align-items: center;
  flex-direction: row;
  font-size: 0.9rem;
  font-weight: 400;
}

.modal-form .consent input {
  margin-right: 8px;
  width: auto;
}

.error-message {
  color: #d94a1a;
  display: block;
  font-size: 0.85rem;
  margin-top: 4px;
}
</style>
