<template>
  <section
    id="contact"
    class="section bg-lanca-black text-white relative overflow-hidden"
  >
    <div class="absolute inset-0 overflow-hidden z-0">
      <!-- Minimalist design elements -->
      <div class="absolute left-0 bottom-0 w-1/3 h-px bg-white opacity-5"></div>
      <div class="absolute right-0 top-0 w-px h-1/3 bg-white opacity-5"></div>

      <!-- Subtle gold accent -->
      <div
        class="absolute left-1/4 bottom-1/4 w-24 h-24 border border-lanca-gold opacity-5"
      ></div>
    </div>

    <div class="container relative z-10">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
        <h2 class="mb-4 inline-block relative">
          <span class="text-white"
            >Entre em <span class="gold-text">Contato</span></span
          >
          <span
            class="absolute -bottom-2 left-0 w-full h-0.5 bg-lanca-gold"
          ></span>
        </h2>
        <p class="text-lg text-gray-300">
          Estamos prontos para responder suas dúvidas e discutir oportunidades
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Form -->
        <div class="animate-on-scroll">
          <div class="bg-white bg-opacity-5 rounded-lg p-8 backdrop-blur-sm">
            <h3 class="text-xl font-bold mb-6">Fale conosco</h3>

            <form>
              <div class="mb-6">
                <label
                  class="block text-sm font-medium text-gray-300 mb-2"
                  for="name"
                  >Nome completo</label
                >
                <input
                  type="text"
                  id="name"
                  class="w-full px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-lanca-gold"
                />
              </div>

              <div class="mb-6">
                <label
                  class="block text-sm font-medium text-gray-300 mb-2"
                  for="email"
                  >Email</label
                >
                <input
                  type="email"
                  id="email"
                  class="w-full px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-lanca-gold"
                />
              </div>

              <div class="mb-6">
                <label
                  class="block text-sm font-medium text-gray-300 mb-2"
                  for="phone"
                  >Telefone</label
                >
                <input
                  type="tel"
                  id="phone"
                  class="w-full px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-lanca-gold"
                />
              </div>

              <div class="mb-6">
                <label
                  class="block text-sm font-medium text-gray-300 mb-2"
                  for="subject"
                  >Assunto</label
                >
                <select
                  id="subject"
                  class="w-full px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-lanca-gold"
                >
                  <option value="investment">Investimento</option>
                  <option value="partnership">Parceria</option>
                  <option value="media">Imprensa</option>
                  <option value="other">Outro</option>
                </select>
              </div>

              <div class="mb-6">
                <label
                  class="block text-sm font-medium text-gray-300 mb-2"
                  for="message"
                  >Mensagem</label
                >
                <textarea
                  id="message"
                  rows="4"
                  class="w-full px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-lanca-gold"
                ></textarea>
              </div>

              <button
                type="submit"
                class="w-full btn border border-lanca-gold text-lanca-gold hover:bg-lanca-gold hover:text-white"
              >
                Enviar mensagem
              </button>
            </form>
          </div>
        </div>

        <!-- Contact Information -->
        <div class="animate-on-scroll" style="animation-delay: 0.2s">
          <div class="space-y-8">
            <!-- Company Information -->
            <div>
              <h3 class="text-xl font-bold mb-4">Lança 360°</h3>
              <p class="text-gray-300 mb-4">
                A plataforma que está revolucionando o mercado imobiliário
                brasileiro, conectando investidores, compradores e construtoras.
              </p>

              <div class="flex items-center mt-6">
                <div
                  class="w-10 h-10 rounded-full border border-lanca-gold flex items-center justify-center mr-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-lanca-gold"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p class="text-sm font-medium text-gray-300">Endereço</p>
                  <p class="text-white">
                    UBT Business Tower - Av. Rondon Pacheco, 4600, Uberlândia -
                    MG
                  </p>
                </div>
              </div>
            </div>

            <!-- Contact Cards -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="bg-white bg-opacity-5 p-4 rounded-lg">
                <div class="flex items-center mb-3">
                  <div
                    class="w-8 h-8 rounded-full border border-lanca-gold flex items-center justify-center mr-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4 text-lanca-gold"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <p class="text-sm font-medium">Email</p>
                </div>
                <a
                  href="mailto:contato@conexusgroup.com.br"
                  class="text-gray-300 hover:text-lanca-gold"
                  >contato@conexusgroup.com.br</a
                >
              </div>

              <div class="bg-white bg-opacity-5 p-4 rounded-lg">
                <div class="flex items-center mb-3">
                  <div
                    class="w-8 h-8 rounded-full border border-lanca-gold flex items-center justify-center mr-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4 text-lanca-gold"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <p class="text-sm font-medium">Telefone</p>
                </div>
                <a
                  href="tel:+5534996773542"
                  class="text-gray-300 hover:text-lanca-gold"
                  >+55 34 99677-3542</a
                >
              </div>
            </div>

            <!-- Social Media -->
            <div>
              <h4 class="text-lg font-medium mb-4">Redes sociais</h4>
              <div class="flex space-x-4">
                <a
                  href="#"
                  class="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-lanca-gold transition-colors"
                >
                  <svg
                    class="w-5 h-5 text-gray-300 hover:text-lanca-gold"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>

                <a
                  href="#"
                  class="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-lanca-gold transition-colors"
                >
                  <svg
                    class="w-5 h-5 text-gray-300 hover:text-lanca-gold"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>

                <a
                  href="#"
                  class="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-lanca-gold transition-colors"
                >
                  <svg
                    class="w-5 h-5 text-gray-300 hover:text-lanca-gold"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                    />
                  </svg>
                </a>

                <a
                  href="#"
                  class="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-lanca-gold transition-colors"
                >
                  <svg
                    class="w-5 h-5 text-gray-300 hover:text-lanca-gold"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <!-- Map -->
            <div class="pt-6">
              <div
                class="h-64 bg-white bg-opacity-5 rounded-lg overflow-hidden"
              >
                <!-- Placeholder for map -->
                <div class="w-full h-full flex items-center justify-center">
                  <p class="text-gray-400">Mapa será carregado aqui</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
