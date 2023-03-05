<script >
import axios from 'axios'
export default{
  name: 'MiniTop',
  data(){
    return{
      Top: [],
    }
  },
  props: ['cartaGeneros'],
  mounted(){
    this.TopAnime()
  },
  methods: {
    async TopAnime() {
      const auxData = await axios.get('https://api.jikan.moe/v4/top/anime')
      this.Top = auxData.data.data
    },
  },
}
</script>

<template>
  <v-card :class="cartaGeneros" tile>
    <v-toolbar color="blue">
      <v-toolbar-title class="text-white text-h4">Top Animes</v-toolbar-title>
    </v-toolbar>
    <v-list color="white">
      <template v-for="(anime, index) in Top">
        <v-list-item :value="index" v-if="index < 5" class="mt-2 listItem" :to="`/Anime/` + anime.mal_id" router exact>
          <v-row>

            <v-col cols="10">
              <v-avatar size="110" tile><img :src="anime.images.jpg.image_url" alt=""></v-avatar>
            </v-col>

            <v-col class="pt-0">
              <v-list-item-title class="blue--text">{{ anime.rank }}:</v-list-item-title>
              <v-list-item-subtitle class="black--text"><strong>{{ anime.title }}</strong></v-list-item-subtitle>
            </v-col>
          </v-row>

        </v-list-item>

      </template>


    </v-list>
  </v-card>
</template>


<style>
.listItem:hover {
  background-color: #eee;
}

.cartaGeneros {
  display: block;

}

.cartaGenerosActive {
  display: none;
}

.genero:hover {
  cursor: pointer;
  color: green;

}
</style>