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
import { agregarUsuario,listaUsuarios2} from '../components/ConexionFirebase/FirebaseUsuarios'
import { agregarInforme, listaInformes } from '../components/ConexionFirebase/FirebaseInforme'
import { agregarPA, listaPA } from '../components/ConexionFirebase/FirebasePlanDeAccion'
import { agregarElemento, listaElementos } from '../components/ConexionFirebase/FirebaseElemento'
import { agregarFormulario, listaFormularios } from '../components/ConexionFirebase/FirebaseFormulario'
import { agregarEstructura, listaEstructuras } from '../components/ConexionFirebase/FirebaseEstructura'
import { agregarCampo, listaCampos } from '../components/ConexionFirebase/FirebaseCampo'
import { agregarTarea, listaTareas } from '../components/ConexionFirebase/FirebaseTarea'
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
    // agregarUsuario("a","a","a")  
     //agregarInforme("a", "A")
     //listaInformes();
     //listaPA();
     //agregarPA(1, "a",1,"NC");
     //agregarElemento("hola");
     //listaElementos();
     //agregarFormulario("hello");
     //listaFormularios();
     //agregarEstructura(1,1);
     //listaEstructuras();
    //  agregarCampo(1,1,"campo");
    //  listaCampos();
     agregarTarea("tomas", 1, "Entregado", "25/12/2019", "adjunto")
     listaTareas();
    },


  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>