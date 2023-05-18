<template>
    <div class="Todo pa-6">
        <v-list lines="three" select-strategy="classic" class="pt-0">
      <v-list-subheader>Todo's</v-list-subheader>
      <div
        v-for="task in tasks"
        :key="task.id"
      >
        <v-list-item class="pt-0">
            <template v-slot:prepend="{ isActive }">
            <v-list-item-action start>
                <v-checkbox-btn :input-value="isActive"></v-checkbox-btn>
            </v-list-item-action>
            </template>
            <v-list-item-title>{{task.title}}</v-list-item-title>
            <v-list-item-subtitle>{{task.description}}</v-list-item-subtitle>
        </v-list-item>
        <v-divider></v-divider>
      </div>
    </v-list>
    </div>
</template>

<script>
export default {
  name: 'Todo',
  data() {
    return {
        tasks: [
            {
                id: 1,
                title: 'BuyBread',
                description: 'good stuff',
                done: false,
            },
            {
                id: 2,
                title: 'BuyBread',
                description: 'good stuff',
                done: false,
            },
            {
                id: 3,
                title: 'BuyBread',
                description: 'good stuff',
                done: false,
            }
        ]
    }
  }
}
</script>
