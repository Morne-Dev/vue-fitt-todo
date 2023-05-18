<template>
    <h1>About {{ name }}</h1>
    <P>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A dolor beatae repellendus doloribus aut deleniti ducimus reprehenderit Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus autem dolore sint ipsum, libero animi neque eligendi aliquid quaerat cum officia modi nesciunt odit, officiis soluta iure laboriosam ducimus. Quam! consequatur exercitationem cupiditate? Tenetur dolore, non iusto nemo aspernatur unde maiores nam nulla!</P>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const name = computed(() => {
    return store.state.user.name
})
</script>
