<template>
    <FormEditor/>
    
</template>

<script>
import FormEditor from '../components/FormEditor/FormEditor'
export default {

    components:{
        FormEditor
    },
    
    computed: {

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
    },

    


}
</script>

<style scoped>

</style>