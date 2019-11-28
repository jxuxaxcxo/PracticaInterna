<template>
    <v-container>
        <v-form
        v-model="valido"
        >
            <v-row>
                <v-col>
                    <v-file-input
                    v-model="archivo"
                    placeholder="Seleccione un Informe"
                    label="Suba su Informe"
                    prepend-icon="mdi-paperclip"
                    accept = ".docx"
                    id="archivoSelector"
                    :rules="reglas.archivo"
                    ></v-file-input>
                </v-col>
                <v-col>
                    <v-text-field
                    v-model="nombre"
                    label="Nombre del informe"
                    hint="Se recomienda un nombre unico y facil de reconocer" 
                    :rules="reglas.titulo"
                    ></v-text-field>
                </v-col>
                <v-col>
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
                        ></v-date-picker>
                    </v-menu>
                </v-col>
            </v-row>
        </v-form>
    </v-container>
</template>
<script>
import { watch } from 'fs'
export default {
  props: {
    archivo: File,
    nombre: String,
    fechaAtribuible: String,
    valido: Boolean
  },
  data () {
    return {
      reglas: {
        titulo: [
          v => !!v || 'Este campo es necesario',
          v => v.length <= 63 || 'El titulo debe contener menos de 63 caracteres'
        ],
        archivo: [
          v => !!v || 'Este campo es necesario',
        ],
        fecha: [
          v => !!v || 'Este campo es necesario',
        ]
      }
    }
  },
  watch: {
    archivo: function (val) {
      this.$emit('setNombre', document.getElementById('archivoSelector').value.split(/(C\:\\fakepath\\)|(\.docx)/)[3])
      this.$emit('setArchivo', val)
    },
    fechaAtribuible: function (val) {
      this.$emit('setFechaAtribuible', val)
    },
    nombre: function (val) {
      this.$emit('setNombre', val)
    },
    valido: function (val) {
      this.$emit('setDatosValidos', val)
    }
  }
}
</script>