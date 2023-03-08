<script>
import axios from 'axios';
export default {
  name: "Animes",
  data() {
    return {
      data: [],
      loading: true,
      load: '',
      pagina: 1,
      pagination: 5

    }
  },
  methods: {
    async LoadData() {
      this.loading = true
      window.scroll(0, 0)
      const auxData = await axios.get('https://api.jikan.moe/v4/seasons/now', {
        params: {
          page: this.pagina
        }
      })
      this.data = auxData.data.data
      this.pagination = auxData.data.pagination.last_visible_page
      this.loading = false
      this.data.length == 0 ? this.load = true : this.load = false

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
      <ListAnimeAndManga class='content-card-pages' title='ANIMES EN EMISION' :loading="loading" :load="load" :data="data" Direccion="Anime" :cantidad="25" />
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
.content-card-pages {
  margin-top: 1.5rem;
}

@media(min-width: 750px) {
  .content-card-pages {
    margin-left: 1.5rem;
    margin-right: 1rem;
  }
}
</style>
