<script>
import axios from 'axios';
import ListAnimeAndManga from '../../components/ListAnimeAndManga.vue';
export default {
    data(){
        return{
            ApiUrl: 'https://api.jikan.moe/v4',
            data: [],
            loading: true,
            load: '',
            data2: [],
            loading2: true,
            load2: '',
        }
    },
    components:{
        ListAnimeAndManga
    },
    mounted() {
        this.LoadData()
        this.LoadData2()
    },
    methods: {
        async LoadData() {
            setTimeout(async () => {
                const auxData = await axios.get(this.ApiUrl + `/anime?q=${this.$route.params.id}&sfw`,{
                    params:{
                        page: 2
                    }
                })
                this.data = auxData.data.data
                this.loading = false
                this.data.length == 0 ? this.load = true : this.load = false
            }, 1);

        },
        async LoadData2() {
            setTimeout(async () => {
                const auxData = await axios.get(this.ApiUrl + `/manga?q=${this.$route.params.id}&sfw`)
                this.data2 = auxData.data.data
                this.loading2 = false
                this.data2.length == 0 ? this.load2 = true : this.load2 = false
            },1);

        }
    }
}
</script>
<template >
    <div class="content-search-list">
        <ListAnimeAndManga class="mt-0" :loading="loading" :load="load" :data="data" :title="`No hay resultados en animes para ${this.$route.params.id}`" Direccion="Anime" :cantidad="100" />
        <ListAnimeAndManga :loading="loading2" :load="load2" :data="data2" Direccion="Manga" :cantidad="100" />

        
    </div>
</template>
<style >
@media(min-width: 750px){
    .content-search-list{
        margin: 2rem !important;
    }
}
</style>