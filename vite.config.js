import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  base: '/pinchy-dash/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['vite.svg'],
      manifest: {
        name: 'Pinchy Dash',
        short_name: 'PinchyDash',
        description: 'Pinchy Dash - React PWA app',
        theme_color: '#242424',
        background_color: '#242424',
        display: 'standalone',
        start_url: '/pinchy-dash/',
        scope: '/pinchy-dash/',
        icons: [
          {
            src: '/pinchy-dash/vite.svg',
            sizes: 'any',
            type: 'image/svg+xml',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ]
})
