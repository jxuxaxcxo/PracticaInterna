<template>
  <v-app>
    <v-content>
    <div>
      <Navbar/>
    </div>
    <div>
    <v-toolbar flat height="40px" color="#DBB13B">
      <v-toolbar-title>Bievenue</v-toolbar-title>
    </v-toolbar>
    <router-view></router-view>
    </div>
    </v-content>
  </v-app>
</template>

<script>
<<<<<<< HEAD
import FuenteNCView from './views/FuenteNCView.vue';
=======
>>>>>>> javi
import Navbar from './views/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar
  },
  data: () => ({
    //
  }),
};
</script>
