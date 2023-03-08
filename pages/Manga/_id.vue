<script >
import IdAnimeManga from '../../components/IdAnimeManga.vue'
import axios from 'axios'
export default {
    components: {
        IdAnimeManga,
    },
    data() {
        return {
            data: [],
            loading: true,
            load: '',
            anime: [],
            imagen: '',
            ListEpisodios: [],
            id: ''
        }
    },
    methods: {
        async LoadData() {
            this.loading = true
            window.scroll(0, 0)
            const auxData = await axios.get(`https://api.jikan.moe/v4/manga/${this.$route.params.id}/recommendations`)
            console.log(auxData.data)
            this.data = auxData.data.data
            this.loading = false
            this.data.length == 0 ? this.load = true : this.load = false
        },
    },
    mounted() {
        this.LoadData()
    },

}

</script>

<template lang="">
<div>
        <IdAnimeManga direccion='manga' Genres='Mangas'/>
     <ListAnimeAndManga :tipo2='true' class='content-card-pages' title='MANGAS RECOMENDADOS' :loading="loading" :load="load" :data="data" Direccion="Manga" :cantidad="4" />


</div>
</template>

<style >
.valueLi {
    list-style: none;
}
</style>