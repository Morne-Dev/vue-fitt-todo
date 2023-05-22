<template>
  <div>
    <v-list-item @click="doneTask(task.id)" :class="{ 'blue lighten-5' : task.done }">
      <template v-slot:prepend>
        <v-list-item-action>
          <v-checkbox-btn v-model="task.done"></v-checkbox-btn>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title :class="{'text-decoration-line-through' : task.done}">
            {{ task.title }}
          </v-list-item-title>
          <v-list-item-subtitle>{{ task.description }}</v-list-item-subtitle>
        </v-list-item-content>
      </template>
      <v-row class="justify-end">
        <TaskMenu :task="task" />
      </v-row>
    </v-list-item>
    <v-divider></v-divider>
  </div>
</template>

<script>
import TaskMenu from '@/components/Todo/TaskMenu.vue';

export default {
  props: ['task'],
  components: {
    TaskMenu
  },
  methods: {
    doneTask(taskId) {
      this.$store.commit('doneTask', taskId);
    },
    deleteTask(taskId) {
      this.$store.commit('deleteTask', taskId);
    }
  }
}
</script>
