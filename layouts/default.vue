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
  },
  methods: {
    Cambiar() {
      this.cambio = true
    },
  },

}
</script>
<template>
  <v-app>
    <v-app-bar class="pl-5 pr-5" style="top: 0; z-index: 1000;" color="dark" fixed elevation="0">
      <v-btn value="recent" icon @click.stop="cambio = !cambio" class="boton">
        <v-icon>mdi-menu</v-icon>
      </v-btn>

      <Nav />

    </v-app-bar>
    <v-main class="mt-16 ">
      <div>
        <v-row class="row-content">
          <NavigationDrawer :variant="cambio"  />
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
  --color-blue: #2196F3;
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
.colDefaultActive{
  margin-top: 1rem;
  margin-left: 1rem;
}
.colDefault{
  margin-top: 1rem;
  margin-left: 1rem;
}
@media(min-width:750px) {
  .colDefault {
    margin-top: 2rem;
    margin-left: 20rem;
  }

  .colDefaultActive {
    margin-top: 2rem;
    padding: 0 2rem;
    margin-left: 7rem;
  }
}





.NavigationR {
  display: none !important;
}

.botonResponsive {
  display: none;
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
