<template>

<v-container fluid>
    <v-card-title class="justify-center">Nueva fuente de incidencias
    </v-card-title>
    <v-row>
        <v-col cols="1"></v-col>
        <v-col cols="4">
            <v-form
            v-model="validoData"
            >
                <v-text-field
                label="Nombre de la Fuente"
                v-model="titulo"
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
                <v-select
                :items="formatos"
                item-text="nombre"
                label="Seleccione un Formato"
                v-model="formatoSeleccionadoN"
                @change="onSeleccionFormato"
                ></v-select>
                <ListaNC
                :validoNC ="validoNC"
                :noConformidades="noConformidades"
                @setValidoNC="setValidoNC"
                />
            </v-form>
        </v-col>
        <v-col cols="1"></v-col>
        <v-col cols="5">
            <lista-campos
            altura="70vh"
            :campos="formatoSeleccionado.campos"
            @setValidoFormularioDatos="setValedoFormularioDatos"
            />
        </v-col>
        <v-col cols="1"></v-col>
    </v-row>
   <v-row>
       <v-col cols="9"></v-col>
       <v-col cols="3">
           <v-btn
           :disabled="aceptado"
           id="agregarFuenteNCboton"
           @click="agregar"
           color="#3B83BD"
           outlined
           >Agregar Fuente</v-btn>
       </v-col>
   </v-row>
</v-container>
</template>

<script>
import ListaNC from '../components/FuenteNC/ListaNC.vue';
import ListaCampos from '../components/FuenteNC/ListaCampos.vue'

export default {
    name: 'FuenteNcView',
    components: {
        ListaNC,
        ListaCampos
    },
    data() {
        return {
            titulo: '',
            descripcion: '',
            calendarioMostrar: false,   
            validoData: false,
            validoNC: true,
            validoFormularioDatos: true, 
            formatoSeleccionadoN: [],
            formatoSeleccionado: [],   
            reglas: {
                titulo: [
                    v => !!v || 'Este campo es necesario',
                    v => v.length <= 63 || 'El titulo debe contener menos de 63 caracteres'
                ],
                descripcion: [
                    v => !!v || 'Este campo es necesario',
                    v => v.length <= 255 || 'La descripción debe contener menos de 255 caracteres'
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
            fechaAtribuible: new Date().toISOString().substr(0, 10),
            noConformidades: [
                "No wifi Laboratorio 11 JLP",
                "Piggy biggie",
                "Pina dijo la nina",
                "CJ presente",
                "Es esto suficiente?",
                "yaaa",
                "yaaa",
                "yaaa",
                "yaaa",
                "yaaa",
                "yaaa",
                "yaaa"
            ]
        }
    },
    computed: {
      aceptado () {
        return this.validoFormularioDatos && this.validoData && this.validoNC && this.noConformidades.length > 0
      }
    },
    methods: {
      agregar () {
          console.log('agregando')
      },
      setValidoNC (val) {
          this.validoNC = val
      },
      setValedoFormularioDatos (val) {
          this.validoFormularioDatos = val
      },
      onSeleccionFormato () {
        this.formatos.forEach((formato, i) => {
            if (formato.nombre === this.formatoSeleccionadoN) {
                this.formatoSeleccionado = formato
            }
        })
      }
    }
}
</script>

<style scoped>
</style>