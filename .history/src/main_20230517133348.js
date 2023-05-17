import { createApp } from 'vue'
import {createRouter} from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

const router = createRouter({
history: createWebHistory(),
routes: [],
})




loadFonts()

createApp(App)
  .use(vuetify)
  .use(router)
  .mount('#app')
