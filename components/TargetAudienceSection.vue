<template>
  <section id="target" class="section bg-lanca-gray relative overflow-hidden">
    <!-- Background Patterns -->
    <div class="absolute left-0 top-1/4 w-64 h-64 opacity-10">
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="w-full h-full text-lanca-gold">
        <path fill="currentColor" d="M47.5,-61.2C61.9,-55.1,74.2,-41.7,79.6,-25.9C85,-10.1,83.6,8.1,76.4,22.6C69.3,37.2,56.5,48.1,42.5,55.3C28.5,62.5,13.2,65.9,-1.8,68.3C-16.9,70.6,-33.8,71.8,-47.3,64.5C-60.8,57.2,-70.9,41.4,-74.4,24.8C-77.9,8.3,-74.8,-9,-67.5,-23.1C-60.2,-37.3,-48.6,-48.3,-36,-54.4C-23.3,-60.5,-9.6,-61.7,3.6,-66.4C16.9,-71.1,33.1,-67.3,47.5,-61.2Z" transform="translate(100 100)" />
      </svg>
    </div>
    
    <div class="container relative z-10">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
        <h2 class="mb-4 inline-block relative">
          <span class="gold-text">Público-Alvo</span>
          <span class="absolute -bottom-2 left-0 w-full h-1 bg-gold-gradient"></span>
        </h2>
        <p class="text-lg text-gray-700">
          Uma plataforma completa criada para atender as necessidades de todos 
          os participantes do ecossistema imobiliário
        </p>
      </div>
      
      <!-- Persona Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <!-- Persona 1: Investors -->
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 animate-on-scroll">
          <!-- Persona Image -->
          <div class="h-48 bg-gradient-to-r from-blue-500 to-indigo-600 relative overflow-hidden">
            <div class="absolute inset-0 opacity-40 bg-gradient-to-b from-transparent to-black"></div>
            <img 
              src="/images/investor-persona.png" 
              alt="Investor Persona" 
              class="w-full h-full object-cover opacity-75"
            />
            <div class="absolute inset-0 flex items-end p-6">
              <div>
                <div class="bg-gold-gradient text-white text-xs rounded-full py-1 px-3 mb-2 inline-block">Investidores</div>
                <h3 class="text-white text-2xl font-bold">Investidores</h3>
              </div>
            </div>
          </div>
          
          <!-- Persona Description -->
          <div class="p-6">
            <div class="flex items-center mb-4">
              <div class="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 class="text-lg font-bold">Perfil</h4>
            </div>
            <p class="text-gray-600 mb-4">
              Investidores de pequeno, médio e grande porte que buscam oportunidades 
              no mercado imobiliário com alta rentabilidade e análises claras.
            </p>
            
            <h5 class="font-bold mb-2 text-sm text-gray-500">INTERESSES PRINCIPAIS</h5>
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Rentabilidade</span>
              <span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Comparação</span>
              <span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Diversificação</span>
              <span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Oportunidades</span>
            </div>
            
            <div class="pt-4 border-t border-gray-100">
              <div class="flex justify-between items-center">
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-lanca-gold mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <span class="text-sm font-medium">Alto potencial</span>
                </div>
                <div>
                  <div class="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div class="w-4/5 h-full bg-gold-gradient"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Persona 2: Final Buyers -->
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 animate-on-scroll" style="animation-delay: 0.2s;">
          <!-- Persona Image -->
          <div class="h-48 bg-gradient-to-r from-emerald-500 to-green-600 relative overflow-hidden">
            <div class="absolute inset-0 opacity-40 bg-gradient-to-b from-transparent to-black"></div>
            <img 
              src="/images/buyer-persona.png" 
              alt="Buyer Persona" 
              class="w-full h-full object-cover opacity-75"
            />
            <div class="absolute inset-0 flex items-end p-6">
              <div>
                <div class="bg-gold-gradient text-white text-xs rounded-full py-1 px-3 mb-2 inline-block">Compradores</div>
                <h3 class="text-white text-2xl font-bold">Compradores finais</h3>
              </div>
            </div>
          </div>
          
          <!-- Persona Description -->
          <div class="p-6">
            <div class="flex items-center mb-4">
              <div class="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h4 class="text-lg font-bold">Perfil</h4>
            </div>
            <p class="text-gray-600 mb-4">
              Compradores que buscam lançamentos imobiliários para moradia própria, 
              com foco em qualidade, localização e condições de pagamento.
            </p>
            
            <h5 class="font-bold mb-2 text-sm text-gray-500">INTERESSES PRINCIPAIS</h5>
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Visualização 3D</span>
              <span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Financiamento</span>
              <span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Localização</span>
              <span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Cashback</span>
            </div>
            
            <div class="pt-4 border-t border-gray-100">
              <div class="flex justify-between items-center">
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-lanca-gold mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <span class="text-sm font-medium">Médio potencial</span>
                </div>
                <div>
                  <div class="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div class="w-3/5 h-full bg-gold-gradient"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Persona 3: Companies -->
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 animate-on-scroll" style="animation-delay: 0.4s;">
          <!-- Persona Image -->
          <div class="h-48 bg-gradient-to-r from-purple-500 to-violet-600 relative overflow-hidden">
            <div class="absolute inset-0 opacity-40 bg-gradient-to-b from-transparent to-black"></div>
            <img 
              src="/images/company-persona.png" 
              alt="Company Persona" 
              class="w-full h-full object-cover opacity-75"
            />
            <div class="absolute inset-0 flex items-end p-6">
              <div>
                <div class="bg-gold-gradient text-white text-xs rounded-full py-1 px-3 mb-2 inline-block">Empresas</div>
                <h3 class="text-white text-2xl font-bold">Empresas do setor</h3>
              </div>
            </div>
          </div>
          
          <!-- Persona Description -->
          <div class="p-6">
            <div class="flex items-center mb-4">
              <div class="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h4 class="text-lg font-bold">Perfil</h4>
            </div>
            <p class="text-gray-600 mb-4">
              Incorporadoras, construtoras e corretores que buscam maior visibilidade, 
              alcance nacional e rastreabilidade de clientes.
            </p>
            
            <h5 class="font-bold mb-2 text-sm text-gray-500">INTERESSES PRINCIPAIS</h5>
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Marketing</span>
              <span class="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Vendas</span>
              <span class="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Rastreamento</span>
              <span class="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Dados</span>
            </div>
            
            <div class="pt-4 border-t border-gray-100">
              <div class="flex justify-between items-center">
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-lanca-gold mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <span class="text-sm font-medium">Alto potencial</span>
                </div>
                <div>
                  <div class="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div class="w-full h-full bg-gold-gradient"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Market Approach -->
      <div class="bg-white rounded-3xl shadow-xl overflow-hidden animate-on-scroll">
        <div class="flex flex-col md:flex-row">
          <!-- Left Side: Content -->
          <div class="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <h3 class="text-2xl md:text-3xl font-bold mb-6">
              <span class="gold-text">Estratégia</span> de penetração no mercado
            </h3>
            <p class="text-gray-600 mb-8">
              Nossa abordagem foca em atingir os três pilares fundamentais do mercado imobiliário, 
              criando um ecossistema onde todos ganham.
            </p>
            
            <div class="space-y-6">
              <div class="flex items-start">
                <div class="w-12 h-12 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center mr-4">
                  <span class="font-bold text-blue-600">1</span>
                </div>
                <div>
                  <h4 class="font-bold mb-1">Parceria com construtoras</h4>
                  <p class="text-sm text-gray-600">
                    Estabelecer parcerias estratégicas com as principais construtoras 
                    para garantir exclusividade em lançamentos.
                  </p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="w-12 h-12 rounded-full bg-green-100 flex-shrink-0 flex items-center justify-center mr-4">
                  <span class="font-bold text-green-600">2</span>
                </div>
                <div>
                  <h4 class="font-bold mb-1">Marketing para investidores</h4>
                  <p class="text-sm text-gray-600">
                    Campanhas direcionadas para investidores, destacando a análise 
                    comparativa de rentabilidade e facilidade de gestão.
                  </p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="w-12 h-12 rounded-full bg-purple-100 flex-shrink-0 flex items-center justify-center mr-4">
                  <span class="font-bold text-purple-600">3</span>
                </div>
                <div>
                  <h4 class="font-bold mb-1">Expansão geográfica</h4>
                  <p class="text-sm text-gray-600">
                    Início nas principais capitais, com rápida expansão para cidades 
                    médias com alto potencial de crescimento imobiliário.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Right Side: Image -->
          <div class="md:w-1/2 bg-lanca-gold/90">
            <div class="min-h-[500px] md:min-h-[600px] flex items-center justify-center p-6 sm:p-8 md:p-0">
              <div class="max-w-md">
                <div class="relative max-w-sm mx-auto">
                  <div class="absolute inset-0 transform rotate-1 bg-lanca-black/5 rounded-xl"></div>
                  <div class="relative bg-white p-6 sm:p-8 rounded-xl shadow-md">
                    <div class="flex items-center justify-between mb-8">
                      <h4 class="text-xl font-bold">Metas de Crescimento</h4>
                      <div class="text-sm text-gray-500">2023-2025</div>
                    </div>
                    
                    <!-- Chart Visualization - Improved proportions & spacing -->
                    <div class="h-56 sm:h-64 flex items-end justify-center space-x-10 sm:space-x-14 mb-8 sm:mb-10 px-4">
                      <div class="flex flex-col items-center">
                        <div class="w-12 sm:w-14 bg-blue-500 opacity-70 rounded-t-lg" style="height: 40px;"></div>
                        <div class="w-12 sm:w-14 bg-lanca-gold rounded-t-lg" style="height: 60px;"></div>
                        <div class="mt-3 text-sm font-medium">Ano 1</div>
                      </div>
                      
                      <div class="flex flex-col items-center">
                        <div class="w-12 sm:w-14 bg-blue-500 opacity-70 rounded-t-lg" style="height: 60px;"></div>
                        <div class="w-12 sm:w-14 bg-lanca-gold rounded-t-lg" style="height: 80px;"></div>
                        <div class="mt-3 text-sm font-medium">Ano 2</div>
                      </div>
                      
                      <div class="flex flex-col items-center">
                        <div class="w-12 sm:w-14 bg-blue-500 opacity-70 rounded-t-lg" style="height: 80px;"></div>
                        <div class="w-12 sm:w-14 bg-lanca-gold rounded-t-lg" style="height: 100px;"></div>
                        <div class="mt-3 text-sm font-medium">Ano 3</div>
                      </div>
                    </div>
                    
                    <!-- Legend -->
                    <div class="flex justify-center space-x-12 pt-2">
                      <div class="flex items-center">
                        <div class="w-4 h-4 bg-blue-500 opacity-70 rounded-sm mr-2"></div>
                        <span class="text-sm">Usuários</span>
                      </div>
                      <div class="flex items-center">
                        <div class="w-4 h-4 bg-lanca-gold rounded-sm mr-2"></div>
                        <span class="text-sm">Volume de vendas</span>
                      </div>
                    </div>
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