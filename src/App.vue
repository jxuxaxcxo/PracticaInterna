<template>
  <v-app>
    <v-content>
      <ReporteNC/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import FuenteNCView from './views/FuenteNCView';
import ReporteNC from './components/ReporteNC'

export default {
  name: 'App',
  components: {
    ReporteNC,
  },
  data: () => ({
    //
  }),
};
</script>
