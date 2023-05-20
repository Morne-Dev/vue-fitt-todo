<template>
  <div class="Todo">
    <field-add-task />
    <list-tasks v-if="tasks.length" />
    <no-tasks v-else />
  </div>
</template>

<script>
import FieldAddTask from '@/components/Todo/FieldAddTask.vue';
import ListTasks from '@/components/Todo/ListTasks.vue';
import NoTasks from '@/components/Todo/NoTasks.vue';

export default {
  name: 'Todo',
  components: {
    FieldAddTask,
    ListTasks,
    NoTasks
  },
  computed: {
    tasks() {
      return this.$store.state.tasks;
    }
  }
}
</script>

<style lang="sass">
</style>
