import { createApp } from 'vue'
import {createRouter} from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import Home from '@/views/Home.vue'

const router = createRouter({
history: createWebHistory(),
routes: [
  {path: '/', name: 'Home', component: Home}
]
})




loadFonts()

createApp(App)
  .use(vuetify)
  .use(router)
  .mount('#app')
