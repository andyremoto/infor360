<template>
  <header class="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-md transition-all duration-300" :class="{ 'py-1 md:py-2': scrolled, 'py-2 md:py-4': !scrolled }">
    <div class="container px-4 md:px-6 flex items-center justify-between">
      <div class="flex items-center">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center">
          <div class="relative w-10 h-10 md:w-14 md:h-14 mr-2 md:mr-3">
            <img src="/images/logo.svg" alt="Lança 360 Logo" class="w-full h-full object-contain" />
          </div>
          <div>
            <h1 class="text-lg md:text-xl font-extrabold flex items-center">
              <span class="gold-text">LANÇA</span>
              <span class="relative ml-1 text-lanca-black">360°</span>
            </h1>
            <p class="text-xs text-gray-600 hidden md:block">Revolução no Mercado Imobiliário</p>
          </div>
        </NuxtLink>
      </div>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center space-x-6">
        <NuxtLink v-for="item in navigationItems" :key="item.name" :to="item.href" class="font-medium text-gray-700 hover:text-lanca-gold transition-colors">
          {{ item.name }}
        </NuxtLink>
        <a href="#investment" class="btn btn-primary">Investir Agora</a>
      </nav>

      <!-- Mobile Navigation Button -->
      <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden p-2 rounded-md text-gray-700 focus:outline-none">
        <svg v-if="!mobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile Navigation Menu -->
    <div v-if="mobileMenuOpen" class="md:hidden bg-white border-t fixed w-full top-[60px] shadow-md max-h-[calc(100vh-60px)] overflow-y-auto z-40">
      <div class="container px-4 py-4 space-y-3">
        <NuxtLink v-for="item in navigationItems" :key="item.name" :to="item.href" @click="mobileMenuOpen = false" class="block font-medium text-gray-700 py-3 border-b border-gray-100">
          {{ item.name }}
        </NuxtLink>
        <div class="py-3">
          <a href="#investment" @click="mobileMenuOpen = false" class="btn btn-primary block text-center">Investir Agora</a>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const mobileMenuOpen = ref(false);
const scrolled = ref(false);

const navigationItems = [
  { name: 'Início', href: '#hero' },
  { name: 'Problema', href: '#problem' },
  { name: 'Solução', href: '#solution' },
  { name: 'Público-Alvo', href: '#target' },
  { name: 'Mercado', href: '#market' },
  { name: 'Vantagens', href: '#advantages' },
  { name: 'Valuation', href: '#valuation' },
];

const handleScroll = () => {
  scrolled.value = window.scrollY > 50;
};

onMounted(() => {
  if (process.client) {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
  }
});

onUnmounted(() => {
  if (process.client) {
    window.removeEventListener('scroll', handleScroll);
  }
});
</script>