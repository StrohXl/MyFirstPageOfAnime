<script >
import axios from 'axios'
import IdAnimeManga from '../../components/IdAnimeManga.vue'
export default {
    components: {
        IdAnimeManga,
    },
    data() {
        return {
            anime: [],
            imagen: '',
            ListEpisodios: [],
            id: ''
        }
    },
    async mounted() {
        this.LoadData()
    },
    methods: {
        async LoadData() {
            const anime = await axios.get('https://api.jikan.moe/v4/anime/' + this.$route.params.id)
            this.anime = anime.data.data
            this.id = this.$route.params.id
            this.imagen = anime.data.data.images.jpg.large_image_url
        }
    }
}

</script>

<template lang="">
<div>
        <IdAnimeManga :anime='anime' :imagen='imagen'/>
    <ListAnimeAndManga
     verMas='/' 
     Direccion='Anime'
      tipo2='true' 
      :contenido='`/anime/${this.$route.params.id}/recommendations`' cantidad='4' 
      title='Animes recomendados' 
      timeout='1600'
      />
</div>
</template>

<style >
.valueLi {
    list-style: none;
}
</style>