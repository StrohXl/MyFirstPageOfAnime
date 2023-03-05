<template>
    <v-row class="mb-0" style="width: 100%;">
        <v-col>
            <Carousel />
            <ListAnimeAndManga contenido="/seasons/now" title="Animes en Emision" Direccion="Anime"  cantidad="10" />
            <ListAnimeAndManga contenido="/anime" title="Animes" Direccion="Anime" cantidad="10"/>
            <ListAnimeAndManga contenido="/manga" title="Mangas" Direccion="Manga" cantidad="10"/>

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
}
</style>