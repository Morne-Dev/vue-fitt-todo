import { createStore } from 'vuex';
import user from '../store/modules/user';

export default createStore({
  state: {
    tasks: [
      {
        id: 1,
        title: 'BuyBread',
        description: 'good stuff',
        done: true,
      },
      {
        id: 2,
        title: 'blank',
        description: 'good stuff',
        done: true,
      },
      {
        id: 3,
        title: 'BuyBread',
        description: 'good stuff',
        done: false,
      },
    ],
  },
  mutations: {
    addTask(state, newTaskTitle) {
      let newTask = {
        id: Date.now(),
        title: newTaskTitle,
        done: false,
      };
      state.tasks.push(newTask);
    },
    doneTask(state, taskId) {
      const task = state.tasks.find((task) => task.id === taskId);
      if (task) {
        task.done = !task.done;
      }
    },
    deleteTask(state, taskId) {
      state.tasks = state.tasks.filter((task) => task.id !== taskId);
    },
  },
  actions: {},
  getters: {},
  modules: {
    user,
  },
});
