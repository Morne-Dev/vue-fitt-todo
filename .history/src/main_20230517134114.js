import { createApp } from 'vue'
import {createRouter} from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'

const router = createRouter({
history: createWebHistory(),
routes: [
  {path: '/', name: 'Home', component: Home}
  {path: '/About', name: 'About', component: About}
]
})




loadFonts()

createApp(App)
  .use(vuetify)
  .use(router)
  .mount('#app')
