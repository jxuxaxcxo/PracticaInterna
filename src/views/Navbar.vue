<template>
    <div>
        <v-navigation-drawer app v-model = "drawer" color = "#003366" permanent="true">
      <v-list>
        <v-list-item>
          <v-list-item-avatar right size= 80>
            <v-img src="https://scontent.fcbb1-2.fna.fbcdn.net/v/t31.0-8/21688273_1894686887516782_1761331422367946529_o.jpg?_nc_cat=101&_nc_oc=AQly_HtWmawnFSQRzM6bG28j4m-PkvvP9uTiTyhBSKohXDIGnSWkRmbiH7BnYS7fe44&_nc_ht=scontent.fcbb1-2.fna&oh=7f2d8660c2a8212b45c8969e02bf58ce&oe=5E2C90AC"></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="title" >Mateo Puña</v-list-item-title>
            <v-list-item-subtitle class = "white--text">mateo.ds3@shift.com</v-list-item-subtitle>
          </v-list-item-content>

        </v-list-item>
      </v-list>
      <v-divider></v-divider>
        <v-list>
        <v-list-item>
            <v-list-item-title class = "title">Inicio</v-list-item-title>
        </v-list-item>

        <v-list-group
            value="true"
        >
            <template v-slot:activator>
            <v-list-item-title class = "title">Informes</v-list-item-title>
            </template>

            <v-list-item

            
            v-for="(informe, i) in informes"
            :key="i"
            
            value="true"
            > 
 
     
            </v-list-item>


        </v-list-group>
    </v-list>
        </v-navigation-drawer>
       
    </div>
</template>

<script>
export default {
    name: "Navbar",
    data: () => ({
      admins: [
        ['Management', 'people_outline'],
        ['Settings', 'settings'],
      ],
      cruds: [
        ['Create', 'add'],
        ['Read', 'insert_drive_file'],
        ['Update', 'update'],
        ['Delete', 'delete'],
      ],
      
      informes: {'Auditoría I 2019': ["NC-12019001", "NC-12019002"], 'Auditoría II 2019' : ["NC-22019001", "NC-22019002"], 'Auditoría I 2020' : ["NC-12020001", "NC-12020002"]},
        drawer: true

    }),


}
</script>

 <style scoped>
    .v-navigation-drawer {
        color: #000000;
        background-color: #000000;
    }
    .v-list-item-title{
        color: #ffffff;

    }
    .title{
        color: #ffffff;
    }
   
 </style>