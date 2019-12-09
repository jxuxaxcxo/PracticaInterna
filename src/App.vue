<template>
  <v-app>
    <v-content>
    <div v-if="user !== undefined && user !== null ">
      <Navbar/>
    </div>
    <div>

    <router-view></router-view>
    <ReporteNC/>
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
    Navbar
      },
    
    computed : {

    user () {
        return this.$store.getters.getUser
      }
    },

    mounted () {
        if (this.user === null || this.user === undefined){
          console.log("Entre aqui mounted app")
          this.$router.replace('/login') 
        }
    },

    

        watch: {
      user (value) {
        if ( value === null || value === undefined){
          console.log("entre watch")
          this.$router.replace('/login') 
        }
      }
    },
};
</script>
