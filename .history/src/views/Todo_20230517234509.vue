<template>
    <div class="Todo pa-6">
        <v-list lines="three" select-strategy="classic" class="pt-0">
      <v-list-subheader>Todo's</v-list-subheader>
      <div
        v-for="task in tasks"
        :key="task.id"
      >
        <v-list-item 
        @click="doneTask(task.id)" 
        class="pt-0"
        :class="{ 'blue lighten-5' : task.done }"
        >
          <template v-slot:prepend>

            <v-list-item-action start>
                <v-checkbox-btn 
                :model-value="task.done"
                ></v-checkbox-btn>
            </v-list-item-action>
              <v-btn icon>
                <v-icon color="grey lighten-1">mdi-delete</v-icon>
              </v-btn> 
          </template>
            <v-list-item-title 
            :class="{'text-decoration-line-through' : task.done}"
            >
            {{task.title}}
            </v-list-item-title>
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
                done: true,
            },
            {
                id: 2,
                title: 'blank',
                description: 'good stuff',
                done: true,
            },
            {
                id: 3,
                title: 'BuyBread',
                description: 'good stuff',
                done: false,
            }
        ]
      }
    },
    methods: {
    doneTask(id) {
      let task = this.tasks.filter(task => task.id === id)[0]
      task.done = !task.done
    }
  }
}
</script>
