<template>
    <v-container>
        <v-row>
            <v-col>
                <v-icon
                id="agregarNCBoton"
                @click="agregarIncidencia('incidencia')"
                >
                mdi-plus
                </v-icon>
                <v-icon
                id="anteriorNC"
                @click="paginaAnterior('incidencia')"
                >
                mdi-arrow-left</v-icon>
                <v-icon
                id="siguienteNC"
                @click="paginaSiguiente('incidencia')"
                >mdi-arrow-right</v-icon>
                <v-icon
                :id="'borraraNCBoton'"
                @click="borrarIncidencia('incidencia')"
                >mdi-delete</v-icon>
                <v-subheader
                class="justify-center white--text titulo"
                id="tituloListaNC"
                >
                Planes De Accion
                </v-subheader>
                <v-card
                height="50vh"
                >
                  <div
                  class="tabla">
                    <v-container>
                        <v-row>
                            <v-col></v-col>
                            <v-col cols="10">
                                <v-textarea
                                label="Nombre"
                                v-model="nombre"
                                auto-grow
                                ></v-textarea>
                            </v-col>
                            <v-col></v-col>
                        </v-row>
                        <v-row>
                            <v-col></v-col>
                            <v-col cols="10">
                                <v-select
                                label="Encargado"
                                :items="usuarios"
                                item-text="mail"
                                v-model="mailEncargado"
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
                                v-model="formatoElegidoNombre"
                                ></v-select>
                            </v-col>
                            <v-col></v-col>
                        </v-row>
                    </v-container>
                  </div>  
                </v-card>

            </v-col>

            <v-col>
                <v-icon
                id="agregarNCBoton"
                @click="agregarIncidencia('ocurrencia')"
                >
                mdi-plus
                </v-icon>
                <v-icon
                id="anteriorNC"
                @click="paginaAnterior('ocurrencia')"
                >
                mdi-arrow-left</v-icon>
                <v-icon
                id="siguienteNC"
                @click="paginaSiguiente('ocurrencia')"
                >mdi-arrow-right</v-icon>
                <v-icon
                :id="'borraraNCBoton'"
                @click="borrarIncidencia('ocurrencia')"
                >mdi-delete</v-icon>
                <v-subheader
                class="justify-center white--text titulo"
                id="tituloListaCampos"
                >
                Ocurrencias
                </v-subheader>
                <v-card
                height="50vh">
                  <div
                  class="tabla">
                    <v-container
                    v-if="ocurrencias.length > 0">
                      <v-row
                      v-for="(campoOcurrencia, i) in ocurrencias[0].campos"
                      :key="i"
                      :id="'campoOcurrencia'+i">
                        <v-col></v-col>
                        <v-col cols="10">
                            <v-textarea
                            :label="campoOcurrencia.titulo"
                            :id="'textFieldOcurrencia' + i"
                            v-model="campoOcurrencia.contenido"
                            auto-grow
                            ></v-textarea>
                        </v-col>
                        <v-col></v-col>
                      </v-row>
                    </v-container>
                  </div>
                </v-card>
            </v-col>

            <v-col>
                <v-subheader
                style="margin-top: 3.6vh;"
                class="justify-center white--text titulo"
                id="tituloListaCampos"
                >
                Campos
                </v-subheader>
                <v-card
                height="50vh">
                  <div
                  class="tabla">
                    <v-container>
                        <v-row
                        v-for="(campo, i) in campos"
                        :key="i"
                        :id="'campo'+i">
                            <v-col></v-col>
                            <v-col cols="10">
                                <v-textarea
                                :label="campo.titulo"
                                :id="'textFieldCampo' + i"
                                v-model="campo.contenido"
                                auto-grow
                                ></v-textarea>
                            </v-col>
                            <v-col></v-col>
                        </v-row>
                    </v-container>
                  </div>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import { isNullOrUndefined } from 'util'
export default {
  props: {
    planesDeAccion: Array,
    formatos: Array,
    usuarios: Array
  },
  data () {
    return {
      formatoElegido: null,
      formatoElegidoNombre: null,
      mailEncargado: null,
      nombre: null,
      campos: [],
      ocurrencias: []
    }
  },
  watch: {
    nombre: function (val) {
      if (!isNullOrUndefined(this.planesDeAccion) && this.planesDeAccion.length > 0)
      {
        this.planesDeAccion[0].nombre = val
      }
    },
    mailEncargado: function (val) {
      if (!isNullOrUndefined(this.planesDeAccion) && this.planesDeAccion.length > 0)
      {
        this.planesDeAccion[0].mailEncargado = val
      }
    },
    campos: function (val) {
      if (!isNullOrUndefined(this.planesDeAccion[0]) && this.planesDeAccion.length > 0)
      {
        this.planesDeAccion[0].campos = val
      }
    },
    formatoElegidoNombre: function (val) {
      if (!isNullOrUndefined(this.formatos) && ! isNullOrUndefined(this.planesDeAccion) && this.planesDeAccion.length > 0) {
        this.formatos.forEach(formato => {
        if (val === formato.nombre) {
          this.formatoElegido = formato
        }
      })
      this.planesDeAccion[0].formatoNombre = this.formatoElegidoNombre
      this.campos = []
      this.ocurrencias = []
      this.$emit('setFormatoElegido', this.formatoElegido)
      }
    },
    formatoElegido: function(val) {
      if (val !== null)
      {
        val.campos.forEach(campo => {
        this.campos.push({
          titulo: campo,
          contenido: ''
          })
        })
        this.$emit('leerCampos')
        this.$emit('leerOcurrencias')
      }
    },
    ocurrencias: function (val) {
      if (!isNullOrUndefined(this.planesDeAccion[0]))
      {
        this.planesDeAccion[0].ocurrencias = val
      }
    },
    formatos: function (val) {
      if (this.formatos.length > 0)
      {
        this.formatos.forEach(formato => {
          if (this.formatoElegidoNombre === formato.nombre) {
          this.formatoElegido = formato
         }
        })
      }
    },
    planesDeAccion: function (val) {
      if (!isNullOrUndefined(this.planesDeAccion) && this.planesDeAccion.length > 0)
      {
        this.ocurrencias = val[0].ocurrencias
        this.campos = val[0].campos
        this.nombre = val[0].nombre
        this.mailEncargado = val[0].mailEncargado
        this.formatoElegidoNombre = val[0].formatoNombre
        this.formatos.forEach(formato => {
          if (this.formatoElegidoNombre === formato.nombre) {
            this.formatoElegido = formato
          }
        })
      } else {
        this.ocurrencias = [],
        this.campos = [],
        this.nombre = null,
        this.mailEncargado = null,
        this.formatoElegidoNombre = null,
        this.formatoElegido = null
      }
    }
  },
  methods: {
    agregarIncidencia (elemento) {
      switch (elemento) {
        case 'incidencia':
          this.planesDeAccion.unshift({
            nombre: 'Nuevo Plan De Acción',
            ocurrencias: [],
            campos: [],
            mailEncargado: '',
            formatoNombre: '',
            tareas: []
          })
          if (this.formatoElegido !== null)
          {
              this.formatoElegido.campos.forEach(campo => {
                this.planesDeAccion[0].campos.push({
                    titulo: campo,
                    contenido: ''
                })
              })
          }
        break;
        case 'ocurrencia':
          if (this.formatoElegido !== null) {
            this.ocurrencias.unshift({
              campos: []
            })
            this.formatoElegido.ocurrencias.forEach(campo => {
              this.ocurrencias[0].campos.push({
                titulo: campo,
                contenido: ''
              })
            })
          }
        break;
        
        default:
        break;
      }
    },
    setOcurrenciaActual (titulo, contenido, indexCampo) {
      this.ocurrencias[0].campos[indexCampo].titulo = titulo
      this.ocurrencias[0].campos[indexCampo].contenido = contenido
    },
    paginaSiguiente (elemento) {
      let array
      switch (elemento) {
        case 'incidencia':
          array = this.planesDeAccion
        break;
        case 'ocurrencia':
            array = this.ocurrencias
        break;
        
        default:
        break;
      }
      array.push(array[0])
      array.shift()
    },
    paginaAnterior (elemento) {
      let array
      switch (elemento) {
        case 'incidencia':
          array = this.planesDeAccion
        break;
        case 'ocurrencia':
            array = this.ocurrencias
        break;
        
        default:
        break;
      }
      array.unshift(array.pop())
    },
    borrarIncidencia (elemento)
    {
      let array
      switch (elemento) {
        case 'incidencia':
          array = this.planesDeAccion
        break;
        case 'ocurrencia':
            array = this.ocurrencias
        break;
        
        default:
        break;
      }
      array.splice(0,1)
      if (this.planesDeAccion.length === 0)
      {
        this.agregarIncidencia()
      }
    },

  }
}
</script>
<style scoped>
.titulo {
    background-color: #252440;
}
.noMargenIzquierdoTabla {
    margin-left: -2vw;
}
.tabla {
  overflow-y: scroll;
  height: 50vh;
}
</style>