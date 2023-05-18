import { createStore } from 'vuex'

import user from '../store/modules/user'

const store = createStore({
    state:{
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
            }
        ]
    },
    mutations:{
        addTask(state, newTaskTitle) {
            let newTask = {
              id: Date.now(),
              title: newTaskTitle,
              done: false
            }
            state.tasks.push(newTask)
          },
    },
    actions:{

    },
    getters:{

    },
    modules: {
        user,
    },
})

export default store