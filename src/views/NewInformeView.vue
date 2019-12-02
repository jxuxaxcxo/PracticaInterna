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
    <v-row>
      <ListaIncidencias
      :usuarios="usuarios"
      :formatos="formatos"
      :planesDeAccion="planesDeAccion"
      :formatoElegido="formatoElegido"
      @leerCampos="leerCampos"
      @leerOcurrencias="leerOcurrencias"
      @setFormatoElegido="setFormatoElegido"
      />
    </v-row>
  </v-container>
</template>

<script>
import docx4js from "docx4js"
import InformeDatos  from '../components/Informes/InformeDatos'
import ListaIncidencias from '../components/Informes/ListaIncidencias'
import { getInformeID } from '../components/ConexionFirebase/FirebaseInforme'
import { listaUsuarios } from '../components/ConexionFirebase/FirebaseUsuarios'
import { listaFormatos } from '../components/ConexionFirebase/FirebaseFormato'
import { isNullOrUndefined } from 'util'
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
    }
  },
  created () {
    this.id = this.$route.params.id
    const self = this
    getInformeID(this.id).then(function(val) {
      self.nombre = val.nombre
      self.planesDeAccion = val.planesDeAccion
      self.fechaAtribuible = val.fechaAtribuible.toISOString().substr(0, 10)
    })
    this.usuarios = listaUsuarios()
    this.formatos = listaFormatos()
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
      this.textoIncidencias = this.texto.toString().match(/(No conformidad|Observación|Recomendacion)\s?:\s?.+CONCLUSIONES/g)
      if (this.textoIncidencias !== null && this.textoIncidencias.length > 0) {
        this.textoIncidencias = this.textoIncidencias[0]
        this.textoIncidencias = this.textoIncidencias.toString().replace('CONCLUSIONES', '')
        
        let incidencia = null
        let caso = null
        
        while (this.textoIncidencias.toString().match(/(No conformidad|Observación|Recomendacion):\s?.+?(No conformidad|Observación|Recomendacion):/) !== null) {
          console.log('a')
          incidencia = this.textoIncidencias.toString().match(/(No conformidad|Observación|Recomendacion):\s?.+?(No conformidad|Observación|Recomendacion):/)[0]
          caso = incidencia.toString().match(/(No conformidad|Observación|Recomendacion)\s?:\s?[^:]+(Esto acontece en los siguientes casos:|\.)/)
          // Limpiamos las palabras demas
          if (caso !== null && caso.length > 0) {
            caso = caso[0].toString()
            caso = caso.toString().replace('Esto acontece en los siguientes casos:','')
            console.log(caso)
            if (incidencia !== null) {
              this.planesDeAccion.push({
                nombre: caso,
                mailEncargado: '',
                formatoNombre: '',
                ocurrencias: [],
                campos: []
              })
              this.textoIncidencias = this.textoIncidencias.toString().replace(incidencia.toString().replace(incidencia.split('.')[incidencia.split('.').length-1],''), '')
              incidencia = null
            } else {
              this.textoIncidencias = '' 
            }
          } else {
            console.log(caso)
            break
          }
        }
        this.textoIncidencias = this.texto.toString().match(/(No conformidad|Observación|Recomendacion)\s?:\s?.+CONCLUSIONES/g)
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
      secciones = this.textoIncidencias.toString().split(this.planesDeAccion[0].nombre + 'Esto acontece en los siguientes casos:')
      if (this.archivo !== null && this.formatoElegido !== null && this.formatoElegido.ocurrencias.length > 0) {
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
            datos.push([])
            if (i < this.formatoElegido.ocurrencias.length-1)
            {
              datos[i] = secciones.toString().match(campo + '.+?' + expresion)
            } else {
              datos[i] = secciones.toString().match(campo + '.+\.')
            }
            if(!isNullOrUndefined(datos[i]) && datos[i].length > 0) {
              datos[i] = datos[i][0]
              this.formatoElegido.ocurrencias.forEach(o => {
                datos[i] = datos[i].replace(o, '')
              })
              datos[i] = datos[i].split('.')
            }
          })
          console.log(this.planesDeAccion)
          for (let i = 0; i < datos[0].length; i++) {
            
            // console.log(datos[i].length)
            // datos.forEach((dato, j) => {
            //   this.planesDeAccion[0].ocurrencias[i].campos.push({
            //     titulo: this.formatoElegido.ocurrencias[j],
            //     contenido: dato[i]
            //   })
            // })
          }
        }
      }
    },
    setFormatoElegido (val) {
      this.formatoElegido = val
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
    }
  }
}
</script>

<style scoped>

</style>