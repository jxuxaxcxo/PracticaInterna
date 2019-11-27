<template>
    <v-container>
            <v-card-title class="justify-center">NUEVO INFORME DE AUDITORIA</v-card-title>
        <v-row>
          <v-col  cols="1"></v-col>
          <v-col cols="5">
            <v-form
            v-model="validoData"
            >
              <v-select
              :items="formatos"
              label="Formato de Plan de Accion"
              item-text="nombre"
              v-model="seleccionFormatoN"
              @change="onSeleccionFormato"
              :rules="reglas.formato"
              id="formatoSeleccion"
              required
              >
              </v-select>
              <v-text-field
              v-model="nombre"
              label="Nombre del informe (Unico)"
              :disabled="!filled"
              :counter="63"
              :rules="reglas.titulo"
              required
              ></v-text-field>
              <v-text-field
              label="Breve Descripción"
              v-model="descripcion"
              :rules="reglas.descripcion"
              required
              :counter="255"
              ></v-text-field>
              <v-menu
                v-model="calendarioMostrar"
                :close-on-content-click="false"
                >
                <template v-slot:activator="{ on }">
                    <v-text-field
                    :value="fechaAtribuible"
                    clearable
                    :rules="reglas.fecha"
                    label="Fecha atribuible"
                    readonly
                    required
                    v-on="on"
                    @click:clear="fechaAtribuible = null"
                    ></v-text-field>
                </template>
                <v-date-picker
                    locale
                    v-model="fechaAtribuible"
                    @change="calendarioMostrar = false"
                    :max="fechaAtribuible"
                ></v-date-picker>
              </v-menu>
              <ListaNC
              :validoNC ="validoNC"
              :noConformidades="noConformidades"
              :preparacion="isFormatoSeleccionado"
              @setValidoNC="setValidoNC"
              @agregarNC="agregarNoConformidad"
              />
            </v-form>
          </v-col>
          <v-col cols="5">
            <v-file-input
              v-model="file"
              placeholder="Seleccione un Informe"
              label="Suba su Informe"
              prepend-icon="mdi-paperclip"
              accept = ".docx"
              @change="fileRead()"
              id="fileSelector"
              :disabled="!filled"
              ></v-file-input>
            <lista-campos
            altura = "66vh"
            :campos="seleccionFormato.campos"
            />
          </v-col>
          <v-col cols="1"></v-col>
        </v-row>
        <v-row>
          <v-col cols="9"></v-col>
          <v-col>
            <v-btn
            color="#3B83BD"

            :disabled="aceptado"

            @click="guardarInforme"

            outlined>Agregar Informe</v-btn>
          </v-col>
        </v-row>
    </v-container>
</template>
<script>
import docx4js from "docx4js"

import ListaNC from '../components/FuenteNC/ListaNC'
import ListaCampos from '../components/FuenteNC/ListaCampos'

//import ListaNC from '../components/NewInforme/ListaNC.vue'
import { FirebaseInforme, agregarInforme } from '../components/ConexionFirebase/FirebaseInforme'

export default {
  components: {
    ListaNC,
    ListaCampos
  },
  data () {
    return {
        filled: false,
        isFormatoSeleccionado: false,
        nombre: '',
        file: [],
        text: [],
        descripcion: '',
        noConformidades: [],
        validoData: false,
        validoNC: true,
        fechaAtribuible: new Date().toISOString().substr(0, 10),
        calendarioMostrar: false,
        reglas: {
          titulo: [
            v => !!v || 'Este campo es necesario',
            v => v.length <= 63 || 'El titulo debe contener menos de 63 caracteres'
          ],
          descripcion: [
              v => !!v || 'Este campo es necesario',
              v => v.length <= 255 || 'La descripción debe contener menos de 255 caracteres'
          ],
          formato: [
            v => !!v || 'Este campo es necesario',
          ],
          fecha: [
              v => !!v || 'Este campo es necesario',
          ]
        },
        formatos: [
          {
            nombre: 'formatoA',
            campos: [
              {
              titulo: 'LÍMITES A',
              data: ''
              },
              {
              titulo: 'UBICACIÓN',
              data: ''
              }
            ],
            atributos: [
              {

              titulo: 'Observación',
              contenido: ''

              },
              {

              titulo: 'Diversión',
              contenido: ''

              }
            ]
          },
          {
            nombre: 'formatoB',
            campos: [
              {
              titulo: 'ORIGEN',
              data: ''
              },
              {
              titulo: 'UBICACIÓN',
              data: ''
              }
            ],
            atributos: [
              {

              titulo: 'Observación',
              contenido: ''

              },
              {

              titulo: 'Encargado',
              contenido: ''

              }
            ]
          }
        ],
        seleccionFormato: [],
        seleccionFormatoN: []
    }
  },
  computed: {
      aceptado () {
        return this.filled && this.validoData && this.validoNC && this.noConformidades.length > 0
      }
  },
  methods: {

    setValidoNC (val) {
      this.validoNC = val
    },
    onSeleccionFormato () {
      this.formatos.forEach((formato) => {
        this.filled = true
        if (formato.nombre === this.seleccionFormatoN) {
          this.seleccionFormato = formato
        }
      })

        this.nombre = []
        this.file = null
        this.nombre = []
        this.noConformidades = []
        this.isFormatoSeleccionado = true
    },
    agregarNoConformidad (titulo) {
      this.noConformidades.unshift({})
      this.noConformidades[0].titulo = titulo
      this.noConformidades[0].atributos = this.seleccionFormato.atributos
    },
    fileRead () {
      this.limpiar()
      
      if (this.file !== null)
      {
        this.leerDatos()
      }
    },
    leerDatos () {
      docx4js.load(this.file).then(docx => {
      this.text =  docx.officeDocument.content.text()
      const noConformidad  = this.text.toString().match(/No\sconformidad:\s[^\:]+\:/g)
      if (noConformidad !== null)
      {
        noConformidad.forEach((nc)=>{
        this.agregarNoConformidad(nc.replace('No conformidad: ', '').replace(':',''))
        })
      }
        let camps = []
        this.seleccionFormato.campos.forEach((campo, i) => {
          camps.push({
            titulo: campo.titulo.replace(' ', '\\s'),
            index: i
            })
        })
        camps.forEach((campo) => {
          this.normalizarCamposObtenidos(campo)
        })
    })
    },
    limpiar () {
      this.nombre = document.getElementById('fileSelector').value.split(/(C\:\\fakepath\\)|(\.docx)/)[3]
      this.noConformidades = []
      if (this.seleccionFormato !== [])
      {
        this.seleccionFormato.campos.forEach((campo) => {
          campo.data = ''
        })
      }
    },
    guardarInforme () {

      agregarInforme(this.nombre, this.noConformidades, this.seleccionFormato)
    
    },
    normalizarCamposObtenidos (campo) {

      const contenido = this.text.toString().match(campo.titulo + '[^.]+\.')
      campo.titulo = campo.titulo.replace('\\s', ' ')
      if (contenido !== null)
      {
        this.seleccionFormato.campos[campo.index].data = contenido.toString().replace(campo.titulo,'')
      }

    }
  }
}
</script>
<style scoped>
.scroll {
      overflow-y: auto;
}
</style>/