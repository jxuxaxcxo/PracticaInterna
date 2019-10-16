<template>
    <div id="homePage">

         <Block1/>  

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
import Block1 from '../components/HomePage/Block1';


export default {
  components: {
    HelloWorld,
    Block1
  },
};
</script>

<style scoped>

  #homePage{
    height: 100vh;
    width: 100vw;
    background-color: #ECECEC;
  }


  #block2{
    position: fixed;
    left: 25vw;
    top: 35vh;
    height: 25vh;
    width: 34vw;
  }

    #block3{
    position: fixed;
    left: 61vw;
    top: 35vh;
    height: 25vh;
    width: 34vw;
  }

   #block4{
    position: fixed;
    left: 25vw;
    top: 65vh;
    height: 25vh;
    width: 70vw;
  }


</style>
