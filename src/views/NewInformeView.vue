<template>
    <v-container>
        <v-row>
          <v-col></v-col>
          <v-col>
          <v-card color="transparent" class="elevation-0">
            <v-card-title>NUEVO INFORME DE AUDITORIA</v-card-title>
          </v-card>
          </v-col>
          <v-col></v-col>
        </v-row>
        <v-row>
          <v-col  cols="1"></v-col>
          <v-col cols="5" height="90vh">
            <v-select
            style="margin-left: 2vw"
            :items="formatos"
            label="Formato de Plan de Accion"
            item-text="nombre"
            v-model="seleccionFormatoN"
            @change="onSeleccionFormato"
            >
            </v-select>
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
            <v-text-field
            v-model="nombre"
            label="Nombre del informe (Unico)"
            style="margin-left: 2vw"
            :disabled="!filled"
            ></v-text-field>
            <v-icon style ="margin-left: 1vw;" @click="noConformidades.push('Nueva No Conformidad')">
              mdi-plus
            </v-icon>
            <v-card class="elevation-0">
              <div style="background-color: #3B83BD; text-align: center;">
                <v-title primary-title class="justify-center white--text">NO CONFORMIDADES</v-title>
              </div>
            </v-card>
            <v-card
            height="41.5vh"
            class="scroll">
              <v-container>
                <v-row 
                v-for="(noConformidad, i) in noConformidades"
                :key="i"
                >
                  <v-col cols="11">
                    <v-text-field
                    style="margin-top: -1vh"
                    v-model="noConformidades[i]"
                    :id="'noConformidad' + i"
                    >
                    </v-text-field>
                  </v-col>
                  <v-col cols="1">
                    <v-icon
                    small
                    icon
                    color="#3B83BD"
                    @click="noConformidades.splice(i,1)"
                    :id="'borrarNC' + i"
                    >
                        mdi-delete
                    </v-icon>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-col>
          <v-col cols="5" height="80vh">
            <v-card class="elevation-0">
              <div style="background-color: #3B83BD; text-align: center;">
                <v-title primary-title class="justify-center white--text">DATOS</v-title>
              </div>
            </v-card>
            <v-card
            height="73vh"
            class="scroll">
              <v-container>
                <v-row
                v-for="(campo,i) in seleccionFormato.campos"
                :key="i"
                >
                 <v-col cols="1"></v-col>
                 <v-col cols="10">
                  <v-text-field
                  :label="campo.titulo"
                  v-model="campo.data"></v-text-field>
                 </v-col>
                 <v-col cols="1"></v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-col>
          <v-col cols="1"></v-col>
        </v-row>
        <v-row>
          <v-col cols="9"></v-col>
          <v-col>
            <v-btn
            color="#3B83BD"
            outlined>Agregar Informe</v-btn>
          </v-col>
        </v-row>
    </v-container>
</template>
<script>
import docx4js from "docx4js"
import ListaNC from '../components/NewInforme/ListaNC.vue'
export default {
  components: {
    ListaNC
  },
  data () {
    return {
        filled: false,
        nombre: [],
        file: [],
        text: [],
        noConformidades: [],
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
  methods: {
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