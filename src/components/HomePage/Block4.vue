<template>
    <div>
     <v-card id="block4">
        <v-card-title id="blockTitle">Creador de Formularios</v-card-title>
        <v-card-subtitle id="blockSubtitle">Herramienta para la creación de Formularios</v-card-subtitle>
        <v-btn id="goToFormsButton" outlined="true" @click="navigateTo('/formsManager')">Go</v-btn>
      </v-card>
    <v-card id="block4_sign"> 
        <img id="tableImage" src = "../../assets/cyanGraph2.png">
     </v-card>
    </div>
</template>

<script>
export default {
  methods: {
    navigateTo(to) {
      this.$router.replace(to)
    }
  }
}
</script>

<style scoped>

  #block4{
    position: absolute;
      left: 41vw;
      top: 65vh;
      height: 50vh;
      width: 34vw;
    }

   #block4_sign{
    background-color: #34CCFF;
    position: absolute;
    left: 42.5vw;
    top: 62.5vh;
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

  #tableImage{
      position: absolute;
      top: 1vh;
      left: 0.5vw;
      height: 23vh;
      width: 30vw;
  }

  #goToFormsButton{
    position: absolute;
    top: 40vh;
    left: 14vw;
    color: darkslategray;

  }

</style>