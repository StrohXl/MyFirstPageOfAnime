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
      pagination: 10,
      genre: ''

    }
  },
  methods: {
    async LoadData() {
      this.loading = true
      window.scroll(0, 0)
      const auxData = await axios.get('https://api.jikan.moe/v4/manga', {
        params: {
          page: this.pagina,
          genres: this.$route.params.id
        }
      })
      this.data = auxData.data.data
      this.pagination = auxData.data.pagination.last_visible_page
      this.loading = false
      this.data.length == 0 ? this.load = true : this.load = false
    },
    async LoadGenre() {
      const auxData = await axios.get('https://api.jikan.moe/v4/genres/manga')
      this.data = auxData.data.data
      const filtrado = auxData.data.data.filter((i)=> i.mal_id == this.$route.params.id)
      this.genre = filtrado[0].name
    },
  },
  mounted() {
    this.LoadData()
    this.LoadGenre()
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
    <ListAnimeAndManga class='content-card-pages' :title='`Mangas de ${genre}`' :loading="loading" :load="load" :data="data" Direccion="Manga" :cantidad="25" />

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
