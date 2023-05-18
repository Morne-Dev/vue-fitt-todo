import {createWebHistory, createRouter} from 'vue-router'
import Todo from '@/views/Todo.vue'
import Home from '@/views/Home.vue'
import Account from '@/views/Account.vue'
import Team from '@/views/Team.vue'
import Newuser from '@Newuser.vue'

const routes = [
    {path: '/Todo', name: 'Todo', component: Todo},
    {path: '/Home', name: 'Home', component: Home},
    {path: '/Account', name: 'Account', component: Account},
    {path: '/Team', name: 'Team', component: Team},
    {path: '/Newuser', name: 'Newuser', component: Newuser}
  ]

const router = createRouter({
history: createWebHistory(),
routes
})

export default router