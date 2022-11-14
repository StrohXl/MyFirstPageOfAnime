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
      <template v-for="(anime, i) in Lista">
        <v-carousel-item v-if="i < 5" class="Content-Ver " >
            <img :src=anime.Portada alt="" class="foto " width="100%" height="100%">
            <v-btn tile class="VerAnime" >
              <div >Ver {{ anime.name }} <v-icon style="font-size: 22px;">mdi-chevron-right</v-icon>
              </div>
            </v-btn>
      
        </v-carousel-item>
  
      </template>
    </v-carousel>
   
</template>

<script >
import ListaDeAnimes from '../json/ListaDeAnimes.json'
export default {
  name: 'Carousel',
  data() {
    return {
      Lista: ListaDeAnimes
    }
  },
}
</script>
<style>
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