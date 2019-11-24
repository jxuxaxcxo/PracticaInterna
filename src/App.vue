<template>
  <v-app>
<Login></Login>
  </v-app>
</template>

<script>
import Navbar from './views/Navbar.vue';
import ListaPer from './views/ListaPer.vue';
import Login from './views/LoginView.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Login
  },
  data: () => ({
    //
  }),
};
</script>
