import { createStore } from 'vuex'

const store = createStore({
    state: {
        appName: "Vue3 Vuex"
    },

    getters: {
        appName () {
            return state.appName
        }
    }
})

export default store