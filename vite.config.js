import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),

    VitePWA({
      registerType: 'autoUpdate',

      manifest: {
        name: 'NeoLock',
        short_name: 'NeoLock',

        description:
          'Automação residencial e fechaduras digitais',

        theme_color: '#00b050',

        background_color: '#ffffff',

        display: 'standalone',

        icons: [
          {
            src: '/icon.png',
            sizes: '192x192',
            type: 'image/png'
          },

          {
            src: '/icon.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})