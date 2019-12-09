<template
:key="this.id">
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
      <v-col>
        <v-btn
        id="guardarInforme"
        outlined
        color="#3B83BD"
        @click="guardar"
        >Guardar</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <InformeDatos
      :archivo="archivo"
      :nombre="nombre"
      :fechaAtribuible="fechaAtribuible"
      :valido="datosValidos"
      :origen="origen"
      @setArchivo="setArchivo"
      @setFechaAtribuible="setFechaAtribuible"
      @setNombre="setNombre"
      @setDatosValidos="setDatosValidos"
      />
    </v-row>
    <v-row>
      <ListaIncidencias
      :usuarios="usuarios"
      :formatos="formatos"
      :planesDeAccion="planesDeAccion"
      :formatoElegido="formatoElegido"
      @leerCampos="leerCampos"
      @leerOcurrencias="leerOcurrencias"
      @setFormatoElegido="setFormatoElegido"
      ref="lista"
      />
    </v-row>
  </v-container>
</template>

<script>
import docx4js from "docx4js"
import InformeDatos  from '../components/Informes/InformeDatos'
import ListaIncidencias from '../components/Informes/ListaIncidencias'
import { getInformeID, actualizarInforme } from '../components/ConexionFirebase/FirebaseInforme'
import { listaUsuarios } from '../components/ConexionFirebase/FirebaseUsuarios'
import { listaFormatos } from '../components/ConexionFirebase/FirebaseFormato'
import { isNullOrUndefined } from 'util'
import { functions } from 'firebase'
export default {
  components: {
    InformeDatos,
    ListaIncidencias
  },
  data () {
    return {
      id: 0,
      nombre: '',
      archivo: null,
      fechaAtribuible: new Date().toISOString().substr(0, 10),
      datosValidos: false,
      texto: '',
      textoIncidencias: '',
      usuarios: null,
      formatos: null,
      planesDeAccion: [],
      formatoElegido: null,
      origen: 'null'
    }
  },
  created () {
    this.origen = this.$route.params.origen
    this.id = this.idLink
    const self = this
    this.usuarios = listaUsuarios()
    this.formatos = listaFormatos()
    getInformeID(this.id).then(function(val) {
      self.nombre = val.nombre
      self.planesDeAccion = val.planesDeAccion
      self.fechaAtribuible = val.fechaAtribuible.toISOString().substr(0, 10)
    })
  },

  mounted () {
        if (this.user === null || this.user === undefined){
          this.$router.push('/login') 
        }
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
    },
    leerIncidencias (formato) {
      
      this.planesDeAccion = []
      //Se agarran todas las incidencias
      this.textoIncidencias = this.texto.toString().match(/(No conformidad|Observación|Recomendación)\s?:\s?.+CONCLUSIONES/g)
      if (this.textoIncidencias !== null && this.textoIncidencias.length > 0) {
        this.textoIncidencias = this.textoIncidencias[0]
        
        let incidencia = null
        let caso = null
        while (this.textoIncidencias.toString().match(/(No conformidad|Observación|Recomendación):\s?.+?(CONCLUSIONES|(No conformidad|Observación|Recomendación):)/) !== null) {
          //mientras se encuentren incidencias
          incidencia = this.textoIncidencias.toString().match(/(No conformidad|Observación|Recomendación):\s?.+?(CONCLUSIONES|(No conformidad|Observación|Recomendación):)/)[0]
          //titulo incidencia
          caso = incidencia.toString().match(/(No conformidad|Observación|Recomendación)\s?:\s?[^:]+(CONCLUSIONES|Esto acontece en los siguientes casos:|\.)/)
          // Limpiamos las palabras demas
          if (caso !== null && caso.length > 0) {
            caso = caso[0].toString()
            caso = caso.toString().replace('Esto acontece en los siguientes casos:','')
            caso = caso.toString().replace('CONCLUSIONES', '')
            //se agrega
            if (incidencia !== null) {
              this.planesDeAccion.push({
                nombre: caso,
                mailEncargado: '',
                formatoNombre: '',
                ocurrencias: [],
                campos: []
              })
              //se borra incidencia ya guardada
              this.textoIncidencias = this.textoIncidencias.toString().replace(incidencia.toString().replace(incidencia.split('.')[incidencia.split('.').length-1],''), '')
              incidencia = null
            } else {
              this.textoIncidencias = '' 
            }
          } else {
            break
          }
        }
        //se reestrablece para ocurrencias
        this.textoIncidencias = this.texto.toString().match(/(No conformidad|Observación|Recomendación)\s?:\s?.+CONCLUSIONES/g)
        this.textoIncidencias = this.textoIncidencias[0]
        this.textoIncidencias = this.textoIncidencias.toString().replace('CONCLUSIONES', '')
      } else {
        this.planesDeAccion.unshift({
            nombre: 'Nuevo Plan De Acción',
            ocurrencias: [],
            campos: [],
            mailEncargado: '',
            formatoNombre: '',
            tareas: []
        })
      }
    },
    leerCampos () {
      let expresion
      if (this.texto !== '' && this.texto !== null) {
        this.planesDeAccion[0].campos.forEach(campo => {
        expresion = campo.titulo + '[^.]+\.'
        expresion= this.texto.toString().match(expresion)
        if  (expresion !== null) {
          campo.contenido = expresion.toString().replace(campo.titulo, '')
        }
        })
      }
    },
    leerOcurrencias () {
      let expresion
      let secciones = null
      //se busca el plan de accion actual
      secciones = this.textoIncidencias.toString().split(this.planesDeAccion[0].nombre + 'Esto acontece en los siguientes casos:')
      if (this.archivo !== null && this.formatoElegido !== null && this.formatoElegido.ocurrencias.length > 0) {
        //filtro personalizado
        expresion = '('
        this.formatoElegido.ocurrencias.forEach((ocurrencia, i) => {
          expresion = expresion + ocurrencia
          if (i < (this.formatoElegido.ocurrencias.length -1))
          {
            expresion = expresion + '|'
          }
        })
        expresion = expresion + ')'
        let datos = []
        if (!isNullOrUndefined(secciones)) {
          secciones = secciones[1].toString().split(/(No conformidad|Observación|Recomendación):/)
          secciones = secciones[0]
          let datos = []
          this.formatoElegido.ocurrencias.forEach((campo,i) => {
            //se agarran las ocurrencias
            datos.push([])
            if (i < this.formatoElegido.ocurrencias.length-1)
            {
              datos[i] = secciones.toString().match(campo + '.+?' + expresion)
            } else {
              datos[i] = secciones.toString().match(campo + '.+\.')
            }
            if(!isNullOrUndefined(datos[i]) && datos[i].length > 0) {
              //se dividen
              datos[i] = datos[i][0]
              this.formatoElegido.ocurrencias.forEach(o => {
                datos[i] = datos[i].replace(o, '')
              })
              datos[i] = datos[i].split('.')
            }
          })
          console.log(datos)
          for (let i = 0; i < datos[0].length-1; i++) {
            //se agregan
            this.$refs.lista.agregarIncidencia('ocurrencia')
            console.log(this.planesDeAccion[0].ocurrencias.length)
            datos.forEach((dato, j) => {
              this.$refs.lista.setOcurrenciaActual(this.formatoElegido.ocurrencias[j], dato[i], j)
            })
          }
        }
      }
    },
    setFormatoElegido (val) {
      this.formatoElegido = val
    },
    guardar () {
      if (this.datosValidos) {
        actualizarInforme(this.id, {
          origen: this.origen,
          idInforme: this.id,
          fechaAtribuible: this.fechaAtribuible,
          nombre: this.nombre,
          planesDeAccion:  this.planesDeAccion
        })
        this.$router.push('/')
      }

    },
    actualizar () {
      this.origen = this.$route.params.origen
      this.id = this.$route.params.id
      const self = this
      this.usuarios = listaUsuarios()
      this.formatos = listaFormatos()
      getInformeID(this.id).then(function(val) {
        self.nombre = val.nombre
        self.planesDeAccion = val.planesDeAccion
        self.fechaAtribuible = val.fechaAtribuible.toISOString().substr(0, 10)
      })
    }
  },
  watch: {
    archivo: function (val) {
      if (val !== null) {
        //Leemos el texto del archivo
        docx4js.load(this.archivo).then(docx => {
          this.texto = docx.officeDocument.content.text()
          this.leerIncidencias()
        })
      }
    },
    planesDeAccion: function (val) {
      if ( this.formatoElegido === null && !isNullOrUndefined(this.planesDeAccion[0])) {
        this.formatos.forEach(formato => {
          if (formato.nombre === this.planesDeAccion[0].formatoNombre) {
            this.formatoElegido = formato
          }
        })
      }
    },

    user () {
        if (this.user === null || this.user === undefined){
          this.$router.push('/login') 
        }
      }
  },
  computed: {


    user () {
        return this.$store.getters.getUser
      },

    idLink () {
      this.actualizar()
      return this.$route.params.id
    }
  }
}
</script>

<style scoped>
#guardarInforme  {
  margin-left: 30vh;
}
</style>
