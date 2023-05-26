<template>
    <div>
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
                <v-list-item-title text-button >{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
    </div>
          <DialogEdit v-if="dialogs.edit" @close="dialogs.edit = false" :task="task"/>
          <DialogDueDate v-if="dialogs.dueDate" @close="dialogs.dueDate = false" :task="task"/>
          <DialogDelete v-if="dialogs.delete" @close="dialogs.delete = false" :task="task"/>
</template>

<script>
import DialogEdit from '@/components/Todo/Dialogs/DialogEdit.vue';
import DialogDueDate from '@/components/Todo/Dialogs/DialogDueDate.vue';
import DialogDelete from '@/components/Todo/Dialogs/DialogDelete.vue';



export default {
    props: ['task'],
    data: () => ({
      dialogs: {
        edit: false,
        dueDate: true,
        delete: false
      },
      items: [
        {
            title: 'Edit',
            icon: 'mdi-pencil',
            click() {
                this.dialogs.edit = true;
            }
        },
        {
            title: 'Due Date',
            icon: 'mdi-calendar',
            click() {
                this.dialogs.dueDate = true;
            }
        },
        {
            title: 'Delete',
            icon: 'mdi-delete',
            click() {
                this.dialogs.delete = true;
            }
        },
      ],
    }),
    methods: {
        handleClick(index) {
            this.items[index].click.call(this);
        }
    },
    components: {
        DialogEdit,
        DialogDueDate,
        DialogDelete
    }
}
</script>

<style>

</style>