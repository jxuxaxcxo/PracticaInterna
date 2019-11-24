<template>
    <div id="formPage">
        <InformacionIncidencia/>
    </div>
</template>

<script>

import InformacionIncidencia from '../components/Form/InformacionIncidencia';

export default {
  components: {
      InformacionIncidencia
  },
};
</script>

<style scoped>
    #formPage{
    height: 150vh;
    width: 100vw;
    background-color: #ECECEC;
    }
</style>