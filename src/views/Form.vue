<template>
    <div id="formPage">
        <v-btn outlined="true" id="saveButton">Guardar</v-btn>
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