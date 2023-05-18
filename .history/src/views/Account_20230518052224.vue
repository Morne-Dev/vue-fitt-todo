<template>
    <div class="Account pa-6">
        <h1>
            My Account: 
        </h1>
        <P>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A dolor beatae repellendus doloribus aut deleniti ducimus reprehenderit consequatur exercitationem cupiditate? Tenetur dolore, non iusto nemo aspernatur unde maiores nam nulla!</P>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore();
const name = computed(() => {
    return store.state.user.name
})
</script>
