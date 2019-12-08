<template>
  <v-app>
    <v-content>
    <div v-if="user !== undefined && user !== null ">
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
import ListaPer from './views/ListaPer.vue';
import Login from './components/Login/Login.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Login
  },
  data: () => ({
    //
  }),

      computed : {

      user () {
        return this.$store.getters.user
      }
    },

    mounted () {
        if (this.user == null || this.user == undefined){
          this.$router.push('/Login') 
        }
    },

    

        watch: {
      user (value) {
        if (value == null || value == undefined){
          this.$router.push('/Login') 
        }
      }
    },
};
</script>
