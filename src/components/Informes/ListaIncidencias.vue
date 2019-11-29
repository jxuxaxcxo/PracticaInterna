<template>
    <v-container>
        <v-row>
            <v-col>
                <v-icon
                id="agregarNCBoton"
                >
                    mdi-plus
                </v-icon>
                <v-icon
                id="anteriorNC"
                >
                mdi-arrow-left</v-icon>
                <v-icon
                id="siguienteNC"
                >mdi-arrow-right</v-icon>
                <v-icon
                :id="'borraraNCBoton'"
                >mdi-delete</v-icon>
                <v-subheader
                class="justify-center white--text titulo"
                id="tituloListaNC"
                >
                planesDeAccion
                </v-subheader>
                <v-card
                height="50vh"
                >
                    <v-container>
                        <v-row>
                            <v-col></v-col>
                            <v-col cols="10">
                                <v-text-field
                                label="Nombre"
                                v-model="incidenciaActual.nombre"
                                ></v-text-field>
                            </v-col>
                            <v-col></v-col>
                        </v-row>
                        <v-row>
                            <v-col></v-col>
                            <v-col cols="10">
                                <v-select
                                label="Encargado"
                                :items="usuarios"
                                item-text="id"
                                v-model="incidenciaActual.encargadoID"
                                ></v-select>
                            </v-col>
                            <v-col></v-col>
                        </v-row>
                        <v-row>
                            <v-col></v-col>
                            <v-col cols="10">
                                <v-select
                                label="Formato de Plan de Accion"
                                :items="formatos"
                                item-text="nombre"
                                ></v-select>
                            </v-col>
                            <v-col></v-col>
                        </v-row>
                    </v-container>
                </v-card>

            </v-col>
            <v-col>

            </v-col>
            <v-col>

            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
  props: {
    planesDeAccion: Array,
    formatos: Array,
    usuarios: Array
  },
  data () {
    return {
      formatoElegidoNombre: null,
      formatoElegido: null,
      encargadoID: null
    }
  },
  computed: {
    incidenciaActual () {
      return this.planesDeAccion[0]
    }
  },
  watch: {
    formatoElegidoNombre: function (val) {
      this.formatos.forEach(formato => {
        if (val === formato.nombre) {
            this.formatoElegido = formato
        }
      })
    }
  }
}
</script>
<style scoped>
.titulo {
    background-color: #3B83BD;
}
</style>