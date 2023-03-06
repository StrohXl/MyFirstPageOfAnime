<script>
import Search from '../components/Search.vue';
import NavigationDrawer from '../components/NavigationDrawer.vue';
import Nav from '../components/Nav.vue';
import NavigationResponsive from '../components/NavigationResponsive.vue';
export default {
  name: "DefaultLayout",
  data() {
    return {
      cambio: false,
      cambioResponsive: false,
      colNormal: 9,
      colActivo: 11,
      cambioResponsive: false,
      windowWidth: null,

    };
  },
  components: {
    Nav,
    NavigationDrawer,
    NavigationResponsive,
    Search
  },
  async mounted() {
    window.addEventListener('resize', this.CheckScreen);
    this.ComprobarRuta

  },
  methods: {
    Cambiar() {
      this.cambio = true
    },

    ComprobarRuta() {
      console.log(this.$route)
    }
  },

}
</script>
<template>
  <v-app>
    <v-app-bar class="pl-5 pr-5" style="top: 0; z-index: 1000;" color="dark" fixed elevation="0">
      <v-btn value="recent" icon @click.closed="this.cambio = !this.cambio" class="boton">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <v-btn value="recent" icon @click.closed="this.cambioResponsive = !this.cambioResponsive" class="botonResponsive">
        <v-icon>mdi-menu</v-icon>
      </v-btn>

      <Nav />

    </v-app-bar>
    <v-main class="mt-16 ">
      <div>
        <v-row class="row-content">
          <NavigationResponsive :variante="cambioResponsive" />
          <NavigationDrawer :variant="cambio" />
          <v-col :class="cambio ? 'colDefaultActive' : 'colDefault'">
            <Nuxt />
          </v-col>
        </v-row>
      </div>
    </v-main>
    <Footer />
  </v-app>
</template>
<style>
:root {
  --color-blue: #1976d2;
  --color-negro: #272727;
  --color-negro-transparente: rgba(41, 41, 41, 0.671);
  --color-gris: rgb(80, 80, 80);
  --color-blanco-transparente: rgba(255, 255, 255, 0.774);
}

.row-content {
  background-color: #efefef;
}


.v-footer {
  margin-top: 2rem;
  width: 100vw;
}

.colDefaultActive {
  margin-top: 1rem;
  margin-left: 1rem;
}

.colDefault {
  margin-top: 1rem;
  margin-left: 1rem;
}

.boton {
  display: none;
}

@media(min-width:750px) {
  .botonResponsive {
    display: none;
  }

  .boton {
    display: block;
  }

  .colDefault {
    margin-top: 2rem;
    margin-left: 18rem;
  }

  .colDefaultActive {
    margin-top: 2rem;
    padding: 1rem 1rem 0;
    margin-left: 7rem;
  }
}

.NavigationR {
  display: none !important;
}



@media (min-width:350px) and (max-width:750px) {
  .NavigationR {
    display: block !important;
  }

  .colDefaultActive {
    margin-left: 2rem;
  }

  .tituloIntersectado {
    font-size: 40px !important;

  }


  .colDefaultResponsive {
    margin-right: 2rem;
    width: 80% !important;
  }

  .botonResponsive {
    display: block;
  }

  .botonResponsive {
    display: flex !important;
  }

  .botones {
    display: none;
  }

  .colResponsive {
    display: none;
  }
}</style>
