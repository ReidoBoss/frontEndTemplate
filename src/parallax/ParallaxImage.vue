<template>
  <div class="w-full h-screen overflow-hidden relative">
    <img :style="{ transform: `translateY(${offsetY}px)`, width: '100%', height: '100%', objectFit: 'cover' }" src="../assets/LandingPage/LandingPage.jpg" />
  
    <!-- PC -->
    <div class="absolute bottom-10 left-24 p-4 text-white font-bold text-4xl md:text-7xl hidden md:block" style="font-family: 'Roboto', sans-serif;">
      <div class="max-w-full">
        <div class="w-65 whitespace-normal">
          ONE DAY <br>/ <br>DAY ONE
        </div>
      </div>
    </div>
  
    <!-- MOBILE -->
    <div class="absolute bottom-20 left-1/2 text-white transform -translate-x-1/2 p-4 text-center font-bold text-6xl md:hidden" style="font-family: 'Roboto', sans-serif;">
      <div class="max-w-full">
        <div class="w-50 whitespace-normal">
          ONE DAY OR DAY ONE.
        </div>
      </div>
    </div>
  
    <!-- Mobile BUTTON -->
    <div class="absolute bottom-0 right-0 left-0 text-center p-8 md:p-4 md:hidden">
      <button class="bg-transparent border border-white text-white font-bold py-4 px-8 rounded-full hover:bg-white hover:text-black transition-all duration-300 md:inline-block md:mr-8">
      JOIN NOW
      </button>
    </div>

    <!-- PC BUTTON -->
    <div class="hidden md:block absolute bottom-0 right-0 mr-60 mb-8 text-center">
      <button class="bg-transparent border border-white text-lg text-white py-5 px-20 rounded-full hover:bg-white hover:text-black transition-all duration-300 md:inline-block md:mr-8">
        JOIN NOW
      </button>
    </div>


    

  </div>
  
</template>



<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
defineProps({
  offsetY:Number
});

const offsetY = ref(0);

const handleScroll = () => {
  offsetY.value = window.pageYOffset * 0.4;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>


