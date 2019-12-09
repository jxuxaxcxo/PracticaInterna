<template>
  <v-card
    class="mx-auto"
  > 
    <v-btn block color="secondary" dark>Agregar Persona</v-btn>
    
    <v-list two-line subheader>
      <v-subheader inset>Personas</v-subheader>
      <v-divider :inset="inset"></v-divider>

      <v-list-item
        v-for="item in items"
        :key="item.title"
        @click="dialog = !dialog"
      >
        <v-list-item-avatar>
          <v-icon
            :class="[item.iconClass]"
            v-text="item.icon"
          ></v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-text="item.title"></v-list-item-title>
          <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-btn icon>
            <v-icon color="grey lighten-1">mdi-account-edit</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
    <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Editar Usuario</span>
        </v-card-title>
        <v-card-text>
          <v-text-field label="Nombre" required></v-text-field>
          <v-switch v-model="switch1" :label="`Es administrador : ${switch1.toString()}`"></v-switch>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      switch1: false,
      dialog: false,
      nombre: 'Luthor',
      inset: false,
      items: [
        { icon: 'mdi-account', iconClass: 'grey lighten-1 white--text', title: 'John', subtitle: 'Admin.' },
        { icon: 'mdi-account', iconClass: 'grey lighten-1 white--text', title: 'Juan', subtitle: '' },        
        { icon: 'mdi-account', iconClass: 'grey lighten-1 white--text', title: 'Lucas' , subtitle: 'Admin.' },
      ]
    }),

  
  }
</script>