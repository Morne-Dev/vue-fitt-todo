<template>
    <div class="Todo pa-6">
        <v-list lines="three" select-strategy="classic">
      <v-list-subheader>Todo's</v-list-subheader>

      <v-list-item value="notifications">
        <template v-slot:prepend="{ isActive }">

          <v-list-item-action start>
            <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
          </v-list-item-action>
        </template>

        <v-list-item-title>Buy Milk</v-list-item-title>

        <v-list-item-subtitle>
          Notify me about updates to apps or games that I downloaded
        </v-list-item-subtitle>
      </v-list-item>
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
                title: BuyBread,
                description: ,
                date: ,
                categories: {['Shopping','Groceries','Food']},
            }
            {
                id: 2,
                title: BuyBread,
                description: ,
                date: ,
                categories: {['Shopping','Groceries','Food']},
            }
            {
                id: 3,
                title: BuyBread,
                description: ,
                date: ,
                categories: {['Shopping','Groceries','Food']},
            }
        ]
    }
  }
}
</script>
