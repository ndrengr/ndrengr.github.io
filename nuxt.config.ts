import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['./app/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: []
    }
  },
  content: {
    build: {
      markdown: { 
        toc: { depth: 3 },
        contentHeading: false,
        highlight: {
          theme: { default: 'github-light', dark: 'github-dark' },
          langs: ['c', 'csharp', 'php', 'java', 'javascript', 'typescript', 'bash', 'html', 'go', 'batch']
        }
      },
    }
  },
  ui: {
    prose: true
  },
  modules: [
    '@nuxt/content',
    '@nuxt/ui'
  ]
})
