<template>
    <div class="tabla elevation-0">
        <v-subheader
        class="justify-center white--text titulo"
        id="tituloListaCampos"
        >
        Datos Formulario
        </v-subheader>
        <v-card
        class="scroll"
        :height="altura"
        id="ListaCampos"
        >
            <v-form
            v-model="validoFormularioDatos"
            >
                <v-container>
                    <v-row
                    v-for="(campo,i) in campos"
                    :key="i"
                    :id="'filaCampos' + i"
                    >
                    <v-col cols="11">
                        <v-text-field
                        v-model="campos[i].data"
                        :label="campos[i].titulo"
                        :id="'campo' + i"
                        :counter="511"
                        :rules="reglas.campo"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="1">
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
    campos: Array,
    validoFormularioDatos: Boolean,
    altura: String
  },
  data: () => ({
    reglas: {
      campo: [
        v => v.length <= 511 || 'El campo debe contener menos de 511 caracteres'
      ]
    }
  }),
  watch: {
    validoFormularioDatos: function (val) {
      this.$emit('setValidoFormularioDatos', val)
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