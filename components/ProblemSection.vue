<template>
  <section id="problem" class="section bg-lanca-gray relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 overflow-hidden z-0">
      <div class="absolute -right-24 -top-24 w-48 h-48 rounded-full border border-lanca-gold opacity-10"></div>
      <div class="absolute -left-12 -bottom-12 w-64 h-64 rounded-full border-2 border-dashed border-lanca-gold opacity-5"></div>
    </div>
    
    <div class="container relative z-10">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
        <h2 class="mb-4 inline-block relative">
          <span class="gold-text">O Problema</span>
          <span class="absolute -bottom-2 left-0 w-full h-1 bg-gold-gradient"></span>
        </h2>
        <p class="text-lg text-gray-700">
          Identificamos falhas cruciais no mercado imobiliário atual que dificultam 
          tanto investidores quanto compradores finais
        </p>
      </div>
      
      <!-- Problem Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- Card 1 -->
        <div class="card group hover:bg-lanca-black hover:text-white transition-all duration-500 animate-on-scroll" style="animation-delay: 0.1s;">
          <div class="relative h-14 w-14 mb-4 overflow-hidden">
            <div class="absolute inset-0 bg-gold-gradient rounded-lg opacity-20 group-hover:opacity-100 transition-opacity"></div>
            <div class="relative flex items-center justify-center h-full w-full">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-lanca-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
          </div>
          <h3 class="text-xl font-bold mb-2 group-hover:text-white transition-colors">Mercado fragmentado</h3>
          <p class="text-gray-600 group-hover:text-gray-300 transition-colors">
            O mercado de lançamentos é fragmentado e descentralizado
          </p>
        </div>
        
        <!-- Card 2 -->
        <div class="card group hover:bg-lanca-black hover:text-white transition-all duration-500 animate-on-scroll" style="animation-delay: 0.2s;">
          <div class="relative h-14 w-14 mb-4 overflow-hidden">
            <div class="absolute inset-0 bg-gold-gradient rounded-lg opacity-20 group-hover:opacity-100 transition-opacity"></div>
            <div class="relative flex items-center justify-center h-full w-full">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-lanca-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
          </div>
          <h3 class="text-xl font-bold mb-2 group-hover:text-white transition-colors">Avaliação de rentabilidade</h3>
          <p class="text-gray-600 group-hover:text-gray-300 transition-colors">
            Investidores não conseguem avaliar rentabilidade de forma clara
          </p>
        </div>
        
        <!-- Card 3 -->
        <div class="card group hover:bg-lanca-black hover:text-white transition-all duration-500 animate-on-scroll" style="animation-delay: 0.3s;">
          <div class="relative h-14 w-14 mb-4 overflow-hidden">
            <div class="absolute inset-0 bg-gold-gradient rounded-lg opacity-20 group-hover:opacity-100 transition-opacity"></div>
            <div class="relative flex items-center justify-center h-full w-full">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-lanca-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <h3 class="text-xl font-bold mb-2 group-hover:text-white transition-colors">Perda de clientes</h3>
          <p class="text-gray-600 group-hover:text-gray-300 transition-colors">
            Corretores perdem clientes por falta de rastreabilidade
          </p>
        </div>
        
        <!-- Card 4 -->
        <div class="card group hover:bg-lanca-black hover:text-white transition-all duration-500 animate-on-scroll" style="animation-delay: 0.4s;">
          <div class="relative h-14 w-14 mb-4 overflow-hidden">
            <div class="absolute inset-0 bg-gold-gradient rounded-lg opacity-20 group-hover:opacity-100 transition-opacity"></div>
            <div class="relative flex items-center justify-center h-full w-full">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-lanca-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
          </div>
          <h3 class="text-xl font-bold mb-2 group-hover:text-white transition-colors">Acesso limitado</h3>
          <p class="text-gray-600 group-hover:text-gray-300 transition-colors">
            Compradores não têm acesso às melhores oportunidades em primeira mão
          </p>
        </div>
      </div>
      
      <!-- Problem Visualization -->
      <div class="mt-20 bg-white rounded-2xl shadow-xl p-8 overflow-hidden animate-on-scroll">
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 mb-10 md:mb-0">
            <h3 class="text-2xl font-bold mb-4">Um mercado complexo<br /><span class="gold-text">precisa de soluções inteligentes</span></h3>
            <p class="text-gray-600 mb-6">
              O mercado imobiliário brasileiro movimenta mais de R$200 bilhões por ano, 
              mas a falta de centralização e transparência dificulta o acesso às melhores oportunidades.
            </p>
            <div class="bg-lanca-gray p-4 rounded-lg flex items-start">
              <div class="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mr-4 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <h4 class="font-bold">Oportunidades perdidas</h4>
                <p class="text-sm text-gray-600">
                  Mais de 70% dos investidores relatam ter perdido oportunidades 
                  por falta de informação em tempo hábil.
                </p>
              </div>
            </div>
          </div>
          
          <div class="md:w-1/2 md:pl-10">
            <div class="relative">
              <!-- Chart/Visualization -->
              <div class="relative h-64 bg-lanca-gray rounded-lg overflow-hidden">
                <div class="h-full w-full flex items-end p-4 space-x-4">
                  <div class="h-3/4 w-12 bg-gold-gradient rounded-t-lg opacity-70"></div>
                  <div class="h-1/2 w-12 bg-gold-gradient rounded-t-lg opacity-70"></div>
                  <div class="h-5/6 w-12 bg-gold-gradient rounded-t-lg opacity-70"></div>
                  <div class="h-2/3 w-12 bg-gold-gradient rounded-t-lg opacity-70"></div>
                  <div class="h-1/4 w-12 bg-gold-gradient rounded-t-lg opacity-70"></div>
                  <div class="h-5/6 w-12 bg-gold-gradient rounded-t-lg opacity-70"></div>
                  <div class="h-1/3 w-12 bg-gold-gradient rounded-t-lg opacity-70"></div>
                  <div class="h-3/5 w-12 bg-gold-gradient rounded-t-lg opacity-70"></div>
                </div>
                
                <!-- Overlay -->
                <div class="absolute inset-0 flex items-center justify-center">
                  <p class="text-xl font-bold text-lanca-black">Mercado Fragmentado</p>
                </div>
                
                <!-- Legend -->
                <div class="absolute -bottom-12 left-0 right-0 flex justify-between text-xs text-gray-500">
                  <span>Construtoras</span>
                  <span>Corretores</span>
                  <span>Classificados</span>
                  <span>Redes sociais</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template> 