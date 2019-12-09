<template>
    <div id="formEditorDiv">
        <v-card class="issueInfoCard">
        </v-card>

        <v-card class="issueAsignacionCard">
        </v-card>

        <v-card id="issueTareasCard">
        </v-card>

        <v-card id="issueAdderCard">
            <v-select class="issueSectionSelector"
            :items= "issueSections"
            label = "Seccion de Incidencia"
            ></v-select>
            
            <v-text-field class="itemName"
                v-model="lastname"
                label="Nombre del campo"
          ></v-text-field>

          <v-text-field class="itemRow"
                v-model="lastname"
                label="Fila del Campo"
          ></v-text-field>

          <v-text-field class="itemColumn"
                v-model="lastname"
                label="Columna del Campo"
          ></v-text-field>

            <v-select class="itemTypeSelector"
            :items= "itemTypes"
            label = "Seccion de Incidencia"
            ></v-select>

            <v-btn class="saveFormatButton">Guardar Formato</v-btn>

        </v-card>

    </div>    
</template>

<script>
export default {
     data:() => ({
         issueSections:['Informacion de Incidencia','Asignacion de Encargado', 'Realizacion y Seguimiento'],
         itemTypes: ['Normal Input', 'Opciones unicas', 'Selector']
     })
}
</script>

<style scoped>

    .issueInfoCard{
        position: absolute;
        top: 10vh;
        height: 40vh;
        width: 35vw;
        background-color: white;
        left:4vw;
    }

    .issueAsignacionCard{
        position: absolute;
        top: 10vh;
        height: 40vh;
        width: 35vw;
        background-color: white;
        left:42vw;
    }
    #formEditorDiv{
        background-color: #ECECEC;
        height: 100vh;
    }

    #issueAdderCard{
        position: absolute;
        background-color: white;
        width: 50vw;
        left: 17vw;
        top: 60vh;
        height: 45vh;
    }
    .issueSectionSelector{
        position:absolute;
        width: 45vw;
        left: 1vw;
        top: 1vh;
    }
    .itemName{
        position: absolute;
        left:1vw;
        top: 10vh;
        width: 20vw;
    }

    .itemRow{
        position: absolute;
        left:1vw;
        top: 20vh;
        width: 20vw;
    }

    .itemColumn{
        position: absolute;
        left:25vw;
        top: 20vh;
        width: 20vw;
    }

    .itemTypeSelector{
        position: absolute;
        left:25vw;
        top: 10vh;
        width: 20vw;
    }

    .saveFormatButton{
        position: absolute;
        left:17vw;
        top: 35vh;
    }

</style>