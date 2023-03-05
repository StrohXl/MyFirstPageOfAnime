<script >
import axios from 'axios';
export default {
  name: 'Carousel',
  data() {
    return {
      animes: []
    }
  },
  async mounted() {
    this.emision()
  },
  methods: {
    async emision() {
      const animes = await axios.get('https://api.jikan.moe/v4/seasons/now')
      this.animes = animes.data.data
    }
  }
}
</script>
<template>
  <v-carousel cycle interval="3500" class="carousel" show-arrows-on-hover>
    <template v-for="(anime, i) in animes">
      <nuxt-link :to="`/Anime/${anime.mal_id}`">
        <v-carousel-item v-if="i < 7" class="Content-Ver ">
          <v-card-title primary-title class="tituloAnimeCarousel">
            {{ anime.title }}
          </v-card-title>
          <img :src="anime.trailer.images.maximum_image_url" alt="" class="carousel-image">
        </v-carousel-item>
      </nuxt-link>
    </template>
  </v-carousel>
</template>

<style>
.foto {
  position: absolute;
  width: 100%;
  height: 100%;
}

.v-carousel__controls {
  height: 30px !important;
}

.VerAnime:hover a {
  color: var(--color-negro);
}

.carousel {
  height: 250px !important;
}

.carousel-image {
  width: 100%;
  height: 250px 
}

.tituloAnimeCarousel {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 3rem;
  position: absolute;
  z-index: 100;
  padding-left: 1.5rem;
  padding-top: 1.5rem;
  width: 100%;
  transition-property: background-color color;
  transition-duration: 0.5s;
  font-weight: bold;
  opacity: 0;
  color: #fff;
}

.carousel:hover .tituloAnimeCarousel {
  background-color: #00000096;
  opacity: 1;
}

@media (min-width: 600px) {
  .carousel {
    height: 280px !important;
  }
  .carousel-image {
    height: 280px  ;
  }

}
@media (min-width: 1264px) {
  .carousel {
    height: 350px !important;
  }
  .carousel-image {
    height: 350px  ;
  }

}
</style>