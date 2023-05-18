import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
import vuetify from 'vite-plugin-vuetify'
import { fileURLToPath } from "url";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
		  "@": path.resolve(path.dirname(fileURLToPath(import.meta.url)), "src"),
		},
	  },
  plugins: [
		vue(),
		vuetify({ autoImport: true }),
		server.hmr.overlay: false,
	],
})
