<template>
  <div>
    <TheHeader />
    <main>
      <NuxtPage />
    </main>
    <TheFooter />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

onMounted(() => {
  if (process.client) {
    gsap.registerPlugin(ScrollTrigger);
    
    // Animate elements when they come into view
    const animateOnScroll = document.querySelectorAll('.animate-on-scroll');
    
    animateOnScroll.forEach(element => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });
  }
});
</script>