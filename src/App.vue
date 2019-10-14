<template>
  <v-app>
    <v-content>
    <div>
      <Navbar/>
    </div>
    <div>
    <v-toolbar flat = "true" height="40px" color="#DBB13B">
      <v-toolbartitle>Bievenue</v-toolbartitle>
    </v-toolbar>
    <router-view></router-view>
    </div>
    </v-content>
  </v-app>
</template>

<script>
import FuenteNCView from './views/FuenteNCView';
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
