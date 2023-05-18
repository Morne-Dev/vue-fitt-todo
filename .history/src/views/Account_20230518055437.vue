<template>
    <div class="Account pa-6">
        <h1>
            My Account: {{ name }} 
        </h1>
        <p>Logged in as {{ name }} </p>
        <input v-model="newName" type="text"/>
        <button @click="saveName">Submit</button>
        <P>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A dolor beatae repellendus doloribus aut deleniti ducimus reprehenderit consequatur exercitationem cupiditate? Tenetur dolore, non iusto nemo aspernatur unde maiores nam nulla!</P>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import {useRouter} from 'vue-router'

const store = useStore()
const router = useRouter()

const name = computed(() => {
    return store.state.user.name
})

const newName = ref('')
function saveName() {
    store.dispatch('saveName', newName.value)
    newName.value = ''
    router.push('/newuser')
}
</script>
