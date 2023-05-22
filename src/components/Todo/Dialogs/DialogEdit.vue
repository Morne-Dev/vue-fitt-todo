<template>
    <v-dialog v-model="dialogVisible" persistent width="auto">
      <v-card>
        <v-card-title class="text-h5">Edit Task?</v-card-title>
        <v-card-text>
          Edit the title of this Task:
          <v-text-field v-model="taskTitle" @keyup.enter="saveTask"/>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn variant="text" @click="$emit('close')">
            Cancel
          </v-btn>
          <v-btn  @click="saveTask" :disabled="taskTitleInvalid" color="green darken-1" variant="text">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </template>
  
  <script>
  export default {
    props: ['task'],
    data() {
      return {
        dialogVisible: true,
        taskTitle: null
      };
    },
    computed: {
      taskTitleInvalid() {
        return !this.taskTitle || this.taskTitle === this.task.title
      }
    },
    methods: {
      saveTask() {
        if (!this.taskTitleInvalid) {
          let payload = {
          id: this.task.id,
          title: this.taskTitle
        }
        this.$store.dispatch('updateTaskTitle', payload)
        this.$emit('close')
        }
      }
    },
    mounted() {
      this.taskTitle = this.task.title
    }
  };
  </script>
  
  <style></style>
  