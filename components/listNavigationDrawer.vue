<script>
import MiniList from './MiniList.vue'
import Generos from './Generos.vue'
import axios from 'axios'
export default {
    data() {
        return {
            value: '',
            value2: '',
            epale: true,
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
    props:['variant'],
    mounted() {
        this.cargarTitulo()
    },
    components:{
      MiniList,
      Generos
    },
    methods: {

        CerrarSubMenus() {
            this.value = ''
            this.value2 = ''
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
        
          <v-list-item @click="CerrarSubMenus()" :to="item.to" router exact :key="index" v-if="item.title != 'Generos'">
            <v-list-item-action class="mr-4">
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
          <Generos  genres='manga' v-if="index == 1" v-model="value" direccion='Animes' :variant='variant' />
          <Generos  genres='anime' v-if="index == 5" v-model="value2" direccion='Mangas' :variant='variant' />
        <div :class="variant != false? 'sub-menu-none': ''" style="border-bottom: 1px solid #eee; margin-bottom: 10px;" v-if="index == 0 || index == 4 || index == 7"></div>
      </template>
      <MiniList :cartaGeneros="variant ? 'cartaGenerosActive' : 'cartaGeneros'" />
    </v-list>
</template>

<style >
.v-list-group__header__append-icon{
  color: #fff !important;
}
.sub-menu-none{
  display: none !important;
}
.v-list-item--active{
  background-color: #1976d2 !important;
  color: #fff !important;
}
.v-list-item--link:before{
  background-color: #1976d2 !important;

}

.v-list-group__header__append-icon{
  display: flex;
  gap: 1rem;
}
.mdi-chevron-down{
  margin-left: 3rem;
}
@media (min-width:751px) {
  .Navigation {
    overflow: hidden;
    transition: none;
  }

  .Navigation:hover {
    overflow: auto;
  }

  .v-navigation-drawer__border {
    background-color: #00000000 !important;
  }
}

</style>