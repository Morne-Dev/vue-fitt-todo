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
        doneTask(state, id) {
            let task = state.tasks.filter(task => task.id === id)[0]
            task.done = !task.done
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