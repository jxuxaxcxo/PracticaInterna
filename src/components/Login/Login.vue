<template>
<div id = "app" class = "back">
 <v-app id="inspire"  >

    <v-content>

      <v-container
        class="fill-height"
        fluid
      >

        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">

              <v-toolbar
                color="#003366"
                dark
                flat
              >
                <v-toolbar-title>Sistema de Gestión de Calidad UPB</v-toolbar-title>
                <v-spacer />
                <v-tooltip bottom>
                  
                </v-tooltip>
                <v-tooltip right>
                 
                </v-tooltip>
              </v-toolbar>
              <v-card-text>

                <v-form>

                  <v-text-field v-model="email"
                    id = "login"
                    label="Usuario"
                    name="login"
                    type="email"
                  />

                  <v-text-field v-model="contrasena"
                    id="password"
                    label="Contraseña"
                    name="password"
                    type="password"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn color="#003366" @click="clickEntrar()" dark>Entrar</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>

</div>
 
</template>

<script>
  export default {

    name : 'Login',
    props: {
      source: String,
    },

    data () {
        return {
            email: '',
            password: ''
        }
    },
            methods: {
      clickEntrar () {
        console.log("Llegue aqui")
        this.$store.dispatch('iniciarSesion', {email: this.email, contrasena: this.contrasena})

      },

    },

    computed : {
      user () {
        return this.$store.getters.getUser
      }
    },

     watch: {
      user (value) {
        if (value !== null && value !== undefined){
          this.$router.push('/') 
        }
      }
    },
  }
</script>

<style scoped>

.back {
  background-image: url(https://i0.wp.com/gc.edu/wp-content/uploads/2016/03/iStock_76338075_MEDIUM.jpg?ssl=1);
  background-size: cover;
}
#inspire {
  background: none;
}
</style>
