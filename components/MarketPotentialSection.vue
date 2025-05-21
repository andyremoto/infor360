<template>
  <section id="market" class="section bg-lanca-gray relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 overflow-hidden z-0">
      <div
        class="absolute -left-24 -top-24 w-72 h-72 rounded-full border-2 border-dashed border-lanca-gold opacity-10"
      ></div>
      <div
        class="absolute -right-24 -bottom-24 w-80 h-80 rounded-full border border-lanca-gold opacity-5"
      ></div>
    </div>

    <div class="container relative z-10">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
        <h2 class="mb-4 inline-block relative">
          <span class="gold-text">Potencial de Mercado</span>
          <span
            class="absolute -bottom-2 left-0 w-full h-1 bg-gold-gradient"
          ></span>
        </h2>
        <p class="text-lg text-gray-700">
          O mercado imobiliário brasileiro representa uma oportunidade massiva,
          com crescimento consistente e alto potencial para soluções
          tecnológicas
        </p>
      </div>

      <!-- Key Metrics -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <!-- Metric 1 -->
        <div
          class="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 animate-on-scroll"
          style="animation-delay: 0.1s"
        >
          <div
            class="h-32 bg-gold-gradient flex flex-col items-center justify-center text-white p-6"
          >
            <span class="block text-5xl font-bold">R$200B</span>
            <span class="text-sm font-light opacity-90">Mercado anual</span>
          </div>
          <div class="p-6">
            <p class="text-gray-600">
              O mercado imobiliário brasileiro movimenta cerca de R$ 200 bilhões
              por ano, com lançamentos representando aproximadamente 30% desse
              total.
            </p>
            <div class="flex items-center mt-5 pt-4 border-t border-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-blue-500 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
              <span class="text-sm font-medium"
                >Crescimento anual de 5% a 8%</span
              >
            </div>
          </div>
        </div>

        <!-- Metric 2 -->
        <div
          class="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 animate-on-scroll"
          style="animation-delay: 0.2s"
        >
          <div
            class="h-32 bg-gold-gradient flex flex-col items-center justify-center text-white p-6"
          >
            <span class="block text-5xl font-bold">1000+</span>
            <span class="text-sm font-light opacity-90"
              >Lançamentos anuais</span
            >
          </div>
          <div class="p-6">
            <p class="text-gray-600">
              O Brasil tem mais de mil lançamentos imobiliários por ano,
              distribuídos por centenas de construtoras e incorporadoras sem um
              canal unificado.
            </p>
            <div class="flex items-center mt-5 pt-4 border-t border-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-blue-500 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                />
              </svg>
              <span class="text-sm font-medium"
                >Mercado altamente fragmentado</span
              >
            </div>
          </div>
        </div>

        <!-- Metric 3 -->
        <div
          class="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 animate-on-scroll"
          style="animation-delay: 0.3s"
        >
          <div
            class="h-32 bg-gold-gradient flex flex-col items-center justify-center text-white p-6"
          >
            <span class="block text-5xl font-bold">2X</span>
            <span class="text-sm font-light opacity-90"
              >Potencial de expansão</span
            >
          </div>
          <div class="p-6">
            <p class="text-gray-600">
              Com a expansão para o mercado secundário e internacionalização, o
              potencial de crescimento da plataforma pode dobrar nos próximos
              anos.
            </p>
            <div class="flex items-center mt-5 pt-4 border-t border-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-blue-500 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
              <span class="text-sm font-medium">Expansão global planejada</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Market Analysis -->
      <div class="flex flex-col lg:flex-row gap-12 animate-on-scroll">
        <!-- Left: Market Growth Chart -->
        <div class="lg:w-1/2">
          <div class="bg-white rounded-2xl shadow-lg p-8">
            <h3 class="text-2xl font-bold mb-6">
              Crescimento do mercado imobiliário
            </h3>

            <!-- Market Growth Chart Image -->
            <div class="h-64 relative mb-8">
              <img
                src="/images/chart.png"
                alt="Crescimento do mercado imobiliário"
                class="w-full h-full object-contain"
              />
            </div>

            <!-- Legend -->
            <div class="flex justify-center space-x-8">
              <div class="flex items-center">
                <div class="w-4 h-1 bg-[#D4AF37] mr-2"></div>
                <span class="text-sm">Mercado total</span>
              </div>
              <div class="flex items-center">
                <div class="w-4 h-1 bg-[#3B82F6] mr-2"></div>
                <span class="text-sm">Penetração digital</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Market Insights -->
        <div class="lg:w-1/2">
          <div class="space-y-6">
            <!-- Insight 1 -->
            <div class="bg-white rounded-xl shadow-lg p-6">
              <h4 class="text-xl font-bold mb-3 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-lanca-gold mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
                Digitalização do setor
              </h4>
              <p class="text-gray-600 mb-4">
                Apenas 12% das transações imobiliárias no Brasil são totalmente
                digitais, muito abaixo dos 35% observados em mercados mais
                maduros como EUA e Europa.
              </p>
              <div class="bg-blue-50 p-4 rounded-lg">
                <div class="flex justify-between items-center mb-2">
                  <span class="text-sm font-medium"
                    >Penetração digital atual</span
                  >
                  <span class="text-sm font-bold">12%</span>
                </div>
                <div class="w-full h-2 bg-blue-100 rounded-full">
                  <div class="h-full w-[12%] bg-blue-500 rounded-full"></div>
                </div>
              </div>
            </div>

            <!-- Insight 2 -->
            <div class="bg-white rounded-xl shadow-lg p-6">
              <h4 class="text-xl font-bold mb-3 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-lanca-gold mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Investimento imobiliário
              </h4>
              <p class="text-gray-600 mb-4">
                O número de investidores em imóveis cresceu 320% nos últimos 5
                anos, com mais de 3 milhões de brasileiros buscando ativamente
                oportunidades neste mercado.
              </p>
              <div
                class="flex justify-between items-center bg-amber-50 p-4 rounded-lg"
              >
                <div class="text-center">
                  <p class="text-sm text-gray-500">2020</p>
                  <p class="font-bold">800 mil</p>
                </div>
                <div class="text-amber-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
                <div class="text-center">
                  <p class="text-sm text-gray-500">2026</p>
                  <p class="font-bold">3,2 milhões</p>
                </div>
              </div>
            </div>

            <!-- Insight 3 -->
            <div class="bg-white rounded-xl shadow-lg p-6">
              <h4 class="text-xl font-bold mb-3 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-lanca-gold mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
                Proptech em ascensão
              </h4>
              <p class="text-gray-600 mb-4">
                O investimento em startups de Proptech no Brasil cresceu mais de
                570% desde 2017, com mais de R$ 1,2 bilhão investido apenas nos
                últimos 3 anos.
              </p>
              <div class="grid grid-cols-5 gap-2">
                <div class="bg-green-500 opacity-30 h-6 rounded"></div>
                <div class="bg-green-500 opacity-40 h-10 rounded"></div>
                <div class="bg-green-500 opacity-60 h-16 rounded"></div>
                <div class="bg-green-500 opacity-80 h-20 rounded"></div>
                <div class="bg-green-500 h-24 rounded"></div>
              </div>
              <div class="flex justify-between mt-2 text-xs text-gray-500">
                <span>2021</span>
                <span>2022</span>
                <span>2023</span>
                <span>2024</span>
                <span>2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Market Opportunity -->
      <div
        class="bg-white rounded-3xl shadow-xl p-8 md:p-12 mt-20 animate-on-scroll"
      >
        <h3 class="text-2xl md:text-3xl font-bold text-center mb-10">
          <span class="gold-text">Oportunidade</span> de mercado
        </h3>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Left: Market Gap -->
          <div>
            <h4 class="text-xl font-bold mb-4 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-red-500 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              Lacuna atual
            </h4>
            <div class="space-y-4">
              <div class="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-red-500 mt-0.5 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <div>
                  <h5 class="font-medium">Informação descentralizada</h5>
                  <p class="text-sm text-gray-600">
                    Informações de lançamentos espalhadas em centenas de sites e
                    portais diferentes, sem padronização.
                  </p>
                </div>
              </div>

              <div class="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-red-500 mt-0.5 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <div>
                  <h5 class="font-medium">Falta de transparência</h5>
                  <p class="text-sm text-gray-600">
                    Ausência de ferramentas para comparar rentabilidade de
                    diferentes empreendimentos de forma objetiva.
                  </p>
                </div>
              </div>

              <div class="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-red-500 mt-0.5 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <div>
                  <h5 class="font-medium">Processos lentos</h5>
                  <p class="text-sm text-gray-600">
                    Tempo médio para concluir uma transação imobiliária no
                    Brasil é de 90 dias, muito acima de mercados mais avançados.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Right: Our Solution -->
          <div>
            <h4 class="text-xl font-bold mb-4 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-green-500 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
              Nossa solução
            </h4>
            <div class="space-y-4">
              <div class="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-green-500 mt-0.5 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div>
                  <h5 class="font-medium">Centralização completa</h5>
                  <p class="text-sm text-gray-600">
                    Plataforma única que integra todos os lançamentos do Brasil
                    com informações padronizadas e atualizadas em tempo real.
                  </p>
                </div>
              </div>

              <div class="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-green-500 mt-0.5 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div>
                  <h5 class="font-medium">Análise comparativa</h5>
                  <p class="text-sm text-gray-600">
                    Ferramentas avançadas de comparação de rentabilidade,
                    incluindo projeções de valorização e comparativos com
                    investimentos tradicionais.
                  </p>
                </div>
              </div>

              <div class="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-green-500 mt-0.5 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div>
                  <h5 class="font-medium">Transações rápidas</h5>
                  <p class="text-sm text-gray-600">
                    Processo de compra simplificado com reserva online,
                    financiamento integrado e documentação digitalizada.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Quote -->
        <div class="mt-12 border-t border-gray-100 pt-8 text-center">
          <p class="text-xl italic text-gray-600 max-w-3xl mx-auto">
            "O mercado imobiliário brasileiro está pronto para uma revolução
            digital. Quem conseguir centralizar informações, simplificar
            processos e oferecer análises objetivas de rentabilidade terá uma
            vantagem competitiva enorme."
          </p>
          <p class="mt-4 font-bold">Revista Exame, Abril 2025</p>
        </div>
      </div>
    </div>
  </section>
</template>
