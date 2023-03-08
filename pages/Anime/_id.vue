<script >
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
 
}

</script>

<template lang="">
<div>
        <IdAnimeManga direccion='anime' Genres='Animes'/>
    <ListAnimeAndManga
    class='mt-1'
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