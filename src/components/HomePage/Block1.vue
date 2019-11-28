<template>
    <div>
     <v-card id="block1">
        <v-card-title id="blockTitle">Informe de Auditoría</v-card-title>
        <v-card-subtitle id="blockSubtitle">Manejo del Informe de Auditoría e información respectiva</v-card-subtitle>
        <v-btn id="goToFileButton" outlined="true" @click="crearNuevoInforme">Go</v-btn>
          
      </v-card>
      <v-card id="block1_sign"> 
        <img id="graphImage" src = "../../assets/orangeGraph.png">    

      </v-card>
    </div>
</template>

<script>
//import {getContadorInforme, agregarInforme} from '../ConexionFirebase/FirebaseInforme'

export default {
    methods: {
      crearNuevoInforme () {
        agregarInforme('Nuevo Informe', [], [])
        const self = this
       // getContadorInforme().then(result => {
       //   self.navigateTo('/Informes/' + result)
       // })
      },
      navigateTo(to) {
        this.$router.push(to)
      }
    }
}
</script>

<style scoped>

  #block1{
    position: absolute;
      left: 5vw;
      top: 5vh;
      height: 50vh;
      width: 34vw;
  }

   #block1_sign{
    background-color: #FFC30F;

    position: absolute;
    left: 6.5vw;
    top: 2.5vh;
    height: 25vh;
    width: 31vw;

    font-family: "Calibri";
    color: #FFFFFF;
  }
    #blockTitle{
    position:absolute;
    top:22vh;
  }

  #blockSubtitle{
    position:absolute;
    top:31vh;
    left:1.5vw;
    color: gray;
  }

  #graphImage{
      position: absolute;
      top: 0.5vh;
      left:4vw;
      height: 24vh;
      width: 23vw;
  }

  #goToFileButton{
    position: absolute;
    top: 40vh;
    left: 14vw;
    color: darkslategray;
  }

</style>