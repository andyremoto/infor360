<template>
  <section id="valuation" class="section bg-lanca-gray relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 overflow-hidden z-0">
      <div class="absolute -left-24 top-1/3 w-72 h-72 rounded-full border-2 border-dashed border-lanca-gold opacity-10"></div>
      <div class="absolute -right-24 bottom-1/3 w-80 h-80 rounded-full border border-lanca-gold opacity-5"></div>
    </div>
    
    <div class="container relative z-10">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
        <h2 class="mb-4 inline-block relative">
          <span class="gold-text">Valuation Inicial</span>
          <span class="absolute -bottom-2 left-0 w-full h-1 bg-gold-gradient"></span>
        </h2>
        <p class="text-lg text-gray-700">
          Análise financeira detalhada da proposta de investimento e potencial 
          de valorização da empresa
        </p>
      </div>
      
      <!-- Valuation Overview -->
      <div class="flex flex-col lg:flex-row gap-10 mb-20">
        <!-- Left: Valuation Range -->
        <div class="lg:w-2/5 animate-on-scroll">
          <div class="bg-white rounded-3xl shadow-lg p-8 md:p-10 h-full">
            <h3 class="text-2xl font-bold mb-6">Avaliação estimada:</h3>
            
            <!-- Valuation Range Visualization -->
            <div class="relative h-32 mb-10">
              <div class="absolute inset-x-0 top-1/2 h-1 bg-gray-200 transform -translate-y-1/2"></div>
              
              <!-- Minimum Point -->
              <div class="absolute left-0 top-1/2 transform -translate-y-1/2">
                <div class="relative">
                  <div class="w-4 h-4 rounded-full bg-gold-gradient"></div>
                  <div class="absolute top-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                    <p class="font-bold text-lg">R$ 8 milhões</p>
                    <p class="text-xs text-gray-500 text-center">Avaliação mínima</p>
                  </div>
                </div>
              </div>
              
              <!-- Middle Point -->
              <div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div class="relative">
                  <div class="w-6 h-6 rounded-full bg-gold-gradient flex items-center justify-center">
                    <div class="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  <div class="absolute -top-16 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                    <p class="font-bold text-2xl gold-text">R$ 10 milhões</p>
                    <p class="text-xs text-gray-500 text-center">Avaliação atual</p>
                  </div>
                </div>
              </div>
              
              <!-- Maximum Point -->
              <div class="absolute right-0 top-1/2 transform -translate-y-1/2">
                <div class="relative">
                  <div class="w-4 h-4 rounded-full bg-gold-gradient"></div>
                  <div class="absolute top-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                    <p class="font-bold text-lg">R$ 12 milhões</p>
                    <p class="text-xs text-gray-500 text-center">Avaliação máxima</p>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Valuation Factors -->
            <div class="space-y-5">
              <h4 class="font-bold">Baseado em:</h4>
              
              <div class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-lanca-gold mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <div>
                  <p class="font-medium">Benchmarks de mercado</p>
                  <p class="text-sm text-gray-600">Comparação com plataformas como Loft, Apto, QuintoAndar</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-lanca-gold mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <div>
                  <p class="font-medium">Projeção de vendas</p>
                  <p class="text-sm text-gray-600">R$ 2 milhões no ano 1, com expansão rápida em anos subsequentes</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-lanca-gold mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <div>
                  <p class="font-medium">Potencial de escala</p>
                  <p class="text-sm text-gray-600">Expansão nacional e futura internacionalização</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-lanca-gold mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <div>
                  <p class="font-medium">Token próprio (IMB)</p>
                  <p class="text-sm text-gray-600">Valorização adicional por meio do token e economia paralela</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Right: Financial Projections -->
        <div class="lg:w-3/5 animate-on-scroll" style="animation-delay: 0.3s;">
          <div class="bg-white rounded-3xl shadow-lg p-8 md:p-10">
            <h3 class="text-2xl font-bold mb-8">Projeção financeira (5 anos)</h3>
            
            <!-- Growth Graph -->
            <div class="h-64 relative mb-10">
              <!-- Graph Grid Lines -->
              <div class="absolute inset-0">
                <!-- Horizontal Grid Lines -->
                <div class="absolute top-0 left-0 right-0 h-px bg-gray-200"></div>
                <div class="absolute top-1/4 left-0 right-0 h-px bg-gray-200"></div>
                <div class="absolute top-2/4 left-0 right-0 h-px bg-gray-200"></div>
                <div class="absolute top-3/4 left-0 right-0 h-px bg-gray-200"></div>
                <div class="absolute bottom-0 left-0 right-0 h-px bg-gray-200"></div>
                
                <!-- Vertical Grid Lines -->
                <div class="absolute top-0 bottom-0 left-0 w-px bg-gray-200"></div>
                <div class="absolute top-0 bottom-0 left-1/5 w-px bg-gray-200"></div>
                <div class="absolute top-0 bottom-0 left-2/5 w-px bg-gray-200"></div>
                <div class="absolute top-0 bottom-0 left-3/5 w-px bg-gray-200"></div>
                <div class="absolute top-0 bottom-0 left-4/5 w-px bg-gray-200"></div>
                <div class="absolute top-0 bottom-0 right-0 w-px bg-gray-200"></div>
              </div>
              
              <!-- Graph Lines -->
              <svg viewBox="0 0 500 200" class="w-full h-full">
                <!-- Revenue Line -->
                <path d="M0,190 L100,180 L200,150 L300,100 L400,40 L500,10" fill="none" stroke="#D4AF37" stroke-width="3" />
                
                <!-- Valuation Line -->
                <path d="M0,180 L100,160 L200,120 L300,70 L400,20 L500,5" fill="none" stroke="#3B82F6" stroke-width="3" />
                
                <!-- Revenue Points -->
                <circle cx="0" cy="190" r="4" fill="#D4AF37" />
                <circle cx="100" cy="180" r="4" fill="#D4AF37" />
                <circle cx="200" cy="150" r="4" fill="#D4AF37" />
                <circle cx="300" cy="100" r="4" fill="#D4AF37" />
                <circle cx="400" cy="40" r="4" fill="#D4AF37" />
                <circle cx="500" cy="10" r="4" fill="#D4AF37" />
                
                <!-- Valuation Points -->
                <circle cx="0" cy="180" r="4" fill="#3B82F6" />
                <circle cx="100" cy="160" r="4" fill="#3B82F6" />
                <circle cx="200" cy="120" r="4" fill="#3B82F6" />
                <circle cx="300" cy="70" r="4" fill="#3B82F6" />
                <circle cx="400" cy="20" r="4" fill="#3B82F6" />
                <circle cx="500" cy="5" r="4" fill="#3B82F6" />
              </svg>
              
              <!-- Y-Axis Labels (Revenue) -->
              <div class="absolute top-0 left-0 transform -translate-x-20 text-xs text-gray-500">R$100M</div>
              <div class="absolute top-1/4 left-0 transform -translate-x-20 text-xs text-gray-500">R$75M</div>
              <div class="absolute top-2/4 left-0 transform -translate-x-20 text-xs text-gray-500">R$50M</div>
              <div class="absolute top-3/4 left-0 transform -translate-x-20 text-xs text-gray-500">R$25M</div>
              <div class="absolute bottom-0 left-0 transform -translate-x-20 text-xs text-gray-500">R$2M</div>
              
              <!-- X-Axis Labels (Years) -->
              <div class="absolute bottom-0 left-0 transform translate-y-6 text-xs text-gray-500">Ano 1</div>
              <div class="absolute bottom-0 left-1/5 transform translate-y-6 text-xs text-gray-500">Ano 2</div>
              <div class="absolute bottom-0 left-2/5 transform translate-y-6 text-xs text-gray-500">Ano 3</div>
              <div class="absolute bottom-0 left-3/5 transform translate-y-6 text-xs text-gray-500">Ano 4</div>
              <div class="absolute bottom-0 left-4/5 transform translate-y-6 text-xs text-gray-500">Ano 5</div>
            </div>
            
            <!-- Graph Legend -->
            <div class="flex justify-center space-x-8 mb-8">
              <div class="flex items-center">
                <div class="w-4 h-1 bg-[#D4AF37] mr-2"></div>
                <span class="text-sm">Receita</span>
              </div>
              <div class="flex items-center">
                <div class="w-4 h-1 bg-[#3B82F6] mr-2"></div>
                <span class="text-sm">Valuation</span>
              </div>
            </div>
            
            <!-- Key Financial Metrics -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div class="bg-lanca-gray rounded-xl p-4">
                <p class="text-sm text-gray-500 mb-1">Receita Ano 5</p>
                <p class="text-xl font-bold">R$ 100 milhões</p>
              </div>
              
              <div class="bg-lanca-gray rounded-xl p-4">
                <p class="text-sm text-gray-500 mb-1">Valuation Ano 5</p>
                <p class="text-xl font-bold gold-text">R$ 120 milhões</p>
              </div>
              
              <div class="bg-lanca-gray rounded-xl p-4">
                <p class="text-sm text-gray-500 mb-1">ROI estimado</p>
                <p class="text-xl font-bold">1200%</p>
              </div>
              
              <div class="bg-lanca-gray rounded-xl p-4">
                <p class="text-sm text-gray-500 mb-1">CAGR</p>
                <p class="text-xl font-bold">165%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Valuation Comparison -->
      <div class="bg-white rounded-3xl shadow-xl p-8 md:p-12 animate-on-scroll">
        <h3 class="text-2xl md:text-3xl font-bold text-center mb-10">
          Comparativo com <span class="gold-text">empresas do setor</span>
        </h3>
        
        <div class="overflow-x-auto">
          <table class="w-full min-w-[900px] mb-8">
            <thead>
              <tr class="border-b-2 border-gray-200">
                <th class="py-4 px-4 text-left text-gray-500">Empresa</th>
                <th class="py-4 px-4 text-center text-gray-500">Fundação</th>
                <th class="py-4 px-4 text-center text-gray-500">Rodada Inicial</th>
                <th class="py-4 px-4 text-center text-gray-500">Valuation Atual</th>
                <th class="py-4 px-4 text-center text-gray-500">Crescimento</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-gray-200">
                <td class="py-4 px-4 font-medium">QuintoAndar</td>
                <td class="py-4 px-4 text-center">2012</td>
                <td class="py-4 px-4 text-center">R$ 1,6 milhão</td>
                <td class="py-4 px-4 text-center">R$ 5,1 bilhões</td>
                <td class="py-4 px-4 text-center text-green-600">+318.650%</td>
              </tr>
              <tr class="border-b border-gray-200">
                <td class="py-4 px-4 font-medium">Loft</td>
                <td class="py-4 px-4 text-center">2018</td>
                <td class="py-4 px-4 text-center">R$ 12 milhões</td>
                <td class="py-4 px-4 text-center">R$ 2,9 bilhões</td>
                <td class="py-4 px-4 text-center text-green-600">+24.066%</td>
              </tr>
              <tr class="border-b border-gray-200">
                <td class="py-4 px-4 font-medium">Apto</td>
                <td class="py-4 px-4 text-center">2019</td>
                <td class="py-4 px-4 text-center">R$ 6,5 milhões</td>
                <td class="py-4 px-4 text-center">R$ 350 milhões</td>
                <td class="py-4 px-4 text-center text-green-600">+5.284%</td>
              </tr>
              <tr class="border-b border-gray-200 bg-gold-gradient/5">
                <td class="py-4 px-4 font-bold">Lança 360</td>
                <td class="py-4 px-4 text-center">2024</td>
                <td class="py-4 px-4 text-center font-bold">R$ 10 milhões</td>
                <td class="py-4 px-4 text-center text-gray-500 italic">Fase inicial</td>
                <td class="py-4 px-4 text-center">-</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div class="bg-lanca-gray rounded-xl p-6">
          <p class="text-center font-bold text-xl mb-3">Oportunidade de investimento exclusiva</p>
          <p class="text-center text-gray-600 max-w-3xl mx-auto">
            O mercado de proptechs no Brasil demonstra um potencial de valorização incrível. 
            Investidores iniciais tiveram retornos extraordinários em empresas similares. 
            O Lança 360 combina as melhores características dessas plataformas com diferenciais 
            inovadores exclusivos.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.left-1\/5 {
  left: 20%;
}
.left-2\/5 {
  left: 40%;
}
.left-3\/5 {
  left: 60%;
}
.left-4\/5 {
  left: 80%;
}
</style>