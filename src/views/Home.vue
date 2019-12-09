<template>
    <div id="homePage">

         <Block1/>  
         <Block2/>
         <Block3/>
         <Block4/>
         
    </div>

</template>

<script>
import HelloWorld from '../components/HelloWorld';
import Block1 from '../components/HomePage/Block1';
import Block2 from '../components/HomePage/Block2';
import Block3 from '../components/HomePage/Block3';
import Block4 from '../components/HomePage/Block4';


export default {
  components: {
    HelloWorld,
    Block1,
    Block2,
    Block3,
    Block4
  }

  
};
</script>

<style scoped>

  #homePage{
    height: 150vh;
    width: 100vw;
    background-color: #ECECEC;
  }

</style>
