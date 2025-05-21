<template>
  <section id="monetization" class="section bg-white relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute right-0 top-20 w-72 h-72 opacity-5">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-full h-full text-lanca-gold">
        <path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm-3.5-6H14a.5.5 0 000-1h-4a2.5 2.5 0 010-5h1V6h2v2h2.5v2H10a.5.5 0 000 1h4a2.5 2.5 0 010 5h-1v2h-2v-2H8.5v-2z"/>
      </svg>
    </div>
    
    <div class="container relative z-10">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
        <h2 class="mb-4 inline-block relative">
          <span class="gold-text">Monetização</span>
          <span class="absolute -bottom-2 left-0 w-full h-1 bg-gold-gradient"></span>
        </h2>
        <p class="text-lg text-gray-700">
          Modelo de negócio diversificado com múltiplas fontes de receita, 
          garantindo crescimento sustentável e resiliente
        </p>
      </div>
      
      <!-- Revenue Streams Visualization -->
      <div class="flex flex-col lg:flex-row gap-12 mb-20">
        <!-- Left: Visual Representation -->
        <div class="lg:w-1/2 animate-on-scroll">
          <div class="bg-lanca-gray rounded-3xl p-8 h-full">
            <h3 class="text-2xl font-bold mb-10 text-center">Fontes de Receita</h3>
            
            <!-- Revenue Pie Chart - Responsive -->
            <div class="relative flex items-center justify-center mb-8 sm:mb-10">
              <div class="w-48 h-48 sm:w-64 sm:h-64 rounded-full border-[12px] sm:border-[16px] border-gray-200 flex items-center justify-center relative">
                <!-- Pie Chart Segments -->
                <svg viewBox="0 0 36 36" class="w-full h-full absolute -rotate-90">
                  <path class="revenue-segment" 
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" 
                        fill="none" 
                        stroke="#D4AF37" 
                        stroke-width="4" 
                        stroke-dasharray="30, 100" />
                  <path class="revenue-segment" 
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" 
                        fill="none" 
                        stroke="#4ADE80" 
                        stroke-width="4" 
                        stroke-dasharray="25, 100" 
                        stroke-dashoffset="-30" />
                  <path class="revenue-segment" 
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" 
                        fill="none" 
                        stroke="#3B82F6" 
                        stroke-width="4" 
                        stroke-dasharray="20, 100" 
                        stroke-dashoffset="-55" />
                  <path class="revenue-segment" 
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" 
                        fill="none" 
                        stroke="#8B5CF6" 
                        stroke-width="4" 
                        stroke-dasharray="15, 100" 
                        stroke-dashoffset="-75" />
                  <path class="revenue-segment" 
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" 
                        fill="none" 
                        stroke="#EC4899" 
                        stroke-width="4" 
                        stroke-dasharray="10, 100" 
                        stroke-dashoffset="-90" />
                </svg>
                
                <!-- Center Content - Responsive -->
                <div class="z-10 text-center">
                  <div class="text-2xl sm:text-4xl font-bold gold-text">100%</div>
                  <div class="text-xs sm:text-sm text-gray-600">Receita Total</div>
                </div>
              </div>
            </div>
            
            <!-- Legend -->
            <div class="grid grid-cols-2 gap-4">
              <div class="flex items-center">
                <div class="w-4 h-4 rounded-full bg-[#D4AF37] mr-3"></div>
                <div>
                  <p class="font-medium">Taxa de corretagem</p>
                  <p class="text-sm text-gray-500">30%</p>
                </div>
              </div>
              
              <div class="flex items-center">
                <div class="w-4 h-4 rounded-full bg-[#4ADE80] mr-3"></div>
                <div>
                  <p class="font-medium">Taxa por anúncio</p>
                  <p class="text-sm text-gray-500">25%</p>
                </div>
              </div>
              
              <div class="flex items-center">
                <div class="w-4 h-4 rounded-full bg-[#3B82F6] mr-3"></div>
                <div>
                  <p class="font-medium">Comissões</p>
                  <p class="text-sm text-gray-500">20%</p>
                </div>
              </div>
              
              <div class="flex items-center">
                <div class="w-4 h-4 rounded-full bg-[#8B5CF6] mr-3"></div>
                <div>
                  <p class="font-medium">Taxa exclusivos</p>
                  <p class="text-sm text-gray-500">15%</p>
                </div>
              </div>
              
              <div class="flex items-center">
                <div class="w-4 h-4 rounded-full bg-[#EC4899] mr-3"></div>
                <div>
                  <p class="font-medium">Token (IMB)</p>
                  <p class="text-sm text-gray-500">10%</p>
                </div>
              </div>
              
              <div class="flex items-center">
                <div class="w-4 h-4 rounded-full bg-gray-200 mr-3"></div>
                <div>
                  <p class="font-medium">Dados (futuro)</p>
                  <p class="text-sm text-gray-500">em desenvolvimento</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Right: Revenue Details -->
        <div class="lg:w-1/2 animate-on-scroll" style="animation-delay: 0.3s;">
          <div class="space-y-6">
            <!-- Revenue Stream 1 -->
            <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div class="flex items-start">
                <div class="w-14 h-14 rounded-xl bg-gold-gradient flex items-center justify-center flex-shrink-0 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h4 class="text-xl font-bold mb-2">Taxa de corretagem</h4>
                  <p class="text-gray-600 mb-4">
                    Comissão por venda realizada através da plataforma, variando de
                    0,5% a 2% do valor do imóvel.
                  </p>
                  <div class="flex items-center text-sm text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <span>Principal fonte de receita</span>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Revenue Stream 2 -->
            <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div class="flex items-start">
                <div class="w-14 h-14 rounded-xl bg-gold-gradient flex items-center justify-center flex-shrink-0 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                </div>
                <div>
                  <h4 class="text-xl font-bold mb-2">Taxa fixa por anúncio</h4>
                  <p class="text-gray-600 mb-4">
                    Taxa mensal ou anual para construtoras e incorporadoras anunciarem 
                    seus lançamentos na plataforma.
                  </p>
                  <div class="flex items-center text-sm text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Receita recorrente previsível</span>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Revenue Stream 3 -->
            <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div class="flex items-start">
                <div class="w-14 h-14 rounded-xl bg-gold-gradient flex items-center justify-center flex-shrink-0 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <div>
                  <h4 class="text-xl font-bold mb-2">Comissões em financiamentos</h4>
                  <p class="text-gray-600 mb-4">
                    Comissões por indicação de financiamentos e consórcios realizados 
                    diretamente pela plataforma.
                  </p>
                  <div class="flex items-center text-sm text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <span>Potencial de crescimento elevado</span>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Revenue Stream 4 -->
            <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div class="flex items-start">
                <div class="w-14 h-14 rounded-xl bg-gold-gradient flex items-center justify-center flex-shrink-0 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 class="text-xl font-bold mb-2">Taxa para exclusivos</h4>
                  <p class="text-gray-600 mb-4">
                    Taxa premium para lançamentos exclusivos ou participação em 
                    leilões privados na plataforma.
                  </p>
                  <div class="flex items-center text-sm text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <span>Modelo de alta margem</span>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Revenue Stream 5 -->
            <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div class="flex items-start">
                <div class="w-14 h-14 rounded-xl bg-gold-gradient flex items-center justify-center flex-shrink-0 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 class="text-xl font-bold mb-2">Token próprio (IMB)</h4>
                  <p class="text-gray-600 mb-4">
                    Valorização do token próprio (IMB) através do sistema de cashback
                    e circulação dentro do ecossistema.
                  </p>
                  <div class="flex items-center text-sm text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    <span>Modelo inovador no setor</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Financial Projection -->
      <div class="bg-lanca-gray rounded-3xl p-8 md:p-12 animate-on-scroll">
        <h3 class="text-2xl md:text-3xl font-bold text-center mb-10">
          Projeção Financeira <span class="gold-text">2025-2027</span>
        </h3>
        
        <div class="overflow-x-auto">
          <table class="w-full min-w-[800px]">
            <thead>
              <tr>
                <th class="text-left py-4 px-4 font-semibold text-gray-500">Fonte de Receita</th>
                <th class="text-center py-4 px-4 font-semibold text-gray-500">Ano 1 (2025)</th>
                <th class="text-center py-4 px-4 font-semibold text-gray-500">Ano 2 (2026)</th>
                <th class="text-center py-4 px-4 font-semibold text-gray-500">Ano 3 (2027)</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-t border-gray-200">
                <td class="py-4 px-4 font-medium">Taxa de corretagem</td>
                <td class="py-4 px-4 text-center">R$ 600 mil</td>
                <td class="py-4 px-4 text-center">R$ 1,8 milhão</td>
                <td class="py-4 px-4 text-center">R$ 4,5 milhões</td>
              </tr>
              <tr class="border-t border-gray-200">
                <td class="py-4 px-4 font-medium">Taxa fixa por anúncio</td>
                <td class="py-4 px-4 text-center">R$ 500 mil</td>
                <td class="py-4 px-4 text-center">R$ 1,5 milhão</td>
                <td class="py-4 px-4 text-center">R$ 3,75 milhões</td>
              </tr>
              <tr class="border-t border-gray-200">
                <td class="py-4 px-4 font-medium">Comissões em financiamentos</td>
                <td class="py-4 px-4 text-center">R$ 400 mil</td>
                <td class="py-4 px-4 text-center">R$ 1,2 milhão</td>
                <td class="py-4 px-4 text-center">R$ 3 milhões</td>
              </tr>
              <tr class="border-t border-gray-200">
                <td class="py-4 px-4 font-medium">Taxa para exclusivos</td>
                <td class="py-4 px-4 text-center">R$ 300 mil</td>
                <td class="py-4 px-4 text-center">R$ 900 mil</td>
                <td class="py-4 px-4 text-center">R$ 2,25 milhões</td>
              </tr>
              <tr class="border-t border-gray-200">
                <td class="py-4 px-4 font-medium">Token próprio (IMB)</td>
                <td class="py-4 px-4 text-center">R$ 200 mil</td>
                <td class="py-4 px-4 text-center">R$ 600 mil</td>
                <td class="py-4 px-4 text-center">R$ 1,5 milhão</td>
              </tr>
              <tr class="border-t border-gray-200 font-bold bg-white">
                <td class="py-4 px-4 gold-text">Receita Total</td>
                <td class="py-4 px-4 text-center">R$ 2 milhões</td>
                <td class="py-4 px-4 text-center">R$ 6 milhões</td>
                <td class="py-4 px-4 text-center">R$ 15 milhões</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div class="mt-8 text-center">
          <p class="text-gray-600 max-w-3xl mx-auto">
            Projetamos um crescimento sustentável de 3x ao ano, com base em benchmarks do setor 
            e nossa estratégia de expansão geográfica e ampliação de serviços.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.revenue-segment {
  transition: stroke-dasharray 1s ease-in-out;
}
</style>