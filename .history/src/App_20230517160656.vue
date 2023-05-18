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

        <v-list density="compact" nav v-for="item in items"
:key="item.title"
:to="item.to" >
          <v-list-item prepend-icon="mdi-home-city" title="Home" value="home" ></v-list-item>
          <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
          <v-list-item prepend-icon="mdi-account-group-outline" title="Team" value="Team"></v-list-item>
        </v-list>
      </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>To Do / Agenda</v-toolbar-title>
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
          { title: 'Home', icon: 'mdi-home-city', to: '/Home' },
          { title: 'My Account', icon: 'mdi-account', to: '/Account' },
          { title: 'Team', icon: 'mdi-account-group-outline', to: '/Team' },
        ],
        rail: true,
     }),
  }
</script>