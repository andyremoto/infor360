<template>
  <section id="investment" class="section bg-white relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 overflow-hidden z-0">
      <div class="absolute -right-24 -top-24 w-72 h-72 rounded-full border-2 border-dashed border-lanca-gold opacity-10"></div>
      <div class="absolute -left-24 -bottom-24 w-80 h-80 rounded-full border border-lanca-gold opacity-5"></div>
    </div>
    
    <div class="container relative z-10">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
        <h2 class="mb-4 inline-block relative">
          <span class="gold-text">Rodada Proposta</span>
          <span class="absolute -bottom-2 left-0 w-full h-1 bg-gold-gradient"></span>
        </h2>
        <p class="text-lg text-gray-700">
          Detalhes sobre a captação, destinação dos recursos e benefícios 
          para investidores
        </p>
      </div>
      
      <!-- Investment Overview -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <!-- Card 1: Investment Amount -->
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 animate-on-scroll" style="animation-delay: 0.1s;">
          <div class="h-24 bg-gold-gradient flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div class="p-8">
            <h3 class="text-2xl font-bold mb-2 text-center">Captação</h3>
            <p class="text-4xl font-bold text-center mb-6 gold-text">R$ 1.000.000,00</p>
            <p class="text-gray-600 text-center">
              Investimento mínimo: R$ 100.000,00
            </p>
          </div>
        </div>
        
        <!-- Card 2: Equity -->
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 animate-on-scroll" style="animation-delay: 0.2s;">
          <div class="h-24 bg-gold-gradient flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <div class="p-8">
            <h3 class="text-2xl font-bold mb-2 text-center">Participação oferecida</h3>
            <p class="text-4xl font-bold text-center mb-6 gold-text">10% equity</p>
            <p class="text-gray-600 text-center">
              Participação societária com direito a voto
            </p>
          </div>
        </div>
        
        <!-- Card 3: Allocation -->
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 animate-on-scroll" style="animation-delay: 0.3s;">
          <div class="h-24 bg-gold-gradient flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
            </svg>
          </div>
          <div class="p-8">
            <h3 class="text-2xl font-bold mb-2 text-center">Destinação</h3>
            <p class="text-4xl font-bold text-center mb-6 gold-text">Desenvolvimento</p>
            <p class="text-gray-600 text-center">
              Desenvolvimento técnico e operações
            </p>
          </div>
        </div>
      </div>
      
      <!-- Fund Allocation -->
      <div class="flex flex-col lg:flex-row gap-12 mb-20">
        <!-- Left: Fund Allocation Chart -->
        <div class="lg:w-1/2 animate-on-scroll">
          <div class="bg-white rounded-3xl shadow-lg p-8 h-full">
            <h3 class="text-2xl font-bold mb-8 text-center">Destinação do investimento</h3>
            
            <!-- Donut chart -->
            <div class="relative flex justify-center mb-10">
              <div class="w-64 h-64">
                <svg viewBox="0 0 36 36" class="w-full h-full">
                  <!-- Background circle -->
                  <circle cx="18" cy="18" r="15.915" fill="none" stroke="#eee" stroke-width="3.8" />
                  
                  <!-- Segment 1: Development -->
                  <circle 
                    cx="18" 
                    cy="18" 
                    r="15.915" 
                    fill="none" 
                    stroke="#D4AF37" 
                    stroke-width="3.8"
                    stroke-dasharray="40 100" 
                    stroke-dashoffset="25"
                    class="donut-segment" />
                  
                  <!-- Segment 2: Marketing -->
                  <circle 
                    cx="18" 
                    cy="18" 
                    r="15.915" 
                    fill="none" 
                    stroke="#3B82F6" 
                    stroke-width="3.8"
                    stroke-dasharray="25 100" 
                    stroke-dashoffset="-15"
                    class="donut-segment" />
                  
                  <!-- Segment 3: Operations -->
                  <circle 
                    cx="18" 
                    cy="18" 
                    r="15.915" 
                    fill="none" 
                    stroke="#10B981" 
                    stroke-width="3.8"
                    stroke-dasharray="20 100" 
                    stroke-dashoffset="-40"
                    class="donut-segment" />
                  
                  <!-- Segment 4: Partnerships -->
                  <circle 
                    cx="18" 
                    cy="18" 
                    r="15.915" 
                    fill="none" 
                    stroke="#8B5CF6" 
                    stroke-width="3.8"
                    stroke-dasharray="15 100" 
                    stroke-dashoffset="-60"
                    class="donut-segment" />
                </svg>
                
                <!-- Center Content -->
                <div class="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <p class="text-xs text-gray-500">Total</p>
                  <p class="text-xl font-bold gold-text">R$ 1M</p>
                </div>
              </div>
            </div>
            
            <!-- Legend -->
            <div class="grid grid-cols-2 gap-4">
              <div class="flex items-center">
                <div class="w-4 h-4 rounded-full bg-[#D4AF37] mr-3"></div>
                <div>
                  <p class="font-medium">Desenvolvimento</p>
                  <p class="text-sm text-gray-500">40% - R$ 400 mil</p>
                </div>
              </div>
              
              <div class="flex items-center">
                <div class="w-4 h-4 rounded-full bg-[#3B82F6] mr-3"></div>
                <div>
                  <p class="font-medium">Marketing</p>
                  <p class="text-sm text-gray-500">25% - R$ 250 mil</p>
                </div>
              </div>
              
              <div class="flex items-center">
                <div class="w-4 h-4 rounded-full bg-[#10B981] mr-3"></div>
                <div>
                  <p class="font-medium">Operações</p>
                  <p class="text-sm text-gray-500">20% - R$ 200 mil</p>
                </div>
              </div>
              
              <div class="flex items-center">
                <div class="w-4 h-4 rounded-full bg-[#8B5CF6] mr-3"></div>
                <div>
                  <p class="font-medium">Parcerias</p>
                  <p class="text-sm text-gray-500">15% - R$ 150 mil</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Right: Detailed Allocation -->
        <div class="lg:w-1/2 animate-on-scroll" style="animation-delay: 0.3s;">
          <div class="bg-white rounded-3xl shadow-lg p-8 h-full">
            <h3 class="text-2xl font-bold mb-8">Detalhamento da destinação</h3>
            
            <div class="space-y-6">
              <!-- Allocation 1 -->
              <div>
                <div class="flex justify-between items-center mb-2">
                  <h4 class="font-bold flex items-center">
                    <span class="w-3 h-3 rounded-full bg-[#D4AF37] mr-2"></span>
                    Desenvolvimento técnico
                  </h4>
                  <span class="text-sm font-medium">R$ 400 mil</span>
                </div>
                <div class="bg-gray-200 h-2 rounded-full">
                  <div class="bg-gold-gradient h-full rounded-full" style="width: 40%"></div>
                </div>
                <div class="mt-2">
                  <p class="text-sm text-gray-600">
                    Desenvolvimento do aplicativo, back-end, tecnologias de 
                    visualização 3D e ferramentas de análise financeira.
                  </p>
                </div>
              </div>
              
              <!-- Allocation 2 -->
              <div>
                <div class="flex justify-between items-center mb-2">
                  <h4 class="font-bold flex items-center">
                    <span class="w-3 h-3 rounded-full bg-[#3B82F6] mr-2"></span>
                    Marketing digital
                  </h4>
                  <span class="text-sm font-medium">R$ 250 mil</span>
                </div>
                <div class="bg-gray-200 h-2 rounded-full">
                  <div class="bg-[#3B82F6] h-full rounded-full" style="width: 25%"></div>
                </div>
                <div class="mt-2">
                  <p class="text-sm text-gray-600">
                    Estratégias de aquisição de usuários, campanhas digitais 
                    e branding para estabelecer a marca no mercado.
                  </p>
                </div>
              </div>
              
              <!-- Allocation 3 -->
              <div>
                <div class="flex justify-between items-center mb-2">
                  <h4 class="font-bold flex items-center">
                    <span class="w-3 h-3 rounded-full bg-[#10B981] mr-2"></span>
                    Operações e equipe
                  </h4>
                  <span class="text-sm font-medium">R$ 200 mil</span>
                </div>
                <div class="bg-gray-200 h-2 rounded-full">
                  <div class="bg-[#10B981] h-full rounded-full" style="width: 20%"></div>
                </div>
                <div class="mt-2">
                  <p class="text-sm text-gray-600">
                    Estruturação da operação, contratação de equipe qualificada
                    e custos operacionais para os primeiros 12 meses.
                  </p>
                </div>
              </div>
              
              <!-- Allocation 4 -->
              <div>
                <div class="flex justify-between items-center mb-2">
                  <h4 class="font-bold flex items-center">
                    <span class="w-3 h-3 rounded-full bg-[#8B5CF6] mr-2"></span>
                    Parcerias estratégicas
                  </h4>
                  <span class="text-sm font-medium">R$ 150 mil</span>
                </div>
                <div class="bg-gray-200 h-2 rounded-full">
                  <div class="bg-[#8B5CF6] h-full rounded-full" style="width: 15%"></div>
                </div>
                <div class="mt-2">
                  <p class="text-sm text-gray-600">
                    Estabelecimento de parcerias com construtoras, incorporadoras
                    e desenvolvimento dos primeiros cases de venda.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Investment Benefits -->
      <div class="bg-lanca-black rounded-3xl shadow-xl p-8 md:p-12 animate-on-scroll">
        <div class="flex flex-col lg:flex-row items-center gap-12">
          <!-- Left: Content -->
          <div class="lg:w-3/5">
            <h3 class="text-3xl font-bold text-white mb-6">
              Benefícios para <span class="gold-text">investidores</span>
            </h3>
            
            <div class="space-y-6">
              <div class="flex items-start">
                <div class="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center flex-shrink-0 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 class="text-xl font-bold text-white">Potencial de valorização excepcional</h4>
                  <p class="text-gray-400">
                    Com base em benchmarks do setor, o potencial de valorização é de 
                    10-20x em 5 anos, com possibilidade de saída via M&A ou IPO.
                  </p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center flex-shrink-0 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <div>
                  <h4 class="text-xl font-bold text-white">Alocação prioritária de tokens IMB</h4>
                  <p class="text-gray-400">
                    Investidores receberão alocação prioritária de tokens IMB na fase de 
                    pré-venda, com desconto exclusivo de 40% sobre o valor de lançamento.
                  </p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center flex-shrink-0 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <div>
                  <h4 class="text-xl font-bold text-white">Participação na governança</h4>
                  <p class="text-gray-400">
                    Além da participação societária, investidores terão voz ativa na 
                    governança da empresa, com assento no conselho consultivo.
                  </p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center flex-shrink-0 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 class="text-xl font-bold text-white">Oportunidades exclusivas</h4>
                  <p class="text-gray-400">
                    Acesso privilegiado a leilões exclusivos e lançamentos premium
                    antes mesmo de serem disponibilizados na plataforma.
                  </p>
                </div>
              </div>
            </div>
            
            <div class="mt-8">
              <a href="#contact" class="btn btn-primary">
                Seja um investidor
              </a>
            </div>
          </div>
          
          <!-- Right: Illustration -->
          <div class="lg:w-2/5">
            <div class="relative">
              <!-- Decorative elements -->
              <div class="absolute -inset-4 bg-gold-gradient rounded-full opacity-20 blur-3xl"></div>
              
              <!-- Content -->
              <div class="relative bg-lanca-gray/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div class="mb-6">
                  <p class="font-bold text-white text-xl mb-2 gold-text">O investidor certo não compra uma ideia.</p>
                  <p class="text-white">Ele antecipa uma revolução.</p>
                </div>
                
                <p class="text-gray-300 mb-6">
                  O Lança 360 não é apenas um app — é o novo mercado imobiliário. 
                  Uma plataforma que conecta todos os atores do ecossistema 
                  de forma transparente, eficiente e lucrativa.
                </p>
                
                <div class="flex flex-col space-y-4">
                  <div class="flex items-center">
                    <div class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-lanca-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <p class="text-white">Mercado de R$ 200 bilhões/ano</p>
                  </div>
                  
                  <div class="flex items-center">
                    <div class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-lanca-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <p class="text-white">Modelo proprietário com token IMB</p>
                  </div>
                  
                  <div class="flex items-center">
                    <div class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-lanca-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <p class="text-white">Time experiente e visionário</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.donut-segment {
  transition: stroke-dasharray 1s ease-in-out;
}
</style>