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
        <IdAnimeManga direccion='manga' Genres='Mangas'/>

</div>
</template>

<style >
.valueLi {
    list-style: none;
}
</style>