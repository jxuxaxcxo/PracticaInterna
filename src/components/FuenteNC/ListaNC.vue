<template>
    <div class="tabla elevation-0">
        <v-subheader class="justify-center white--text titulo">
            No Conformidades
        </v-subheader>
         <v-data-table
        :headers="headers"
        :items="noConformidades"
        disable-pagination
        hide-default-footer
        hide-default-header
        height= 58vh
        no-data-text="No has agregado no conformidades aun"
        >
        <template v-slot:item.action="{ item }">
                <v-icon
                small
                @click="editarNoConformidad(item)"
                icon
                color="#3B83BD"
                >
                    mdi-pencil
                </v-icon>
                <v-icon
                    small
                    icon
                    @click="borrarNoConformidad(item)"
                    color="#3B83BD"
                >
                    mdi-delete
                </v-icon>
    </template>
  </v-data-table>
    </div>
</template>
<script>
export default {
    name: 'ListaNC',
    props: {
        noConformidades:Array,
    },
   data: () => ({
      dialog: false,
      headers: [
        {
          text: 'No Conformidad',
          align: 'left',
          sortable: false,
          value: 'titulo',
        },
        { text: 'Actions', aling:'end', value: 'action', sortable: false },
      ],
    }),
    methods: {
        editarNoConformidad(item)
        {
            this.$emit("editarNC", item)
        },
        borrarNoConformidad(item)
        {
            this.$emit("borrarNC", item)
        }
    },
}
</script>
<style scoped>
.tabla {
    overflow-y: scroll;
}
.titulo {
    background-color: #3B83BD;
}
</style>