<script>
import axios from 'axios';
export default {
  name: "Animes",
  data() {
    return {
      data: [],
      aleatorio: [],
      cantidad: 15,
      pagina: 1

    }
  },
  methods: {
    async LoadData() {

      const auxData = await axios.get("https://api.jikan.moe/v4/manga", {
        params: {
          page: this.$route.params.id
        }
      })
      this.data = auxData.data.data
    },
    cambiarPagina() {
      this.$router.push(`/Animes/page/${this.pagina}`)
    }

  },
  mounted() {
    this.LoadData()

  }

}
</script>

<template lang="">
    <div>
    <div class="content-pages-manga" >
        <h1 class="content-card-title content-card-title-manga">
            MANGAS
        </h1>
        <v-row>
            <template v-for="(item, index) in data">
                <v-col v-if="index < 25" class="col-card">
                    <nuxt-link style="text-decoration: none;" :to='`/Manga/${item.mal_id}`'>
                        <v-card class="card">
                            <img :alt="item.title" class="card-image" :src="item.images.jpg.large_image_url" />
                            <div class="card-body">
                                <v-card-title class="card-title" primary-title>
                                    {{ item.title }}
                                </v-card-title>
                                <v-card-title class="card-year" primary-title>
                                    {{ item.year   }}
                                </v-card-title>
                                <v-card-title class="card-score" primary-title>
                                    {{ item.score  }}
                                </v-card-title>
                            </div>
                        </v-card>
                    </nuxt-link>
                </v-col>
            </template>
        </v-row>
    </div>
  <div class="text-center">
    <v-container>
      <v-row justify="center">
        <v-col cols="8">
          <v-container class="max-width">
            <v-pagination
              v-model="pagina"
              :value=3
               @input='cambiarPagina'
              class="my-4"
              total-visible="10"
              :length="50"
            ></v-pagination>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </div>
  
  
    </div>
</template>

<style>
@media(min-width: 750px){
  .content-pages-manga{
    margin: 2rem;

  }
}
</style>