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
  background-color: #000;
  border-radius: 4px;
  height: 250px !important;
}

.carousel-image {
  border-radius: 1rem;
  width: 100%;
  height: 250px 
}

.tituloAnimeCarousel {
  font-size: 0.8rem;
  position: absolute;
  z-index: 100;
  padding-left: 1rem;
  padding-top: 1rem;
  width: 100%;
  height: 15%;
  overflow: hidden;
  transition-property: background-color color;
  transition-duration: 0.5s;
  font-weight: bold;
  opacity: 0;
  color: #fff;
  background-color: #00000096;
}

.carousel:hover .tituloAnimeCarousel {
  opacity: 1;
}
.v-carousel__controls__item{
  width: 15px !important;
  height: 15px !important;
}

@media (min-width: 600px) {
  .v-carousel__controls__item{
  width: 28px !important;
  height: 28px !important;
}
  .tituloAnimeCarousel {
  font-size: 1.2rem;
}
  .carousel {
    height: 280px !important;
  }
  .carousel-image {
    height: 280px  ;
  }

}
@media (min-width: 1264px) {
  .tituloAnimeCarousel {
  font-size: 2rem;
}
  .carousel {
    height: 350px !important;
  }
  .carousel-image {
    height: 350px  ;
  }

}
@media (min-width: 1664px) {
  .carousel-image {
    height: 450px  ;
  }
  .carousel {
    height: 450px !important;
  }

}
</style>