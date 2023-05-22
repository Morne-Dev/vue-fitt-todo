<template>
    <v-dialog v-model="dialogVisible" persistent width="auto">
      <v-card>
        <v-card-title class="text-h5">Delete Task?</v-card-title>
        <v-card-text>
          Are you sure you want to delete this Task?
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn variant="text" @click="$emit('close')">
            No
          </v-btn>
          <v-btn  @click="$store.dispatch('deleteTask', task.id)" color="green darken-1" variant="text">
            Yes
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
      };
    },
  };
  </script>
  
  <style></style>
  