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
          <v-col cols="5">
            <v-file-input
            v-model="file"
            placeholder="Seleccione un Informe"
            label="Suba su Informe"
            prepend-icon="mdi-paperclip"
            accept = ".docx"
            @change="fileRead()"
            id="fileSelector"
            ></v-file-input>
            <v-text-field
            v-model="nombre"
            label="Nombre del informe (Unico)"
            style="margin-left: 2vw"
            ></v-text-field>
            <v-select
            style="margin-left: 2vw"
            :items="formatos"
            label="Formato de Plan de Accion"
            item-text="nombre"
            v-model="seleccionFormatoN"
            @change="onSeleccionFormato"
            >

            </v-select>
            <v-icon style ="margin-left: 31vw;">
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
              <ListaNC
              :noConformidades="noConformidades"/>
            </v-card>
          </v-col>
          <v-col cols="5">
            <v-card class="elevation-0">
              <div style="background-color: #3B83BD; text-align: center;">
                <v-title primary-title class="justify-center white--text">DATOS</v-title>
              </div>
            </v-card>
            <v-card
            height="70vh"
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
        <div></div>
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
        nombre: [],
        file: [],
        text: [],
        noConformidades: [],
        formatos: [
          {
            nombre: 'formatoA',
            campos: [
              {
              titulo: 'LIMITES A',
              data: 'p'
              },
              {
              titulo: 'UBICACIÓN',
              data: 'p'
              }
            ]
          },
          {
            nombre: 'formatoB',
            campos: [
              {
              titulo: 'ORIGEN',
              data: 'p'
              },
              {
              titulo: 'UBICACIÓN',
              data: 'p'
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
        if (formato.nombre === this.seleccionFormatoN) {
          this.seleccionFormato = formato
        }
      })
      if (this.nombre !== undefined && this.nombre !== null && this.nombre.length > 0)
      {
        this.fileRead()
      }
    },
    fileRead () {
      this.nombre = document.getElementById('fileSelector').value.split(/(C\:\\fakepath\\)|(\.docx)/)[3]
      this.noConformidades = []
      if (this.seleccionFormatoN !== null && this.seleccionFormatoN.length > 0) {
        this.seleccionFormato.campos.forEach((campo) => {
        campo.data = ''
      })
      }
      if (this.file !== null)
      {
        docx4js.load(this.file).then(docx => {
          this.text =  docx.officeDocument.content.text()
          const ncs  = this.text.toString().match(/NO\sCONFORMIDAD:\s[^\.]+\./g)
          ncs.forEach((nc)=>{
            this.noConformidades.push(nc.replace('NO CONFORMIDAD: ', ''))
          })
          if (this.seleccionFormatoN !== null && this.seleccionFormatoN.length > 0)
          {
            let camps = []
            this.seleccionFormato.campos.forEach((campo, i) => {
              camps.push({
                titulo: campo.titulo.replace(' ', '\\s'),
                index: i
                })
            })
            camps.forEach((campo) => {
              const cs = this.text.toString().match(campo.titulo + '[^.]+\.')
              campo.titulo = campo.titulo.replace('\\s', ' ')
              this.seleccionFormato.campos[campo.index].data = cs.toString().replace(campo.titulo,'')
            })
          }
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