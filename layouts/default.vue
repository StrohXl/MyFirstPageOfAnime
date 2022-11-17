<template>

  <v-app>
    <v-app-bar class="pl-5 pr-5" style="top: 0; z-index: 1000;" color="dark" fixed elevation="0">

      <Nav />
       <v-tooltip v-model="show" bottom v-for="(item, index) in botones" >
        <template v-slot:activator="{ on, attrs }">
         <v-btn value="recent" icon @click.stop="cambio = !cambio"  class="boton" v-bind="attrs" v-on="on">
           <v-icon>mdi-menu</v-icon>
         </v-btn>
          <v-btn value="recent" icon @click.stop="cambioResponsive = !cambioResponsive" class="botonResponsive" v-bind="attrs" v-on="on">
           <v-icon>mdi-menu</v-icon>
         </v-btn>
        </template>
        <span>menu</span>
        </v-tooltip>  
    </v-app-bar>
    <v-main class="mt-16 ">
      <div>
        <v-row>
          <NavigationDrawer :variant="cambio" />
          <NavigationResponsive :variante="cambioResponsive" />
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

export default {

  name: "DefaultLayout",
  data() {
    return {
      cambio: false,
      colNormal: 9,
      colActivo: 11,
      cambioResponsive: false,
      windowWidth: null,
      botones:[
        {
          clases: 'boton',
          varibale: cambio
        },
        { 
          clases: 'botonResponsive',
          varibale: cambioResponsive
        }
      ]
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
    }
  },
  created() {


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
  margin-left: 1rem;
}

.colDefaultActive {
  margin-left: 28px;
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
