<template>
    <div>
        <v-navigation-drawer app v-model = "drawer" color = "#003366" permanent>
            
        </v-navigation-drawer>
       
    </div>
</template>

<script>
export default {
    name: "Navbar",
    

    data(){
        return {
            drawer: true
        }
    }
}
</script>

 <style scoped>
    .v-navigation-drawer {
        color: #000000;
        background-color: #000000;
    }
   
 </style>