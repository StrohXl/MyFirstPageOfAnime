<template>
    <v-carousel cycle height="400px" interval="3500" class="carousel" show-arrows-on-hover>
      <template v-slot:prev="{ on, attrs }">
        <v-btn tile v-bind="attrs" v-on="on"  class="botonNuevo">
          <v-icon class="text-h5 black--text">mdi-chevron-left</v-icon>
        </v-btn>
      </template>
      <template v-slot:next="{ on, attrs }">
        <v-btn tile v-bind="attrs" v-on="on"  class="botonNuevo">
          <v-icon class="text-h5 black--text">mdi-chevron-right</v-icon>
        </v-btn>
      </template>
      <template v-for="(anime, i) in aleatorio">
        <v-carousel-item v-if="i > 50 && i <55 " class="Content-Ver " >
              <v-card-title primary-title class="tituloAnimeCarousel">
               {{anime.entry[0].title}}
              </v-card-title>
            <img :src="anime.entry[0].images.jpg.image_url" alt="" class="foto " width="100%" height="100%">
            <v-btn tile class="VerAnime" :to="`/Anime/` + anime.entry[0].mal_id" router exact>
              <div >Ver<v-icon style="font-size: 22px;">mdi-chevron-right</v-icon>
              </div>
            </v-btn>
      
        </v-carousel-item>
  
      </template>
    </v-carousel>
   
</template>

<script >
import axios from 'axios';
import ListaDeAnimes from '../json/ListaDeAnimes.json'
export default {
  name: 'Carousel',
  data() {
    return {
      Lista: ListaDeAnimes,
      aleatorio:[]
    }
  },
  async mounted(){
    const ale = await axios.get('https://api.jikan.moe/v4/recommendations/anime')
    this.aleatorio = ale.data.data
    console.log(ale.data)
  
  }
}
</script>
<style>
.tituloAnimeCarousel{
  background-color: rgba(20, 21, 98, 0.35);
  position: absolute;
  z-index: 100;
  font-size: 3rem;
  margin-left: 10px;
  margin-top: 10px;
  width: 50%;
  color: #fff;
  font-weight: 300;
}
.botonNuevo{
  background: #fff !important;
  width: 20px !important;
  border: 2px solid var(--color-negro);
  transition-property: opacity;
  transition-duration: 0.2s;
}
.carousel{
  border: 4px solid var(--color-negro);
}

.foto{
  position: absolute;
  width: 100%;
  height: 100%;
  
}
.VerAnime{
  border: 2px solid var(--color-negro) !important;
  position: absolute;
  bottom: 60px;
  right: 16px;
}

.VerAnime:hover {
  background-color: white !important;
  color: var(--color-negro);
}

.VerAnime:hover a {
  color: var(--color-negro);
}
</style>