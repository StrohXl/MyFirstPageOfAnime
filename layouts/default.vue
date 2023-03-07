<script>
import Search from '../components/Search.vue';
import Nav from '../components/Nav.vue';
import ListNavigationDrawerResponsive from '../components/listNavigationDrawerResponsive.vue';
import ListNavigationDrawer from '../components/listNavigationDrawer.vue';
export default {
  name: "DefaultLayout",
  data() {
    return {
      drawer: false,
      model: '',
      cambioResponsive: null,
      ejecutarNavigation: false,
      colNormal: 9,
      colActivo: 11,
      cambioResponsive: false,
      windowWidth: null,

    };
  },
  components: {
    Nav,
    Search,
    ListNavigationDrawer,
    ListNavigationDrawerResponsive,

},
  async mounted() {
    this.ComprobarDom()
  },
  methods: {
    Cambiar() {
      this.ejecutarNavigation = false
      this.drawer = !this.drawer
    },
    CambiarResponsive() {
      this.ejecutarNavigation = true
      this.cambioResponsive = !this.cambioResponsive
    },

    ComprobarRuta() {
      console.log(this.$route)
    },
    ComprobarDom(){
      window.addEventListener('resize', this.CheckScreen);
      const windo = this.CheckScreen
      console.log(window)
    }
  },

}
</script>
<template>
  <v-app>
    <v-app-bar class="pl-5 pr-5" style="top: 0; z-index: 1000;" color="dark" fixed elevation="0">
      <v-btn value="recent" icon @click="Cambiar" class="boton">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <v-btn value="recent" icon @click="CambiarResponsive" class="botonResponsive">
        <v-icon>mdi-menu</v-icon>
      </v-btn>

      <Nav />

    </v-app-bar>
    <v-main class="mt-16 ">
      <div>
        <v-row class="row-content">
          <v-navigation-drawer v-if="ejecutarNavigation == true" temporary v-model='cambioResponsive'
            style="overflow: auto; " width="250px" fixed color="#272727" class="NavigationR" left>
            <ListNavigationDrawerResponsive />
          </v-navigation-drawer>
          <v-navigation-drawer v-if="ejecutarNavigation == false" v-model='model' mini-variant-width="80" :mini-variant="drawer" color="#272727" fixed
            class="Navigation" permanent width="250px">
            <ListNavigationDrawer :variant="drawer"/>
          </v-navigation-drawer>
          <v-col :class="drawer ? 'colDefaultActive' : 'colDefault'">
            <Nuxt />
          </v-col>
        </v-row>
      </div>
    </v-main>
    <Footer />
  </v-app>
</template>
<style>
@media(min-width:750) {
  .NavigationR {
    display: none !important;
  }
}

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



@media (min-width:250px) and (max-width:750px) {
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
}
</style>
