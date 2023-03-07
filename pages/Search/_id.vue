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
        <ListAnimeAndManga class="mt-0" :contenido="`/manga?q=${this.$route.params.id}&sfw`" title="Resultados:"
            Direccion="Anime" cantidad="10" />
        <ListAnimeAndManga class="mt-0" :contenido="`/anime?q=${this.$route.params.id}&sfw`" title="Resultados:"
            Direccion="Anime" cantidad="100" />
        
    </div>
</template>
<style >
.tituloBusqueda {
    text-align: center;
    color: var(--color-negro);
    font-size: 7rem;
    font-family: 'Island Moments';
}
</style>