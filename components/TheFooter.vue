<template>
  <footer class="bg-lanca-black relative pt-20 pb-6 overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 overflow-hidden z-0">
      <div
        class="absolute -left-24 -bottom-24 w-72 h-72 rounded-full border-2 border-lanca-gold opacity-10"
      ></div>
      <div
        class="absolute right-0 top-0 w-80 h-80 rounded-full border border-lanca-gold opacity-5"
      ></div>
    </div>

    <div class="container px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Footer Content -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-16"
      >
        <!-- Column 1: Brand & About -->
        <div>
          <!-- Logo with white version -->
          <div class="flex items-center mb-6">
            <div class="relative w-10 h-10 sm:w-12 sm:h-12 mr-2 sm:mr-3">
              <img
                src="/images/logo-white.svg"
                alt="Lança 360 Logo"
                class="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 class="text-lg sm:text-xl font-extrabold flex items-center">
                <span class="gold-text">LANÇA</span>
                <span class="relative ml-1 text-white">360°</span>
              </h1>
              <p class="text-xs text-gray-400">
                Revolução no Mercado Imobiliário
              </p>
            </div>
          </div>

          <p class="text-gray-400 mb-6">
            Uma plataforma digital que centraliza todos os lançamentos
            imobiliários do Brasil, conectando compradores e investidores às
            oportunidades mais rentáveis.
          </p>

          <!-- Social Media - More responsive -->
          <div class="flex space-x-3 sm:space-x-4">
            <!-- LinkedIn -->
            <a
              href="#"
              class="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-lanca-gold border border-transparent hover:border-lanca-gold transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 sm:h-5 sm:w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
                />
              </svg>
            </a>

            <!-- Instagram -->
            <a
              href="#"
              class="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-lanca-gold border border-transparent hover:border-lanca-gold transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 sm:h-5 sm:w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                />
              </svg>
            </a>

            <!-- Twitter -->
            <a
              href="#"
              class="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-lanca-gold border border-transparent hover:border-lanca-gold transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 sm:h-5 sm:w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                />
              </svg>
            </a>

            <!-- Facebook -->
            <a
              href="#"
              class="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-lanca-gold border border-transparent hover:border-lanca-gold transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 sm:h-5 sm:w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
                />
              </svg>
            </a>
          </div>
        </div>

        <!-- Column 2: Navigation Links -->
        <div>
          <h4 class="text-lg font-bold text-white mb-6">Navegação</h4>
          <ul class="space-y-4">
            <li>
              <a
                href="#hero"
                class="text-gray-400 hover:text-lanca-gold transition-colors"
                >Início</a
              >
            </li>
            <li>
              <a
                href="#problem"
                class="text-gray-400 hover:text-lanca-gold transition-colors"
                >O Problema</a
              >
            </li>
            <li>
              <a
                href="#solution"
                class="text-gray-400 hover:text-lanca-gold transition-colors"
                >A Solução</a
              >
            </li>
            <li>
              <a
                href="#target"
                class="text-gray-400 hover:text-lanca-gold transition-colors"
                >Público-Alvo</a
              >
            </li>
            <li>
              <a
                href="#monetization"
                class="text-gray-400 hover:text-lanca-gold transition-colors"
                >Monetização</a
              >
            </li>
            <li>
              <a
                href="#market"
                class="text-gray-400 hover:text-lanca-gold transition-colors"
                >Mercado</a
              >
            </li>
            <li>
              <a
                href="#advantages"
                class="text-gray-400 hover:text-lanca-gold transition-colors"
                >Diferenciais</a
              >
            </li>
            <li>
              <a
                href="#valuation"
                class="text-gray-400 hover:text-lanca-gold transition-colors"
                >Valuation</a
              >
            </li>
            <li>
              <a
                href="#investment"
                class="text-gray-400 hover:text-lanca-gold transition-colors"
                >Investimento</a
              >
            </li>
            <li>
              <a
                href="#contact"
                class="text-gray-400 hover:text-lanca-gold transition-colors"
                >Contato</a
              >
            </li>
          </ul>
        </div>

        <!-- Column 3: Legal Links -->
        <div>
          <h4 class="text-lg font-bold text-white mb-6">Legal</h4>
          <ul class="space-y-4">
            <li>
              <a
                href="#"
                class="text-gray-400 hover:text-lanca-gold transition-colors"
                >Termos de Uso</a
              >
            </li>
            <li>
              <a
                href="#"
                class="text-gray-400 hover:text-lanca-gold transition-colors"
                >Política de Privacidade</a
              >
            </li>
            <li>
              <a
                href="#"
                class="text-gray-400 hover:text-lanca-gold transition-colors"
                >Política de Cookies</a
              >
            </li>
            <li>
              <a
                href="#"
                class="text-gray-400 hover:text-lanca-gold transition-colors"
                >Segurança</a
              >
            </li>
            <li>
              <a
                href="#"
                class="text-gray-400 hover:text-lanca-gold transition-colors"
                >Compliance</a
              >
            </li>
          </ul>

          <h4 class="text-lg font-bold text-white mt-8 mb-6">Recursos</h4>
          <ul class="space-y-4">
            <li>
              <a
                href="#"
                class="text-gray-400 hover:text-lanca-gold transition-colors"
                >Blog</a
              >
            </li>
            <li>
              <a
                href="#"
                class="text-gray-400 hover:text-lanca-gold transition-colors"
                >FAQ</a
              >
            </li>
            <li>
              <a
                href="#"
                class="text-gray-400 hover:text-lanca-gold transition-colors"
                >Imprensa</a
              >
            </li>
          </ul>
        </div>

        <!-- Column 4: Contact Info -->
        <div>
          <h4 class="text-lg font-bold text-white mb-6">Contato</h4>

          <ul class="space-y-4">
            <li class="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-lanca-gold mr-3 mt-0.5"
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
              <div>
                <p class="text-gray-400">E-mail:</p>
                <a
                  href="mailto:contato@conexusgroup.com.br"
                  class="text-white hover:text-lanca-gold transition-colors"
                >
                  contato@conexusgroup.com.br
                </a>
              </div>
            </li>

            <li class="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-lanca-gold mr-3 mt-0.5"
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
              <div>
                <p class="text-gray-400">Telefone:</p>
                <a
                  href="tel:+5534996773542"
                  class="text-white hover:text-lanca-gold transition-colors"
                >
                  +55 (34) 99677-3542
                </a>
              </div>
            </li>

            <li class="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-lanca-gold mr-3 mt-0.5"
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
              <div>
                <p class="text-gray-400">Endereço:</p>
                <p class="text-white">
                  UBT Business Tower<br />
                  Av. Rondon Pacheco, 4600<br />
                  Uberlândia - MG
                </p>
              </div>
            </li>
          </ul>

          <!-- App Store Badges -->
          <div class="mt-8">
            <p class="text-gray-400 mb-4">Em breve disponível em:</p>
            <div class="flex flex-wrap gap-4">
              <!-- App Store -->
              <a
                href="#"
                class="bg-gray-800 rounded-lg p-2 px-3 flex items-center hover:bg-gray-700 transition-colors border border-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-white mr-2"
                  fill="currentColor"
                  viewBox="0 0 384 512"
                >
                  <path
                    d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                  />
                </svg>
                <div>
                  <p class="text-xs text-gray-400">Download on the</p>
                  <p class="text-sm font-semibold text-white">App Store</p>
                </div>
              </a>

              <!-- Google Play -->
              <a
                href="#"
                class="bg-gray-800 rounded-lg p-2 px-3 flex items-center hover:bg-gray-700 transition-colors border border-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-white mr-2"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.6 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
                  />
                </svg>
                <div>
                  <p class="text-xs text-gray-400">GET IT ON</p>
                  <p class="text-sm font-semibold text-white">Google Play</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 border-t border-gray-800 text-center">
        <p class="text-gray-500 text-sm">
          &copy; {{ new Date().getFullYear() }} Lança 360. Todos os direitos
          reservados.
        </p>
      </div>
    </div>

    <!-- Back to Top Button - Mobile responsive -->
    <div class="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 z-50">
      <a
        href="#hero"
        class="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-lanca-black border border-lanca-gold flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 sm:h-6 sm:w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 11l7-7 7 7M5 19l7-7 7 7"
          />
        </svg>
      </a>
    </div>
  </footer>
</template>
