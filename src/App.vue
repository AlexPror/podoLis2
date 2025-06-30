<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'
import PriceSection from './components/PriceSection.vue'
import HeroSection from './components/HeroSection.vue'
import ProblemsSection from './components/ProblemsSection.vue'
import ModalForm from './components/ModalForm.vue'
</script>

<template>
  <div class="app">
    <AppHeader />
    <main>
      <HeroSection />
      <ProblemsSection />
      <ModalForm />
      <PriceSection />
      <ContactSection />
      <FooterSection />
    </main>
  </div>
</template>
