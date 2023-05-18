<template>
  <v-app id="inspire">
    <v-navigation-drawer
        v-model="drawer"
        app
        :rail="rail"
        permanent
        @click="rail = false"
      >
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
          title="Morne Marais"
          nav
        >
          <template v-slot:append>
            <v-btn
              variant="text"
              icon="mdi-chevron-left"
              @click.stop="rail = !rail"
            ></v-btn>
          </template>
        </v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav  >
          <v-list-item prepend-icon="mdi-home-city" title="Home" value="home" to="/Home" ></v-list-item>
          <v-list-item prepend-icon="mdi-account" title="My Account" value="account" to="/Account"></v-list-item>
          <v-list-item prepend-icon="mdi-account-group-outline" title="Team" value="Team" to="/Team"></v-list-item>
        </v-list>
      </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Fitt Talent To Do</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>

</template>

<script>
  export default {
    data: () => ({ 
      drawer: true,
        items: [
          { title: 'Home', icon: 'mdi-home-city'},
          { title: 'My Account', icon: 'mdi-account'},
          { title: 'Team', icon: 'mdi-account-group-outline'},
        ],
        rail: true,
     }),
  }
</script>