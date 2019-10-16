<template>
    <div class="contenedor">
        <v-text-field
            label="Titulo No-Conformidad"
            id ="tituloNCF"
          ></v-text-field>
        <v-text-field
            label="Descripcion"
            id="DescripcionNCF"
        >
        </v-text-field>
        <v-combobox
        label="Seleccione un Encargado"
        chips
        autofocus
        type="button"
        class="seleccion"
        id="EncargadoNCF"
        >
        </v-combobox>
    </div>
</template>
<script>
export default {
    name: 'NCForm',
}
</script>
<style scoped>
 .contenedor {
     width: 80%;
     margin-left: 10%;
 }
</style>