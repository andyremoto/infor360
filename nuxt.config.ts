// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  plugins: [
    '~/plugins/amplify.js'
  ],
  tailwindcss: {
    configPath: '~/tailwind.config.js',
    exposeConfig: false,
    viewer: true,
  },
  ssr: false,
  nitro: {
    preset: 'aws-amplify',
    serveStatic: true,
    prerender: {
      // Fallback property has been removed as it's not supported
    }
  },
  app: {
    head: {
      title: 'Lança 360° - O futuro do investimento imobiliário',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=5' },
        { name: 'theme-color', content: '#D4AF37' },
        { name: 'description', content: 'Uma plataforma digital que centraliza todos os lançamentos imobiliários do Brasil, conectando compradores e investidores às oportunidades mais rentáveis.' },
        { property: 'og:title', content: 'Lança 360° - O futuro do investimento imobiliário' },
        { property: 'og:description', content: 'Uma plataforma digital que centraliza todos os lançamentos imobiliários do Brasil, conectando compradores e investidores às oportunidades mais rentáveis.' },
        { property: 'og:image', content: '/icons/web-app-manifest-512x512.png' },
        { property: 'og:url', content: 'https://lanca360.info' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Lança 360° - O futuro do investimento imobiliário' },
        { name: 'twitter:description', content: 'Uma plataforma digital que centraliza todos os lançamentos imobiliários do Brasil, conectando compradores e investidores às oportunidades mais rentáveis.' },
        { name: 'twitter:image', content: '/icons/web-app-manifest-512x512.png' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Playfair+Display:wght@400;500;700&display=swap' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/icons/favicon-96x96.png' },
        { rel: 'icon', type: 'image/svg+xml', href: '/icons/favicon.svg' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/icons/apple-touch-icon.png' },
        { rel: 'manifest', href: '/manifest.json' }
      ]
    }
  }
})