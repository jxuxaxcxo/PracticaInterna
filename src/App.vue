<template>
  <v-app>
    <v-content>
    <div>
      <Navbar/>
    </div>
    <div>

    <router-view></router-view>
    </div>
    </v-content>
  </v-app>
</template>

<script>
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
