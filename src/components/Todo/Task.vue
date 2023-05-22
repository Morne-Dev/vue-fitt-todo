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
        <v-btn @click.stop="dialogs.delete = true" icon>
          <v-icon color="blue lighten-5">mdi-delete</v-icon>
        </v-btn>
      </v-row>
    </v-list-item>
    <v-divider></v-divider>
    <DialogDelete v-if="dialogs.delete" @close="dialogs.delete = false" :task="task"/>
  </div>
</template>

<script>
import DialogDelete from '@/components/Todo/Dialogs/DialogDelete.vue';

export default {
  props: ['task'],
  data() {
    return {
      dialogs: {
        delete: false
      }
    }
  },
  components: {
    DialogDelete
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
