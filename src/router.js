import { createRouter, createWebHistory } from 'vue-router';
import Todo from './views/Todo.vue';
import Home from './views/Home.vue';
import Team from './views/Team.vue';
import Account from './views/Account.vue';

const routes = [
  { path: '/', component: Todo },
  { path: '/Todo', component: Todo },
  { path: '/Home', component: Home },
  { path: '/Team', component: Team },
  { path: '/Account', component: Account }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;