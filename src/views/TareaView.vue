<template>
    <v-container>
        <v-row>
        <v-col cols="3">
          <v-card-title> {{'Fecha Limite: ' + tarea.fechaLimite}}</v-card-title>
        </v-col>
        <v-col cols="6">
          <v-card-title class="justify-center">{{tarea.nombre}}</v-card-title>
        </v-col>
        <v-col cols="3">
          <v-card-title>{{tarea.estado}}</v-card-title>
        </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
  data () {
    return {
        tarea: {
            nombre: 'Subir documento de identidad',
            estado: 'Pendiente',
            fechaLimite: '22/12/2019',
            archivoAdjunto: '',
            comprobanteArchivo: ''
        }
    }        
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