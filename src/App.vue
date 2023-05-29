<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app :rail="rail" permanent @click="rail = false">
      <v-list-item prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg" title="Morne Marais" nav>
        <template v-slot:append>
          <v-btn variant="text" icon @click.stop="rail = !rail">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </template>
      </v-list-item>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-format-list-checks" title="Agenda Todo" value="Todo" :to="{ path: '/Todo' }"></v-list-item>
        <v-list-item prepend-icon="mdi-home-city" title="Home" value="Home" :to="{ path: '/Home' }"></v-list-item>
        <v-list-item prepend-icon="mdi-account" title="My Account" value="account" :to="{ path: '/Account' }"></v-list-item>
        <v-list-item prepend-icon="mdi-account-group-outline" title="Team" value="Team" :to="{ path: '/Team' }"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar color="blue" image="mountains.jpg" density="prominent">
      <template v-slot:image>
        <v-img gradient="to bottom right, rgba(19,84,122,.8), rgba(128,208,199,.8)"></v-img>
      </template>

      <template v-slot:prepend>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      </template>

      <v-app-bar-title>Fitt Todo</v-app-bar-title>

      <v-spacer></v-spacer>
      <search />
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

    </v-app-bar>

    <v-main>
      <router-view></router-view>
      <snackbar />
    </v-main>
  </v-app>
</template>

<script>
import search from './components/Tools/Search.vue';
import Snackbar from './components/shared/Snackbar.vue';


export default {
  data() {
    return {
      drawer: true,
      rail: true,
    };
  },
  components: {
    Snackbar,
  },
};
</script>
