<template>
  <v-container>
    <v-row>
      <v-col></v-col>
      <v-col>
        <v-card class="elevation-0" color="transparent">
          <v-card-title class="justify-center">
            {{'Informe de auditoria Nro: ' + id}}
          </v-card-title>
        </v-card>
      </v-col>
      <v-col></v-col>
    </v-row>
    <v-row>

    </v-row>
    <v-row>
      <InformeDatos
      :archivo="archivo"
      :nombre="nombre"
      :fechaAtribuible="fechaAtribuible"
      :valido="datosValidos"
      @setArchivo="setArchivo"
      @setFechaAtribuible="setFechaAtribuible"
      @setNombre="setNombre"
      @setDatosValidos="setDatosValidos"
      />
    </v-row>
  </v-container>
</template>

<script>
import docx4js from "docx4js"
import InformeDatos from '../components/Informes/InformeDatos'
export default {
  components: {
    InformeDatos
  },
  data () {
    return {
      id: 0,
      nombre: '',
      archivo: null,
      fechaAtribuible: new Date().toISOString().substr(0, 10),
      datosValidos: false,
      texto: ''
    }
  },
  created () {
    this.id = this.$route.params.id;
  },
  methods: {
    setArchivo (val) {
      this.archivo = val
    },
    setFechaAtribuible (val) {
      this.fechaAtribuible = val
    },
    setNombre (val) {
      this.nombre = val
    },
    setDatosValidos (val) {
      this.datosValidos = val
    }
  },
  watch: {
    archivo: function (val) {
      if (val !== null) {
        //Leemos el texto del archivo
        docx4js.load(this.archivo).then(docx => {
          this.texto = docx.officeDocument.content.text()
        })
      }
    }
  }
}
</script>

<style scoped>

</style>