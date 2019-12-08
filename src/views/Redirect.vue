<template>
</template>
<script>
 export default {

    mounted () {
      this.$router.replace('/Auditorias/' + this.$route.params.origen + '/' + this.$route.params.id)
    }

  }
</script>