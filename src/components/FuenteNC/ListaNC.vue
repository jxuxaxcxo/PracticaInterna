<template>
    <div class="tabla elevation-0">
        <v-icon
        id="agregarNCBoton"
        @click="agregarNC"
        >mdi-plus</v-icon>
        <v-subheader
        class="justify-center white--text titulo"
        id="tituloListaNC"
        >
        No Conformidades
        </v-subheader>
        <v-card
        class="scroll"
        height="70vh"
        id="ListaNC"
        >
            <v-form
            v-model="validoNC"
            >
                <v-container>
                    <v-row
                    v-for="(noConformidad,i) in noConformidades"
                    :key="i"
                    :id="'filaNC' + i"
                    >
                    <v-col cols="11">
                        <v-text-field
                        v-model="noConformidades[i]"
                        :id="'noConformidad' + i"
                        :counter="511"
                        :rules="reglas.noConformidad"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="1">
                        <v-icon
                        @click="borrarNoConformidad(i)"
                        :id="'borraraNC' + i +'boton'"
                        >mdi-delete</v-icon>
                    </v-col>
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
    validoNC: Boolean
  },
  data: () => ({
    reglas: {
      noConformidad: [
        v => !!v || 'Este campo es necesario',
        v => v.length <= 511 || 'El titulo debe contener menos de 511 caracteres'
      ]
    }
  }),
  methods: {
    agregarNC () {
      this.noConformidades.unshift('Nueva No Conformidad')
    },
    borrarNoConformidad(indice)
    {
      this.noConformidades.splice(indice,1)
    }
  },
  watch: {
    validoNC: function (val) {
      this.$emit('setValidoNC', val)
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