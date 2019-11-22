<template>
    <div>
        <h1 id="prueba">{{items[0].titulo}}</h1>
        <v-card id="incidenciaInfoCard">
            <v-card-title>hola</v-card-title>
                 <v-card
                    v-for= "item in items" 
                    :key = item.titulo 
                    :class = item.escala
                    :id = item.titulo>  
                    <v-card-title class="cardTitulo">{{item.titulo}}</v-card-title>     
                            <v-text-field :class= "item.escala+'TextField'"
                                v-model="email"
                                :rules="emailRules"
                                required
                            ></v-text-field>     
                </v-card>
        </v-card>
    </div>
</template>

<script>

export default {

  data:() => ({
    items: [
        {   titulo: 'Fecha de la observacion:',
            escala: 'pequeño',
            cuerpo: ''
        },
        {
            titulo: 'Nro de Formulario:',
            escala: 'mediano',
            cuerpo: ''
        }]
}),
  components: {
  },
};
</script>

<style scoped>
    #prueba{
        position: absolute;
        left:50vw;
    }
    #incidenciaInfoCard{
        position: absolute;
        top: 10vh;
        left:4vw;
        background-color: white;
        height: 20vh;
        width: 75vw;
    }
    .pequeño{
        position: absolute;
        left: 5vw;
        height: 15vh;
        width: 25vw;
        background-color: #ECECEC
    }
    .mediano{
        position: absolute;
        left: 35vw;
        height: 15vh;
        width: 35vw;
        background-color: #ECECEC
    }
    .cardTitulo{
        background-color: yellow;
        font-size: 100%;
    }
    .pequeñoTextField{
        position: absolute;
        left: 1vw;
        width: 22vw;
    }

</style>