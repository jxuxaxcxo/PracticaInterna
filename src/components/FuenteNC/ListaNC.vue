<template>
    <div class="tabla elevation-0">
        <v-icon
        id="agregarNCBoton"
        @click="agregarNC"
        :disabled="!preparacion"
        >mdi-plus</v-icon>
        <v-icon
        id="anteriorNC"
        :disabled="!preparacion"
        >
        mdi-arrow-left</v-icon>
        <v-icon
        id="siguienteNC"
        @click="paginaSiguiente"
        :disabled="!preparacion"
        >mdi-arrow-right</v-icon>
        <v-icon
        @click="borrarNoConformidad(0)"
        :id="'borraraNCBoton'"
        :disabled="!preparacion"
        >mdi-delete</v-icon>
        <v-subheader
        class="justify-center white--text titulo"
        id="tituloListaNC"
        >
        No Conformidades
        </v-subheader>
        <v-card
        class="scroll"
        height="34vh"
        id="ListaNC"
        >
            <v-form
            v-model="validoNC"
            >
                <v-container
                v-if="paginaActual !== null && paginaActual !== undefined">
                    <v-row
                    :id="'tituloNC'"
                    >
                    <v-col cols="11">
                        <v-text-field
                        v-model="paginaActual.titulo"
                        :id="'noConformidadTitulo'"
                        :counter="511"
                        :rules="reglas.noConformidad"
                        label="Titulo"
                        ></v-text-field>

                    </v-col>
                    <v-col cols="1">
                    </v-col>
                    </v-row>
                    <v-row
                    v-for="(atributo,i) in paginaActual.atributos"
                    :key="i"
                    >
                    <v-col cols="11">
                        <v-text-field
                        v-model="atributo.contenido"
                        :id="'atributo' + i"
                        :counter="511"
                        :rules="reglas.campo"
                        :label="atributo.titulo"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="1"></v-col>
                    </v-row>
                </v-container>
            </v-form>
        </v-card>
    </div>
</template>
<script>
export default {
  props: {
    noConformidades: Array,
    validoNC: Boolean,
    preparacion: Boolean
  },
  data: () => ({
    reglas: {
      noConformidad: [
        v => !!v || 'Este campo es necesario',
        v => v.length <= 511 || 'El titulo debe contener menos de 511 caracteres'
      ],
      campo: v => v.length <= 511 || 'El titulo debe contener menos de 511 caracteres'
      
    }
  }),
  methods: {
    agregarNC () {
      this.$emit('agregarNC', 'Nueva No Conformidad')
    },
    borrarNoConformidad(indice)
    {
      this.noConformidades.splice(indice,1)
    },
    paginaSiguiente () {
        this.noConformidades.push(this.noConformidades[0])
        this.noConformidades.shift()
    },
    paginaAnterior () {

    }
  },
  watch: {
    validoNC: function (val) {
      this.$emit('setValidoNC', val)
    }
  },
  computed: {
      paginaActual () {
        return this.noConformidades[0]
      }
  }
}
</script>
<style scoped>
.scroll {
    overflow-y: scroll;
}
.titulo {
    background-color: #3B83BD;
}
</style>