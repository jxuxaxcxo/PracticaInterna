<template>
    <div>
     <v-card id="block2">
        <v-card-title id="blockTitle">Fuente Alternativa de N.C.</v-card-title>
        <v-card-subtitle id="blockSubtitle">Creación de Fuentes y sus respectivas N.C. (No Conformidades)</v-card-subtitle>
        <v-btn id="goToAlternativeButton" outlined="true" @click="navigateTo('/nuevaFuente/')">Go</v-btn>
      </v-card>

      <v-card id="block2_sign"> 
        <img id="graphImage" src = "../../assets/greenGraph.png">    
      </v-card>
    </div>
</template>

<script>
export default {
    methods: {
      navigateTo(to) {
        this.$router.push(to)
      }
    }
}
</script>

<style scoped>

  #block2{
    position: absolute;
      left: 41vw;
      top: 5vh;
      height: 50vh;
      width: 34vw;
    }

   #block2_sign{
    background-color: #46CB18;
    position: absolute;
      left: 42.5vw;
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
      left: 0.5vw;
      height: 23vh;
      width: 30vw;
  }

  #goToAlternativeButton{
    position: absolute;
    top: 40vh;
    left: 14vw;
    color: darkslategray;

  }

</style>