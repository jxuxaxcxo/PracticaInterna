<template>
    <div id="formPage">
        <InformacionIncidencia />
    </div>
</template>

<script>

import InformacionIncidencia from '../components/Form/InformacionIncidencia';

export default {
    data (){
    },
  components: {
      InformacionIncidencia,
  },

    computed: {

      user () {
        return this.$store.getters.getUser
      }
    },

    mounted () {
        if (this.user === null || this.user === undefined){
          this.$router.push('/login') 
        }
    },

    watch: {
      user () {
        if (this.user === null || this.user === undefined){
          this.$router.push('/login') 
        }
      }
    },
};
</script>

<style scoped>
    #formPage{
    width: 100vw;
    background-color: #ECECEC;
    height: 300vh;
    }
</style>