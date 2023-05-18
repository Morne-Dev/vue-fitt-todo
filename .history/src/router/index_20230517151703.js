import {createWebHistory, createRouter} from 'vue-router'
import Home from '@/views/Home.vue'
import Account from '@/views/Account.vue'
import Team from '@/views/Team.vue'

const routes = [
    {path: '/Home', name: 'Home', component: Home},
    {path: '/Account', name: 'Account', component: Account},
    {path: '/Team', name: 'Team', component: Team}
  ]

const router = createRouter({
history: createWebHistory(),
routes
})

export default router