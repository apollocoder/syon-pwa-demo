import basicSsl from '@vitejs/plugin-basic-ssl'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    basicSsl(),
    VitePWA({
      devOptions: { enabled: true },
      registerType: 'prompt',
      includeAssets: ['/vite.svg'],
      manifest: {
        name: 'SYON PWA',
        short_name: 'SYON',
        description: 'SYON PWA Demo',
        theme_color: '#22252d',
        background_color: '#22252d',
        display: 'standalone',
        orientation: 'portrait',
        start_url: '/',
        icons: [
          {
            src: '/vite.svg',
            sizes: '192x192',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})
