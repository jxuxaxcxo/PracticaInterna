<template>
<ReporteNC/>
</template>

<script>
import ReporteNC from '../components/ReporteNC/ReporteNC.vue';

export default {
  components: {
    ReporteNC
  },

   computed : {

    user () {
        return this.$store.getters.getUser
      }
    },

    mounted () {
        if (this.user == null || this.user == undefined){
          this.$router.replace('/Login') 
        }
    },   

    watch: {
      user () {
        if (this.user == null || this.user == undefined){
          this.$router.replace('/Login') 
        }
      }
    },
};
</script>