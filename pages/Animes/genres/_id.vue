<script>
import axios from 'axios';
export default {
  name: "Animes",
  data() {
    return {
      data: [],
      aleatorio: [],
      pagina: 1,
      pagination: 10

    }
  },
  methods: {
    async LoadData() {
      window.scroll(0, 0)
      const auxData = await axios.get('https://api.jikan.moe/v4/anime', {
        params: {
          page: this.pagina,
          genres: this.$route.params.id
        }
      })
      this.data = auxData.data.data
      this.pagination = auxData.data.pagination.last_visible_page
    },
  },
  mounted() {
    this.LoadData()
  },
  watch: {
    pagina: function () {
      this.LoadData()
    }
  }
}
</script>

<template lang="">
  <div>
       <div class="content-card content-card-pages">
          <h1 class="content-card-title">
              ANIMES  s
          </h1>
          <v-row>
              <template v-for="(item, index) in data">
                  <v-col class="col-card">
                      <nuxt-link style="text-decoration: none;" :to='`/Anime/${item.mal_id}`'>
                          <v-card class="card" elevation-19>
                              <img :alt="item.title || item.entry.title" class="card-image"
                                  :src="item.images.jpg.large_image_url" />
                              <div class="card-body">
                                  <v-card-title class="card-title" primary-title>
                                      {{ item.title || item.entry.title }}
                                  </v-card-title>
                                  <v-card-title class="card-year" primary-title>
                                      {{ item.year || '' }}
                                  </v-card-title>
                                  <v-card-title class="card-score" primary-title>
                                      {{ item.score || '' }}
                                  </v-card-title>
                              </div>
                          </v-card>
                      </nuxt-link>
                     <div style="display: flex; justify-content: space-between; margin-top: 10px;">
                       <div class="col-status">{{ item.status }}</div>
                       <div  class="col-type">{{ item.type }}</div>
                     </div>
                  </v-col>
              </template>
          </v-row>
        
      </div>
      <div class="text-center">
      <v-container>
        <v-row justify="center">
            <v-container >
                  <v-pagination
                    v-model="pagina"
                    class="my-4"
                    total-visible="10"
                    :length="pagination"
                  ></v-pagination>
            </v-container>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<style>

</style>
