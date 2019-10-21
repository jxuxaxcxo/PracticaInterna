<template>
  <v-app>
    <v-content>
    <div>
      <Navbar/>
    </div>
    <div>

    <router-view></router-view>
    <ListaPer/>
    </div>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from './views/Navbar.vue';
import ListaPer from './views/ListaPer.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    ListaPer
  },
  data: () => ({
    //
  }),
};
</script>
