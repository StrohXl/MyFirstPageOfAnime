<script>
import ListAnimeAndManga from '../../components/ListAnimeAndManga.vue';
export default {
    mounted() {
        console.log(this.$route)
    }
}
</script>
<template >
    <div>
        <ListAnimeAndManga title="Resultados:" class="mt-0" :contenido="`/anime?q=${this.$route.params.id}&sfw`" 
            Direccion="Anime" cantidad="100" />
        <ListAnimeAndManga class="mt-0" :contenido="`/manga?q=${this.$route.params.id}&sfw`" 
            Direccion="Manga" cantidad="100" />
        
    </div>
</template>
<style >
</style>