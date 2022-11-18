<template>

  <v-app>
    <v-app-bar class="pl-5 pr-5" style="top: 0; z-index: 1000;" color="dark" fixed elevation="0">    
          <v-btn value="recent" icon @click.stop="cambio = !cambio" class="boton">
            <v-icon>mdi-menu</v-icon>
          </v-btn>   
          <v-btn value="recent" icon @click.stop="cambioResponsive = !cambioResponsive" class="botonResponsive">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
      <Nav />

    </v-app-bar>
    <v-main class="mt-16 ">
      <div>
        <v-row>
          <NavigationDrawer :miniTop="top" :geners="generos" :variant="cambio" @actualizarCambio="Cambiar" @activarGenerosAbuelo="activarGeneros" />
          <NavigationResponsive :miniTop="top" :geners="generos" :variante="cambioResponsive"  @activarGenerosAbuelo="activarGeneros"/>
          <v-col :cols="cambio ? colActivo : colNormal" :class="cambio ? 'colDefaultActive' : 'colDefault'"
            class="colDefaultResponsive mt-12">
            <Nuxt />
          </v-col>
        </v-row>
      </div>
    </v-main>
    <Footer />
  </v-app>

</template>
<script>
import NavigationDrawer from '../components/NavigationDrawer.vue';
import Nav from '../components/Nav.vue';
import NavigationResponsive from '../components/NavigationResponsive.vue';
import axios from 'axios';
export default {
  name: "DefaultLayout",
  data() {
    return {
      top:[],
      generos: [],
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
    NavigationResponsive
  },
  methods: {
    CheckScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.cambio = true;
        return;
      }
      else {
        this.cambioResponsive = false;
      }
    },
    Cambiar() {
      this.cambio = true
    },
    async activarGeneros() {
      this.cambio = false
      const ListaDeGeneros = await axios.get("https://api.jikan.moe/v4/genres/anime");
     this.generos = ListaDeGeneros.data.data;
    }
  },
  async created() {
    const lista = await axios.get('https://api.jikan.moe/v4/top/anime')
    this.top = lista.data.data
   
  },
}
</script>
<style>
:root {
  --color-blue: #2196F3;
  --color-negro: #272727;
  --color-negro-transparente: rgba(41, 41, 41, 0.671);
  --color-gris: rgb(80, 80, 80);
  --color-blanco-transparente: rgba(255, 255, 255, 0.774);
}

.colDefault {
  margin-left: 22rem;
}

.colDefaultActive {
  margin-left: 6rem;
}

.v-main__wrap {
  background-image: url(../static/978587.png);

  background-size: 100% 100vh;
  background-attachment: fixed;

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

  .tituloIntersectado {
    font-size: 40px !important;
  }

  .colDefaultResponsive {
    margin-right: 2rem;

  }

  .botonResponsive {
    display: block;
  }

  .botonResponsive {
    display: flex !important;
  }

  .boton {
    display: none;
  }

  .botones {
    display: none;
  }

  .colResponsive {
    display: none;
  }
}
</style>
