<template>
    <div class="Todo">
        <v-list 
            flat 
            class="pt-0">
            <v-list-subheader>Todo's</v-list-subheader>
            <div
                v-for="task in tasks"
                :key="task.id"
            >
                <v-list-item>
                    <template v-slot:default>
                        <v-list-item-action>
                            <v-checkbox 
                            :input-value="task.done"
                            ></v-checkbox>
                        </v-list-item-action>
                        
                        <v-list-item-content>
                            <v-list-item-title>{{task.title}}</v-list-item-title>
                            <v-list-item-subtitle>{{task.description}}</v-list-item-subtitle>
                        </v-list-item-content>
                    </template>
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
                title: 'blank',
                description: 'good stuff',
                done: true,
            },
            {
                id: 3,
                title: 'world',
                description: 'good stuff',
                done: false,
            }
        ]
    }
  }
}
</script>
