import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base URL for GitHub Pages - update this with your repository name
  // If your repo is https://github.com/username/portfolio-website, use '/portfolio-website/'
  base: '/portfolio-website/', 
})
