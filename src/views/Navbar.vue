<template>
    <div>
        <v-navigation-drawer app v-model = "drawer" color = "#003366">
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
                    <v-list-item-title  class = "list-elem" v-text="item.title"></v-list-item-title>
                  </v-list-item-content>
                </template>

                <v-list-item
                  v-for="subItem in item.items"
                  :key="subItem.title"
                  @click=""
                >
                  <v-list-item-content>
                    <v-list-item-title v-text="subItem.title"></v-list-item-title>
                  </v-list-item-content>
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
            title: 'Attractions',
            items: [
              { title: 'List Item' },
            ],
          },
          {
            action: 'restaurant',
            title: 'Dining',
            active: true,
            items: [
              { title: 'Breakfast & brunch' },
              { title: 'New American' },
              { title: 'Sushi' },
            ],
          },
          {
            action: 'school',
            title: 'Education',
            items: [
              { title: 'List Item' },
            ],
          },
          {
            action: 'directions_run',
            title: 'Family',
            items: [
              { title: 'List Item' },
            ],
          },
          {
            action: 'healing',
            title: 'Health',
            items: [
              { title: 'List Item' },
            ],
          },
          {
            action: 'content_cut',
            title: 'Office',
            items: [
              { title: 'List Item' },
            ],
          },
          {
            action: 'local_offer',
            title: 'Promotions',
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
    .list-elem{
        color: #ffffff;
    }
   
 </style>