<template>
  <nav :class="{'bg-black': isScrolled, 'bg-transparent': !isScrolled}" class="fixed top-0 left-0 w-full z-50 transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <img src="../assets/Logo/logo.png" alt="C&J Fitness Gym Logo" class="h-14 w-auto">
          <a href="#" class="text-4xl font-bold text-white ml-2 hidden md:block" >C&J Fitness Gym</a>
          <a href="#" class="text-2xl font-bold text-white ml-2 md:hidden" >C&J Fitness Gym</a>
        </div>

        <div class="hidden md:block">
          <ul class="flex space-x-4">
            <li><a href="#" class="text-white hover:text-gray-300 text-2xl font-semibold px-3 py-2 rounded">Home</a></li>
            <li><a href="#" class="text-white hover:text-gray-300 text-2xl font-semibold px-3 py-2 rounded">About</a></li>
            <li><a href="#" class="text-white hover:text-gray-300 text-2xl font-semibold px-3 py-2 rounded">Services</a></li>
            <li><a href="#" class="text-white hover:text-gray-300 text-2xl font-semibold px-3 py-2 rounded">Contact</a></li>
          </ul>
        </div>

        <div class="md:hidden">
          <button @click="toggleMenu" class="text-white focus:outline-none">
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div :class="{'block': isMenuOpen, 'hidden': !isMenuOpen}" class="md:hidden">
      <ul class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <li><a href="#" class="text-white block hover:text-gray-300 text-xl font-semibold px-3 py-2 rounded">Home</a></li>
        <li><a href="#" class="text-white block hover:text-gray-300 text-xl font-semibold px-3 py-2 rounded">About</a></li>
        <li><a href="#" class="text-white block hover:text-gray-300 text-xl font-semibold px-3 py-2 rounded">Services</a></li>
        <li><a href="#" class="text-white block hover:text-gray-300 text-xl font-semibold px-3 py-2 rounded">Contact</a></li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue"
defineProps({
    topDiv:String
});

const isMenuOpen = ref(false);
const isScrolled = ref(false);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
}

window.addEventListener('scroll', () => {
  isScrolled.value = window.scrollY > 400;
});
</script>

