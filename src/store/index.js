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
    snackbar: {
      show: false,
      text: ''
    }
  },
  mutations: {
    addTask(state, newTaskTitle) {
      let newTask = {
        id: Date.now(),
        title: newTaskTitle,
        done: false,
      }
      state.tasks.push(newTask)
    },
    doneTask(state, id) {
      let task = state.tasks.filter(task => task.id === id)[0]
        task.done = !task.done;
      },
    deleteTask(state, id) {
      state.tasks = state.tasks.filter(task => task.id !== id);
    },
    showSnackbar(state, text) {
      let timeout = 0
      if (state.snackbar.show) {
        state.snackbar.show = false
        timeout = 300
      }
      setTimeout(() => {
        state.snackbar.show = true
        state.snackbar.text = text
      },timeout)
    }
  },
  hideSnackbar(state) {
    state.snackbar.show = false
  },
  actions: {
    addTask({ commit }, newTaskTitle) {
      commit('addTask', newTaskTitle)
      commit('showSnackbar', 'Task Added!')
    },
    deleteTask({ commit }, id) {
      commit('deleteTask', id)
      commit('showSnackbar', 'Task Deleted!')
    }
  },
  getters: {},
  modules: {
    user,
  },
});
