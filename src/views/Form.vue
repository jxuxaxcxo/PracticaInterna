<template>
    <div id="formPage">
        <v-btn outlined="true" id="saveButton">Guardar</v-btn>
        <InformacionIncidencia />
    </div>
</template>

<script>

import InformacionIncidencia from '../components/Form/InformacionIncidencia';

export default {
  
     mounted(){
        console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&")
        if (this.user === null || this.user === undefined){
          this.$router.push('/login') 
        }
    },
  components: {
      InformacionIncidencia
  },
    computed: {

      user() {
        return this.$store.getters.getUser;
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
    #saveButton{
        position: absolute;
        background-color: green;
        right:1vw;
        top:1vh;
    }
</style>