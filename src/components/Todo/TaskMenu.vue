<template>
<v-menu>
            <template v-slot:activator="{ props }">
              <v-btn color="blue-lighten-4"  icon="mdi-dots-vertical" v-bind="props"></v-btn>
            </template>

            <v-list>
              <v-list-item
                v-for="(item, index) in items"
                :key="index"
                @click="handleClick(index)"
              >
                <v-list-item-icon>
                    <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
</template>

<script>
export default {
    data: () => ({
      items: [
        {
            title: 'Edit',
            icon: 'mdi-pencil',
            click() {
                console.log('edit')
            }
        },
        {
            title: 'Due Date',
            icon: 'mdi-calendar',
            click() {
                console.log('due date')
            }
        },
        {
            title: 'Delete',
            icon: 'mdi-delete',
            click() {
                console.log('delete')
            }
        },
      ],
    }),
    methods: {
        handleClick(index) {
            this.items[index].click()
        }
    }
}
</script>

<styles>

</styles>