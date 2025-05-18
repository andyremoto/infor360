// plugins/scroll-animations.js
export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    nuxtApp.hook('app:mounted', () => {
      // Initialize animation on scroll
      const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        elements.forEach(element => {
          const elementTop = element.getBoundingClientRect().top;
          const elementBottom = element.getBoundingClientRect().bottom;
          const isVisible = (elementTop < window.innerHeight - 100) && (elementBottom > 0);
          
          if (isVisible) {
            element.classList.add('show');
          } else {
            // Uncomment the line below if you want elements to hide again when scrolled out of view
            // element.classList.remove('show');
          }
        });
      };
      
      // Run on initial load
      animateOnScroll();
      
      // Add scroll event listener
      window.addEventListener('scroll', animateOnScroll);
      
      // Clean up when component unmounts
      nuxtApp.hook('app:beforeUnmount', () => {
        window.removeEventListener('scroll', animateOnScroll);
      });
    });
  }
});