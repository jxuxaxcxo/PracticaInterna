<template>
    <div>
     <v-card id="block3">
        <v-card-title id="blockTitle">Estadísticas</v-card-title>
        <v-card-subtitle id="blockSubtitle">Reportes y Estadísticas de los Planes de Acción</v-card-subtitle>
        <v-btn id="goToReportsButton" outlined="true">Go</v-btn>
      </v-card>

     <v-card id="block3_sign"> 
        <img id="graphImage" src = "../../assets/purpleGraph2.png">    
     </v-card>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

  #block3{
    position: absolute;
      left: 5vw;
      top: 135vh;
      height: 50vh;
      width: 34vw;
    }

   #block3_sign{
    background-color: #BA55D3;
    position: absolute;
    left: 6.5vw;
    top: 132.5vh;
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
      top: 1vh;
      height: 23vh;
      width: 30vw;
  }

  #goToReportsButton{
    position: absolute;
    top: 40vh;
    left: 14vw;
    color: darkslategray;

  }

</style>