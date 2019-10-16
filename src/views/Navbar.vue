<template>
    <div>
        <v-navigation-drawer app v-model = "drawer" color = "#003366" permanent>
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

            <v-list-item-action>
            <v-icon>mdi-menu-down</v-icon>
          </v-list-item-action>
        </v-list-item>
      <v-divider></v-divider>

        <v-list-item link>
           <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
            <v-list-item-title class = "title">Inicio</v-list-item-title>
        </v-list-item>

      <v-divider></v-divider>

      </v-list>

          <v-list>
              <v-list-group 
                v-for="item in items"
                :key="item.title"
                v-model="item.active"
                no-action
              >
                <template v-slot:activator>
                  <v-list-item-content>
                    <v-list-item-title  class = "informe-elem" v-text="item.title"></v-list-item-title>
                  </v-list-item-content>
                </template>

                <v-list-group
                  v-for="subItem in item.items"
                  :key="subItem.title"
                  @click=""
                >
                <template v-slot:activator>
                  <v-list-item-content>
                    <v-list-item-title  class = "nc-elem" v-text="subItem.title"></v-list-item-title>
                  </v-list-item-content>
                </template>



                </v-list-group>


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
      drawer : true

    }),

    data () {
      return {

        drawer : true,
        items: [
          {
            action: 'local_activity',
            title: 'Auditoría I 2019',
            items: [
              { title: 'NC-12019001' },
              { title: 'NC-12019002' },
              { title: 'NC-12019003' },            ],
          },
          {
            action: 'restaurant',
            title: 'Auditoría II 2019',
            active: true,
            items: [
              { title: 'NC-22019001' },
              { title: 'NC-22019002' },
              { title: 'NC-22019003' },      
            ],
          },
          {
            action: 'school',
            title: 'Auditoría I 2020',
            items: [
              { title: 'NC-12020001' },
              { title: 'NC-12020002' },
            ], 
          },
          {
            action: 'directions_run',
            title: 'Auditoría II 2020',
            items: [
              { title: 'Encuesta I' },
            ],
          },
          {
            action: 'healing',
            title: 'Encuesta Wifi',
            items: [
              { title: 'Encuesta II' },
            ],
          },
          {
            action: 'content_cut',
            title: 'Encuesta Docente',
            items: [
              { title: 'List Item' },
            ],
          },
          {
            action: 'local_offer',
            title: 'Encuesta Mosquitos',
            items: [
              { title: 'List Item' },
            ],
          },
        ],
      }
    },


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
        text-align: left;
    }
    .informe-elem{
        color: #ffffff;
        font-weight: bold;

    }
    .nc-elem{
        color: #ffffff;
        text-align: center;

    }
   
 </style>