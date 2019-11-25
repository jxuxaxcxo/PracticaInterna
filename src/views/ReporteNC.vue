<template>
  <div>
<v-card
    class="mx-auto"
    max-width="344"
  v-for="usuario in usuarios" :key="usuario.mail">
    <v-card-text>
      <div>{{ usuario.mail }}</div>
      <p class="display-1 text--primary">
        {{ usuario.password }}
      </p>
      <p>{{ usuario.cargo }}</p>
      <div class="text--primary">
        {{ usuario.tipo }}
      </div>
    </v-card-text>
    
  </v-card>



     
      
      <button type="submit" class="button is-success" @click="push">Guardar</button>
   
  </div>
</template>

<script>
import { agregarUsuario, listaUsuarios3, listaUsuarios, listaUsuarios2} from '../components/ConexionFirebase/FirebaseUsuarios'
import { db } from '../components/ConexionFirebase/Firebase'
export default {
  name: 'HelloWorld',
  data () 
  {
    return {
        usuarios: listaUsuarios2()
    }
  },

computed: {
created(){
    return{
        usuarios: listaUsuarios2()
    }
    
}
},
methods: 
{
    push () {
     agregarUsuario("a", "a", "a", "A")
    },


  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>