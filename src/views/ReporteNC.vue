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
        if (this.user === null || this.user === undefined){
          this.$router.push('/login') 
        }
    },

    watch: {
      user () {
        if (this.user === null || this.user === undefined){
          this.$router.push('/login') 
        }
      }
    }



};
</script>