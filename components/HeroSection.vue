<template>
  <section id="hero" class="relative min-h-screen bg-lanca-white pt-24 overflow-hidden">
    <!-- Hero Background Image -->
    <div class="absolute inset-0 overflow-hidden z-0">
      <!-- Minimalist background elements -->
      <div class="absolute right-0 top-0 w-1/3 h-1/3 border-t border-r border-lanca-black/5"></div>
      <div class="absolute left-0 bottom-0 w-1/4 h-1/4 border-b border-l border-lanca-black/5"></div>
      
      <!-- Subtle gold accent -->
      <div class="absolute right-20 bottom-20 w-32 h-32 rounded-full border border-lanca-gold opacity-10"></div>
    </div>

    <div class="container px-4 sm:px-6 flex flex-col lg:flex-row items-center justify-between relative z-10">
      <!-- Text Content -->
      <div class="lg:w-1/2 pt-8 md:pt-12 animate-on-scroll">
        <div class="inline-block px-3 sm:px-4 py-1 mb-4 sm:mb-6 rounded-full bg-lanca-gray">
          <p class="text-xs sm:text-sm font-semibold flex items-center">
            <span class="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-green-500 mr-1.5 sm:mr-2"></span>
            Revolucionando o Mercado Imobiliário
          </p>
        </div>
        
        <h1 class="mb-4 sm:mb-6 leading-tight">
          <span class="block text-lanca-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Lança <span class="gold-text">360°</span></span>
          <span class="text-lanca-black text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal mt-2 sm:mt-3 block">
            O futuro do investimento imobiliário
          </span>
        </h1>
        
        <p class="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 max-w-2xl">
          Uma plataforma digital que centraliza todos os lançamentos imobiliários do Brasil, 
          conectando compradores e investidores às oportunidades mais rentáveis.
        </p>
        
        <div class="flex flex-wrap gap-3 sm:gap-4">
          <a href="#investment" class="btn btn-primary text-sm sm:text-base">
            Investir Agora
          </a>
          <a href="#solution" class="btn border-2 border-lanca-black text-lanca-black hover:bg-lanca-black hover:text-white text-sm sm:text-base">
            Conheça a Plataforma
          </a>
        </div>
        
        <!-- Stats -->
        <div class="grid grid-cols-3 gap-2 sm:gap-4 mt-8 sm:mt-12">
          <div class="text-center">
            <p class="text-xl sm:text-2xl md:text-3xl font-bold gold-text">R$200B</p>
            <p class="text-xs sm:text-sm text-gray-600">Mercado Anual</p>
          </div>
          <div class="text-center">
            <p class="text-xl sm:text-2xl md:text-3xl font-bold gold-text">1000+</p>
            <p class="text-xs sm:text-sm text-gray-600">Lançamentos</p>
          </div>
          <div class="text-center">
            <p class="text-xl sm:text-2xl md:text-3xl font-bold gold-text">2X</p>
            <p class="text-xs sm:text-sm text-gray-600">Potencial Expansão</p>
          </div>
        </div>
      </div>
      
      <!-- Hero Image/3D Model - Smaller and more elegant, better on mobile -->
      <div class="w-4/5 sm:w-3/4 md:w-2/3 lg:w-2/5 mt-8 sm:mt-10 lg:mt-0 mx-auto lg:mx-0 animate-on-scroll" style="animation-delay: 0.3s;">
        <div class="relative">
          <div class="relative bg-white p-2 sm:p-3 rounded-lg border border-gray-200 shadow-sm overflow-hidden">
            <!-- App Interface Mockup -->
            <img 
              src="/images/app-mockup.png" 
              alt="Lança 360 App Interface" 
              class="w-full rounded-lg"
            />
            
            <!-- Floating Elements - More Subtle & Responsive -->
            <div class="hidden sm:block absolute top-8 -right-4 bg-white p-2 rounded-md shadow-sm transform rotate-3">
              <div class="flex items-center">
                <div class="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-lanca-black flex items-center justify-center text-white font-bold text-xs">R$</div>
                <div class="ml-2">
                  <p class="text-xs font-medium">Investimento</p>
                  <p class="text-xs font-bold text-lanca-gold">+15% a.a</p>
                </div>
              </div>
            </div>
            
            <div class="hidden sm:block absolute bottom-10 -left-3 bg-white p-2 rounded-md shadow-sm transform -rotate-3">
              <div class="flex items-center">
                <div class="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-lanca-black flex items-center justify-center text-white font-bold text-xs">3D</div>
                <div class="ml-2">
                  <p class="text-xs font-medium">Visualização</p>
                  <p class="text-xs font-bold">Imersiva</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Scroll Down Indicator -->
    <div class="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
      <p class="text-xs sm:text-sm text-gray-500 mb-1 sm:mb-2">Scroll para descobrir</p>
      <div class="w-5 h-8 sm:w-6 sm:h-10 border border-gray-300 sm:border-2 rounded-full flex justify-center">
        <div class="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-lanca-gold rounded-full animate-bounce mt-1.5 sm:mt-2"></div>
      </div>
    </div>
  </section>
</template>