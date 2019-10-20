<template>

<v-container fluid>
    <div class="lista">
        <ListaNC
        :noConformidades="noConformidades"
        @editarNC="editarNC"
        @borrarNC = "confirmarBorrarNC"
        />
    </div>
    <v-container class="spacing-playground my-12"
    fluid>
        <v-row justify="center">
            <v-col cols:12>
                <v-dialog
                v-model="nuevaNCForm"
                width="60vw"
                >
                        <template v-slot:activator="{ on }">
                            <div>
                                <v-btn color="#FFC30F" dark class="botonAgregar" id="agregarNCF" @click="nuevaNCForm = true">
                                Agregar
                                </v-btn>
                            </div>
                        </template>
                        <v-card>
                            <v-container dark  class="titulo">
                                <v-card-title primary-title class="justify-center white--text">Nueva No Conformidad</v-card-title>
                            </v-container>
                            <v-container>
                                <NCForm
                                :descripcionNCF="edicionNC.descripcion"
                                :tituloNCF="tituloNCF"
                                :encargadoNCF="encargadoNCF"
                                @confirmarDatosNCF = "confirmarDatosNCF"
                                @cancelar="cerrarNuevaNCForm"/>
                                
                            </v-container>
                        </v-card>
                </v-dialog>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="7"></v-col>
            <v-col cols="2">
                <v-btn color="#FFC30F" class="white--text">Guardar</v-btn>
            </v-col>
            <v-col cols="2">
                <v-dialog
                v-model="confirmacionForm"
                width="60vw"
                >
                        <template v-slot:activator="{ on }">
                            <div>
                                <v-btn color="#3B83BD" class="white--text" @click="confirmarCancelarFuente">Cancelar</v-btn>
                            </div>
                        </template>
                         <ConfirmacionForm
                        :titulo="confirmacionTitulo"
                        :texto="confirmacionTexto"
                        @cancelarFuente = "confirmarCancelarFuente"
                        />
                </v-dialog>
            </v-col>
        </v-row>
    </v-container>
   
</v-container>
</template>

<script>
import NCForm from '../components/FuenteNC/NCForm.vue';
import ListaNC from '../components/FuenteNC/ListaNC.vue';
import ConfirmacionForm from '../components/FuenteNC/ConfirmacionForm.vue';

export default {
    name: 'FuenteNcView',
    components: {
        NCForm,
        ListaNC,
        ConfirmacionForm
    },
    data() {
        return {
            nuevaNCForm: false,
            confirmacionForm: false,
            confirmacionTitulo: "",
            confirmacionTexto: "",
            edicionNC: {
                titulo: "",
                descripcion: "",
                encargado: ""
            },
            editedIndex: -1,
            noConformidades: [
                {
                    titulo: "No wifi Laboratorio 11 JLP",
                    descripcion: "wo"
                },
                {
                    titulo: "Piggy biggie",
                    descripcion: "wo"
                },
                {
                    titulo: "Pina dijo la nina",
                    descripcion: "wo"
                },
                {
                    titulo: "CJ presente",
                    descripcion: "wo"
                },
                {
                    titulo: "Es esto suficiente?",
                    descripcion: "wo"
                },
                {
                    titulo: "yaaa",
                    descripcion: "wo"
                },
                {
                    titulo: "yaaa",
                    descripcion: "wo"
                },
                {
                    titulo: "yaaa",
                    descripcion: "wo"
                },
                {
                    titulo: "yaaa",
                    descripcion: "wo"
                },
                {
                    titulo: "yaaa",
                    descripcion: "wo"
                },
                {
                    titulo: "yaaa",
                    descripcion: "wo"
                },
                {
                    titulo: "yaaa",
                    descripcion: "wo"
                },
                {
                    titulo: "yaaa",
                    descripcion: "wo"
                },
                {
                    titulo: "yaaa",
                    descripcion: "wo"
                },
                {
                    titulo: "yaaa",
                    descripcion: "wo"
                },
                {
                    titulo: "yaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                    descripcion: "wo"
                },
            ]
        }
    },
    methods: {
        confirmarDatosNCF(titulo, descripcion, encargado)
        {
            this.nuevaNCForm=false;
        },
        cerrarNuevaNCForm()
        {
            this.nuevaNCForm=false;
        },
        editarNC(item)
        {
            this.nuevaNCForm = true
        },
        confirmarCancelarFuente()
        {
            this.confirmacionTitulo = "Desea cancelar la Fuente Actual?"
            this.confirmacionTexto = "Los cambios realizados no seran guardados."
            this.confirmacionForm = !(this.confirmacionForm);
        },
        confirmarBorrarNC (item)
        {
            this.confirmacionTitulo = "Desea elminicar la no conformidad?"
            this.confirmacionTexto = "Los cambios realizados no podran ser revertidos."
            this.confirmacionForm = true;
        }
    }
}
</script>

<style scoped>
.lista {
    width: 80%;
    height: 60%;
    margin-top: 5%;
    margin-left: 10%;
}
.botonAgregar {
    position: absolute;
    top: 78vh;
    left: 9vw;;
    width: 64vw;
}
.titulo {
    background-color: #FFC30F;
    text-align: center;
}
</style>