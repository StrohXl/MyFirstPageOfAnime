<script>
import Nav from '../components/Nav.vue';
import ListNavigationDrawerResponsive from '../components/listNavigationDrawerResponsive.vue';
import ListNavigationDrawer from '../components/listNavigationDrawer.vue';
import Search from '../components/Search.vue';
export default {
  name: "DefaultLayout",
  data() {
    return {
      search: '',
      drawer: false,
      model: '',
      scroll: 0,
      cambioResponsive: null,
      colNormal: 9,
      colActivo: 11,
      cambioResponsive: false,
      windowWidth: null,

    };
  },
  components: {
    Nav,
    ListNavigationDrawer,
    ListNavigationDrawerResponsive,

  },
  async mounted() {
    this.ComprobarDom()
  },
  methods: {
    async ComprobarDom() {
      window.addEventListener('scroll', this.Scroll)
      window.addEventListener('resize', this.CheckScreen);
      this.CheckScreen()
      this.Scroll()
    },
    Scroll(){
      const header = document.querySelector('.header')
      const bars = window.scrollY
      if(this.scroll >= bars){
        header.style.top = "0"

      }
      else{
        header.style.top = "-80px"
      }
      this.scroll = bars
    },
    async CheckScreen() {

      const width = window.innerWidth
      if(width < 750){
        this.windowWidth = true
      }
      else{
        this.windowWidth = false
        this.search = false
      }
    },
  },


}
</script>
<template>
  <v-app>
    <v-app-bar class="pl-5 pr-5 header" style=" z-index: 1000;" color="dark" fixed elevation="0">
      <v-btn value="recent" icon @click.stop="drawer = !drawer" class="boton">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <v-btn value="recent" icon @click.stop="cambioResponsive = !cambioResponsive" class="botonResponsive">
        <v-icon>mdi-menu</v-icon>
      </v-btn>

      <Nav />
      <v-btn text @click.stop="search = true" color="#272727" class="btn-search" light>
        <v-icon class="text-h5 white--text">mdi-magnify</v-icon>
      </v-btn>
      <div :class="search? 'content-search-show':'content-search-hidden'">
        <v-btn text @click.stop="search = false" color="#272727"  light>
          <v-icon class="text-h5 white--text">mdi-close</v-icon>
        </v-btn>
        <Search class="module-search"/>
      </div>
    </v-app-bar>
    <v-main class="mt-16 ">
      <div>
        <v-row class="row-content">
          <v-navigation-drawer v-if="windowWidth == true" temporary v-model='cambioResponsive' style="overflow: auto; "
            width="250px" fixed color="#272727" class="NavigationR" left>
            <ListNavigationDrawerResponsive />
          </v-navigation-drawer>
          <v-navigation-drawer v-if="windowWidth == false" v-model='model' mini-variant-width="80" :mini-variant="drawer"
            color="#272727" fixed class="Navigation" permanent width="250px">
            <ListNavigationDrawer :variant="drawer" />
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
:root {
  --color-blue: #1976d2;
  --color-negro: #272727;
  --color-negro-transparente: rgba(41, 41, 41, 0.671);
  --color-gris: rgb(80, 80, 80);
  --color-blanco-transparente: rgba(255, 255, 255, 0.774);
}
.header{
  transition-property: top;
  transition-duration: .5s;
}
.module-search{
  display: flex !important;
}
.row{
  margin: 0 !important ;
}
.row-content {
  background-color: #efefef;
}

.content-search-hidden {
  display: none;
}
.content-search-show{
  justify-content: center;
  height: 56px;
  background-color: var(--color-negro);
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  z-index: 100;
  width: 100%;
  right: -2px;
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

@media (min-width:250px) and (max-width:750px) {
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
