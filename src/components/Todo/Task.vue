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
        <v-list-item-action v-if="task.dueDate">
          <v-list-item-action-text class="pa-3">
            <v-icon small >mdi-calendar</v-icon>
            {{ task.dueDate | niceDate }}
          </v-list-item-action-text>
        </v-list-item-action>
        <TaskMenu :task="task" />
      </v-row>
    </v-list-item>
    <v-divider></v-divider>
  </div>
</template>

<script>
import {format} from 'date-fns'
import TaskMenu from '@/components/Todo/TaskMenu.vue';

export default {
  props: ['task'],
  filters: {
    niceDate(value) {
      return format(new Date (value), 'MMM d')
    }
  },
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
