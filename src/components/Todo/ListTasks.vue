<template>
    <v-list select-strategy="classic" class="pt-0">
      <task v-for="task in tasks" :key="task.id" :task="task" />
      <v-list-subheader>Todo's</v-list-subheader>
    </v-list>
  </template>
  
  <script>
  import Task from '@/components/Todo/Task.vue';
  
  export default {
    components: {
      Task
    },
    computed: {
      tasks() {
        return this.$store.state.tasks;
      }
    }
  }
  </script>
  