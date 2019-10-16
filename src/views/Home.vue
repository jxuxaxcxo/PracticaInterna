<template>
    <div id="homePage">

         <Block1/>  


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

</style>
