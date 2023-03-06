<script>
import MiniList from './MiniList.vue'
import axios from 'axios';
export default {
  name: "NavigationDrawer",
  data() {
    return {
      value: '',
      value2: '',
      epale: true,
      drawer: true,
      genresAnime: [],
      genresManga: [],
      items: [
        {
          icon: "mdi-home",
          title: "Inicio",
          to: "/"
        },
        {
          icon: "mdi-step-forward",
          title: "Animes",
          to: "/Animes/page/1"
        },
        {
          icon: "mdi-microsoft",
          title: "Generos",
          to: "/Animes/genres/1"
        },
        {
          icon: "mdi-star-settings-outline",
          title: "Top Animes",
          to: "/Animes/TopAnimes/1"
        },
        {
          icon: "mdi-youtube-tv",
          title: "Emision",
          to: "/Animes/seasons-now/1"
        },
        {
          icon: "mdi-book-open-page-variant",
          title: "Mangas",
          to: "/Mangas/page/1"
        },
        {
          icon: "mdi-microsoft",
          title: "Generos",
          to: "/Mangas/genres/1"
        },
        {
          icon: "mdi-star-settings-outline",
          title: "Top Mangas",
          to: "/TopMangas"
        },
      ],
    };
  },
  props: ["variant", "listgroup"],
  methods: {
    activarGeneros() {
      this.$emit('activarGenerosAbuelo')
    },
    CerrarSubMenus() {
      this.value = ''
      this.value2 = ''
    },
    async loadGenres() {
      const genresAnime = await axios.get('https://api.jikan.moe/v4/genres/anime')

      this.genresAnime = genresAnime.data.data
    },
    async loadGenresManga() {
      const genresManga = await axios.get('https://api.jikan.moe/v4/genres/manga')
      this.genresManga = genresManga.data.data
    },
    cargarTitulo(){
     const titulo = document.querySelectorAll('.v-list-group__header__append-icon')
     const html = titulo[0].innerHTML
     const icono = '<i aria-hidden="true" class="v-icon notranslate mdi mdi-microsoft theme--dark"></i>'
      titulo[0].innerHTML = (icono + 'Generos' + html)
      titulo[1].innerHTML = (icono + 'Generos' + html)
    }
  },
  mounted() {
    this.loadGenres()
    this.cargarTitulo()
    this.loadGenresManga()
  },
}
</script>

<template>
  <v-navigation-drawer temporary v-model='variante' style="overflow: auto; " width="340px" fixed color="#272727"
    class="NavigationR" left>
    <v-list style="position: fixed; width: 100% ; top:80px" nav >
      <template v-for="(item, i) in items">
        <v-tooltip right v-if="variant == true">
          <template v-slot:activator="{ on, attrs }">
            <v-hover v-slot="{ hover }" v-if="item.title == 'Animes' || item.title == 'Inicio' || item.title == 'Mangas'">
              <v-list-item :to="item.to" router exact v-bind="attrs" v-on="on" :key="i">
                <v-list-item-action class="mr-1">
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-hover>
          </template>
          <span>{{ item.title }}</span>
        </v-tooltip>
      </template>
      <template v-for="(item, index) in items">
        <template v-if="variant == false ">
        
          <v-list-item @click="CerrarSubMenus" :to="item.to" router exact :key="index" v-if="item.title != 'Generos'">
            <v-list-item-action class="mr-4">
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
          <v-list-group :class="variant != false? 'sub-menu-none': ''" v-if="index == 1" v-model="value" :key="item.title">          
            <template v-for="(x, index) in genresAnime">
               <v-list-item @click="CerrarSubMenus" :to="`/Animes/genres/${x.mal_id}`" router exact :key="x.mal_id" v-if="index < 20">
                 {{ x.name }}
               </v-list-item>

            </template>
          </v-list-group>
          <v-list-group v-if="index == 5" v-model="value2" :key="800" :class="variant != false? 'sub-menu-none': ''" >
            <template v-for="(x, index) in genresManga">
              <v-list-item  @click="CerrarSubMenus" :key="x.mal_id" :to="`/Mangas/genres/${x.mal_id}`" router exact v-if="index < 20">
                {{ x.name }}
              </v-list-item>
            </template>
          </v-list-group>
        <div :class="variant != false? 'sub-menu-none': ''" style="border-bottom: 1px solid #eee; margin-bottom: 10px;" v-if="index == 0 || index == 4 || index == 7"></div>
      </template>
      <MiniList :cartaGeneros="variant ? 'cartaGenerosActive' : 'cartaGeneros'" />
    </v-list>
  </v-navigation-drawer>
</template>

<style >
@media(min-width:750){
  .NavigationR {
  display: none !important;
}
}

</style>