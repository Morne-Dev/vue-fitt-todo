<template>
    <div class="Todo pa-6">
      <v-text-field
            label="Append"
            append-icon="mdi-map-marker"
            variant="outlined"
      >
      </v-text-field>
        <v-list lines="three" select-strategy="classic" class="pt-0">
        <v-list-subheader>Todo's</v-list-subheader>
      <div
        v-for="task in tasks"
        :key="task.id"
      >
        <v-list-item 
        @click="doneTask(task.id)" 
        :class="{ 'blue lighten-5' : task.done }"
        >
          <template v-slot:prepend>
            <v-list-item-action start>
                <v-checkbox-btn 
                :model-value="task.done"
                ></v-checkbox-btn>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title 
            :class="{'text-decoration-line-through' : task.done}"
            >
            {{task.title}}
            </v-list-item-title>
            <v-list-item-subtitle>{{task.description}}</v-list-item-subtitle>
            </v-list-item-content>
          </template>
            <v-row class=" justify-end">
                <v-btn 
                @click.stop="deleteTask(task.id)"
                icon
                >
                  <v-icon color="blue lighten-5" >mdi-delete</v-icon>
                </v-btn>
              </v-row> 
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
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter( task => task.id !== id)
    }
  }
}
</script>
