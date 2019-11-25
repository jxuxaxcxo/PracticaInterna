<template>
    <div id="asignacionForm">
        <v-card id="incidenciaAsignacionCard" :style= getCardStyle()>
        <v-card-title>Asignacion de la Incidencia</v-card-title>
        </v-card>
    </div>
</template>

<script>

export default {  
  props:{
      topMargin: Number
  } 
  ,components: {

    },
  methods:{
      getCardStyle(){
          console.log(this.topMargin)
          return 'top: ' + this.topMargin + 'vh;'
      }
  }
};
</script>

<style scoped>

#asignacionForm{
    position: absolute;
    left: 30vw;
    
}

</style>