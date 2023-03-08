<script>
import axios from 'axios'
import MiniListVue from './MiniList.vue'
export default {
    data() {
        return {
            value: '',
            value2: '',
            epale: true,
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
        }
    },
    mounted() {
        this.loadGenres()
        this.cargarTitulo()
        this.loadGenresManga()
    },
    methods: {

        CerrarSubMenus() {
            this.value = ''
            this.value2 = ''
        },

        loadGenres() {
            setTimeout(async () => {
                const genresAnime = await axios.get('https://api.jikan.moe/v4/genres/anime')
                this.genresAnime = genresAnime.data.data
            }, 2000)

        },

        loadGenresManga() {
            setTimeout(async () => {
                const genresManga = await axios.get('https://api.jikan.moe/v4/genres/manga')
                this.genresManga = genresManga.data.data
            }, 4000)

        },

        cargarTitulo() {
            const titulo = document.querySelectorAll('.v-list-group__header__append-icon')
            const html = titulo[0].innerHTML
            const icono = '<i aria-hidden="true" class="v-icon notranslate mdi mdi-microsoft theme--dark"></i>'
            titulo[0].innerHTML = (icono + 'Generos' + html)
            titulo[1].innerHTML = (icono + 'Generos' + html)
        }
    }


}
</script>

<template lang="">
    <v-list style="position: fixed; width: 100% ; top:80px" nav>
      <template v-for="(item, index) in items">

        <v-list-item @click="CerrarSubMenus" :to="item.to" router exact :key="index" v-if="item.title != 'Generos'">
          <v-list-item-action class="mr-4">
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-group v-if="index == 1" v-model="value" :key="item.title">
          <template v-for="(x, index) in genresAnime">
            <v-list-item class='ml-12' @click="CerrarSubMenus" :to="`/Animes/genres/${x.mal_id}`" router exact :key="x.mal_id"
              v-if="index < 50">
              {{ x.name }}
            </v-list-item>

          </template>
        </v-list-group>
        <v-list-group v-if="index == 5" v-model="value2" :key="800">
          <template v-for="(x, index) in genresManga">
            <v-list-item @click="CerrarSubMenus" class='ml-12' :key="x.mal_id" :to="`/Mangas/genres/${x.mal_id}`" router exact
              v-if="index < 50">
              {{ x.name }}
            </v-list-item>
          </template>
        </v-list-group>
        <div  style="border-bottom: 1px solid #eee; margin-bottom: 10px;"
          v-if="index == 0 || index == 4 || index == 7"></div>
      </template>
      <MiniList cartaGeneros="cartaGeneros" />
    </v-list>
</template>

<style lang="">
    
</style>