<script >
import ListAnimeAndManga from '../components/ListAnimeAndManga.vue';
import Carousel from '../components/Carousel.vue';
import axios from 'axios';
export default {
    name: "IndexPage",
    data() {
        return {
            ApiUrl: 'https://api.jikan.moe/v4',
            data: [],
            loading: true,
            load: '',
            data2: [],
            loading2: true,
            load2: '',
            data3: [],
            loading3: true,
            load3: '',
        }
    },
    components: { ListAnimeAndManga, Carousel },
    mounted() {
        this.LoadData()
        this.LoadData2()
        this.LoadData3()

    },
    methods: {
        async LoadData() {
            setTimeout(async () => {
                const auxData = await axios.get(this.ApiUrl + '/seasons/now',{
                    params:{
                        page: 2
                    }
                })
                this.data = auxData.data.data
                this.loading = false
                this.data.length == 0 ? this.load = true : this.load = false
            }, 1500);

        },
        async LoadData2() {
            setTimeout(async () => {
                const auxData = await axios.get(this.ApiUrl + '/top/anime')
                this.data2 = auxData.data.data
                this.loading2 = false
                this.data2.length == 0 ? this.load2 = true : this.load2 = false
            }, 3000);

        },
        async LoadData3() {
            setTimeout(async () => {
                const auxData = await axios.get(this.ApiUrl + '/manga')
                this.data3 = auxData.data.data
                this.loading3 = false
                this.data3.length == 0 ? this.load3 = true : this.load3 = false
            }, 6000);

        }
    },
}

</script>
<template>
    <v-row class="mb-0" style="width: 100%; margin: 0px;">
        <v-col>
            <Carousel />
            <ListAnimeAndManga :loading="loading" :load="load" :data="data" title="ANIMES EN EMISION" Direccion="Anime" :cantidad="10" />
            <ListAnimeAndManga :loading="loading2" :load="load2" :data="data2" title="TOP ANIMES" Direccion="Anime" :cantidad="10" />
            <ListAnimeAndManga :loading="loading3" :load="load3" :data="data3" title="MANGAS" Direccion="Manga" :cantidad="10" />
        </v-col>

    </v-row>
</template>
<style>
.tituloIntersectado {
    color: #000 !important;
    font-size: 80px;
    font-family: 'Island Moments';
    padding-bottom: 0px;
}

.titulo {
    height: 80px;
    height: 100px;
}
</style>