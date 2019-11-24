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
              @setValidoNC="setValidoNC"
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
            @setValidoFormularioDatos="setValedoFormularioDatos"
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
            outlined>Agregar Informe</v-btn>
          </v-col>
        </v-row>
    </v-container>
</template>
<script>
import docx4js from "docx4js"
import ListaNC from '../components/FuenteNC/ListaNC'
import ListaCampos from '../components/FuenteNC/ListaCampos'
export default {
  components: {
    ListaNC,
    ListaCampos
  },
  data () {
    return {
        filled: false,
        nombre: '',
        file: [],
        text: [],
        descripcion: '',
        noConformidades: [],
        validoData: false,
        validoNC: true,
        validoFormularioDatos: true,
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
            ]
          }
        ],
        seleccionFormato: [],
        seleccionFormatoN: []
    }
  },
  computed: {
      aceptado () {
        return this.filled && this.validoFormularioDatos && this.validoData && this.validoNC && this.noConformidades.length > 0
      }
  },
  methods: {
    setValidoNC (val) {
      this.validoNC = val
    },
    setValedoFormularioDatos (val) {
      this.validoFormularioDatos = val
    },
    onSeleccionFormato () {
      this.formatos.forEach((formato) => {
        this.filled = true
        if (formato.nombre === this.seleccionFormatoN) {
          this.seleccionFormato = formato
        }
        this.nombre = []
        this.file = null
        this.nombre = []
        this.noConformidades = []
      })
    },
    fileRead () {
      this.nombre = document.getElementById('fileSelector').value.split(/(C\:\\fakepath\\)|(\.docx)/)[3]
      this.noConformidades = []
      if (this.seleccionFormato !== [])
      {
        this.seleccionFormato.campos.forEach((campo) => {
          campo.data = ''
        })
      }
      console.log('0')
      
      if (this.file !== null)
      {
        docx4js.load(this.file).then(docx => {
          this.text =  docx.officeDocument.content.text()
          const ncs  = this.text.toString().match(/NO\sCONFORMIDAD:\s[^\.]+\./g)
          console.log('1')
          ncs.forEach((nc)=>{
            this.noConformidades.push(nc.replace('NO CONFORMIDAD: ', ''))
          })
            let camps = []
            this.seleccionFormato.campos.forEach((campo, i) => {
              camps.push({
                titulo: campo.titulo.replace(' ', '\\s'),
                index: i
                })
            })
            camps.forEach((campo) => {
              const cs = this.text.toString().match(campo.titulo + '[^.]+\.')
              console.log(cs)
              campo.titulo = campo.titulo.replace('\\s', ' ')
              if (cs !== null)
              {
                this.seleccionFormato.campos[campo.index].data = cs.toString().replace(campo.titulo,'')
              }
              console.log('3')
            })
        })
      }
    }
  }
}
</script>
<style scoped>
.scroll {
      overflow-y: auto;
}
</style>