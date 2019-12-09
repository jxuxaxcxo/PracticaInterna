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
        <v-row>
          <v-col>
            <v-file-input
            label="Archivo Adjunto a la Tarea"
            v-model="archivo"
            id="archivoCargar"
            >
            </v-file-input>
            <v-textarea
            width="80vw"
            label="Descripcion del procedimineto"
            outlined
            height="60vh"
            v-model="tarea.comprobanteArchivo">
            </v-textarea>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="9"></v-col>
          <v-col cols="1">
          <v-icon
          v-if="tarea.archivoAdjunto !== '' && tarea.archivoAdjunto !== null"
          @click="descargar"
          color="#252440"
          >mdi-download</v-icon>
          </v-col>
          <v-col cols="2">
            <v-btn
            outlined
            color="#252440"
            @click="terminarTarea">
              Terminar Tarea
            </v-btn>
          </v-col>
        </v-row>
    </v-container>
</template>
<script>
import firebase from 'firebase/app'
import { getInformeID, actualizarInforme } from '../components/ConexionFirebase/FirebaseInforme'
export default {
  data () {
    return {
        storage: null,
        tarea: {
            nombre: 'Tarea',
            estado: 'Pendiente',
            fechaLimite: '22/12/2019',
            archivoAdjunto: '',
            comprobanteArchivo: ''
        },
        archivo: null
    } 
  },
  
  mounted () {
    
    this.storage = firebase.storage().ref()
    getInformeID(this.$route.params.informe).then(informe => {
      this.tarea = informe.planesDeAccion[this.$route.params.planDeAccion].tareas[this.$route.params.tarea]
    })
  },
  methods: {
    descargar () {
      window.open(this.tarea.archivoAdjunto, '_blank')
    },
    terminarTarea () {
      if (this. archivo !== null) {
            const Path = require('path');
        getInformeID(this.$route.params.informe).then(informe => {
          console.log(informe)
          const pda = this.$route.params.planDeAccion
          const tar = this.$route.params.tarea     
          console.log(document.getElementById('archivoCargar').value.split(/(C\:\\fakepath\\)/))   
          const tareaRef = this.storage.child('Tareas/' + this.$route.params.informe + this.$route.params.planDeAccion + this.$route.params.tarea + Path.extname(document.getElementById('archivoCargar').value.split(/(C\:\\fakepath\\)/)[2]))
          let uploadTask = tareaRef.put(this.archivo).then(success => {
            this.tarea.estado = 'Terminada'
            tareaRef.getDownloadURL().then(url => {
              this.tarea.archivoAdjunto = url
              let actualizado = informe
              actualizado.planesDeAccion[pda].tareas[tar] = this.tarea
              
              actualizarInforme(this.$route.params.informe, actualizado)
              this.$router.replace('/')
            })
          })
        })
      }
    }
  }
}
</script>
<style scoped>

</style>