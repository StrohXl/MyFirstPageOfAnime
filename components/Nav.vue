<template>
  <div>
    <v-navigation-drawer light v-model="drawer" temporary fixed width="80%" style="z-index:1500 ;">
      <v-list fixed>
        <v-hover v-slot="{ hover }" v-for="(item, i) in items" :key="i">
          <v-list-item :to="item.to" router exact>
            <v-list-item-action>
              <v-icon :class="hover ? 'blue--text' : ''">{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title :class="hover ? 'blue--text' : ''">{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-hover>

        <v-hover v-slot="{ hover }">
          <v-list-group>
            <template v-slot:activator>
              <v-list-item-action>
                <v-icon :class="hover ? 'blue--text' : ''">mdi-ticket</v-icon>
              </v-list-item-action>
              <v-list-item-content>

                <v-list-item-title v-text="'Generos'" :class="hover ? 'blue--text' : ''"></v-list-item-title>
              </v-list-item-content>
            </template>

            <v-row>
              <v-col v-for="(item, index) in generos" cols="6">
                <v-hover v-slot="{ hover }">
                  <v-list-item :key="item.mal_id">
                    <v-list-item-content v-if="index < ((generos.length - 1) / 2)">
                      <v-list-item-title :class="hover ? 'blue--text' : ''">{{ item.name }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-hover>
              </v-col>
              <v-col v-for="(item, index) in generos">
                <v-list-item :key="item.mal_id">

                  <v-list-item-content v-if="index > ((generos.length - 1) / 2)">
                    <v-list-item-title>{{ item.name }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

              </v-col>
            </v-row>

          </v-list-group>
        </v-hover>

      </v-list>
    </v-navigation-drawer>
    <v-bottom-navigation class="pl-5 pr-5" style="top: 0; z-index: 1000;" color="primary" fixed>
      <v-toolbar-title class="blue--text text-h3 d-flex align-center">Vue
        <span class="white--text">Anime</span>
      </v-toolbar-title>
      <v-spacer />
      <v-btn class="botones" v-for="(item, index) in items" :key="index" :to="item.to" router exact height="100%">
        {{ item.title }}</v-btn>
      <v-btn height="100%" value="recent" icon @click.stop="drawer = !drawer" class="botonResponsive">
        <v-icon>mdi-menu</v-icon>
      </v-btn>

    </v-bottom-navigation>
  </div>
</template>
<script>
import axios from 'axios';


export default {
  name: "Nav",
  data() {
    return {
      generos: [],
      drawer: false,
      items: [
        {
          icon: 'mdi-home',
          title: 'Inicio',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Animes',
          to: '/Animes'
        },
        {
          icon: 'mdi-apps',
          title: 'Top Animes',
          to: '/TopAnimes'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Emision',
          to: '/Emision'
        }
      ],
    }
  },
  async created() {
    const ostia = await axios.get('https://api.jikan.moe/v4/genres/anime')
    this.generos = ostia.data.data

  }

}
</script>
<style >
.botones {
  color: #fff !important;
}

.botones:hover {

  background-color: var(--color-blue) !important;
}

.botonResponsive {
  display: none;
}
</style>