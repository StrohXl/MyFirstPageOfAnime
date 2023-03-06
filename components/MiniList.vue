<script >
import axios from 'axios'
export default {
  name: 'MiniList',
  data() {
    return {
      Top: [],
    }
  },
  props: ['cartaGeneros'],
  mounted() {
    this.TopAnime()
  },
  methods: {
    async TopAnime() {
      const auxData = await axios.get('https://api.jikan.moe/v4/seasons/upcoming')
      console.log(auxData.data.data)
      this.Top = auxData.data.data
    },
  },
}
</script>

<template>
  <div :class="cartaGeneros" tile>

    <v-list>
      <v-list-item-content>
        <v-list-item-title style="font-size: 1rem; font-weight: 500;">Animes por venir</v-list-item-title>
      </v-list-item-content>
      <template v-for="(anime, index) in Top">
        <nuxt-link :to="`/Anime/${anime.mal_id}`">
          <div :value="index" v-if="index < 5" class="list-item " :to="`/Anime/` + anime.mal_id" router exact>
            <img class="mini-top-image" :src="anime.images.jpg.large_image_url" alt=""/>
            <div style="font-size: .8rem; color: white; text-decoration: none;" primary-title>
              {{ anime.title }}
            </div>
          </div>
        </nuxt-link>
         
   
      </template>


    </v-list>
  </div>
</template>


<style>
.mini-top-image {
  height: 150px;
  width: 140px
}
.mini-top-description{
  position: absolute;
  height: 100%;
  width:  100%;
  background-color: rgba(0, 0, 0, 0.726);
  opacity: 0;
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
.list-item{
  margin-bottom: .5rem;
  margin-left: 1.5rem;
  width: 180px;
}
.list-item:hover .mini-top-description{
  opacity: 1;
}
</style>