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
        }
    },
    async mounted() {
        this.LoadData()
    },
    methods: {
        async LoadData() {
            const anime = await axios.get('https://api.jikan.moe/v4/anime/' + this.$route.params.id)
            this.anime = anime.data.data
            console.log(anime.data.data)
            this.imagen = anime.data.data.images.jpg.large_image_url
        }
    }
}

</script>

<template lang="">
<IdAnimeManga :anime='anime' :imagen='imagen' />
</template>

<style >
.valueLi {
    list-style: none;
}
</style>