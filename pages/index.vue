<template>
    <v-row class="mb-0" style="width: 100%;">
        <v-col>
            <Carousel />
            <ListAnimeAndManga verMas="/Animes/seasons-now/1" contenido="/seasons/now" title="ANIMES EN EMISION"
                Direccion="Anime" pagina="2" cantidad="10" />
            <ListAnimeAndManga timeout='200' verMas="/Animes/TopAnimes/1" contenido="/top/anime" title="TOP ANIMES"
                Direccion="Anime" pagina="1" cantidad="10" />
            <ListAnimeAndManga timeout='1600' verMas="/Animes/page/1" contenido="/anime" title="ANIMES" Direccion="Anime"
                cantidad="10" />
            <ListAnimeAndManga timeout='3000' verMas="/Mangas/page/1" contenido="/manga" title="MANGAS" Direccion="Anime"
                cantidad="10" />
        </v-col>

    </v-row>
</template>
<script >
import ListAnimeAndManga from '../components/ListAnimeAndManga.vue';
import Carousel from '../components/Carousel.vue';

export default {
    name: "IndexPage",
    components: { ListAnimeAndManga, Carousel },
}

</script>
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
}</style>