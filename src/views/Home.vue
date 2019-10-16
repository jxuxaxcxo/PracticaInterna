<template>
    <div id="homePage">
        <v-card id="block1">
        </v-card>

        <v-card id="block2">
        </v-card>

        <v-card id="block3">
        </v-card>

         <v-card id="block4">
        </v-card>

    </div>

</template>

<script>
import HelloWorld from '../components/HelloWorld';

export default {
  components: {
    HelloWorld,
  },
};
</script>

<style scoped>

  #homePage{
    height: 100vh;
    width: 100vw;
    background-color: #ECECEC;
  }

  #block1{
    position: fixed;
      left: 25vw;
      top: 10vh;
      height: 20vh;
      width: 70vw;
  }
  #block2{
    position: fixed;
    left: 25vw;
    top: 35vh;
    height: 20vh;
    width: 34vw;
  }

    #block3{
    position: fixed;
    left: 61vw;
    top: 35vh;
    height: 20vh;
    width: 34vw;
  }

   #block4{
    position: fixed;
    left: 25vw;
    top: 60vh;
    height: 20vh;
    width: 70vw;
  }

</style>
