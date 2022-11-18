<template >
    <div>
        <div class="tituloBusqueda">Resultados:</div>
        <v-row class="ma-0 resultados">
                <template v-for="(Anime, index) in animes" >
                    <v-col class="d-flex justify-center pa-4" >
                        <v-card width="200px" style="min-height:100px;" class="carta" tile :to="`/Anime/`+ Anime.mal_id" router exact >
                            <div style="height: 170px; " class="contentImg"  >
                                <div class="play" style="height: 170px;">
                                    <v-icon class="text-h1 blue--text">mdi-play-circle</v-icon>
                                </div>
                                <img :src="Anime.images.jpg.image_url" class="imagenlist">
                            </div>
                            <v-card-title class="text-subtitle-2 text-center black--text">{{Anime.title}}</v-card-title>
                           
                        </v-card>
                    </v-col>
                </template>
            </v-row>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            animes:[]
        }
    },
    async mounted(){
      const url = await axios.get('https://api.jikan.moe/v4/anime?q=' + this.$route.params.id + `&sfw`)
      console.log(url.data.data)
        this.animes= url.data.data
     }
}
</script>
<style >
    .tituloBusqueda {  
    background-color: #fff;
    text-align: center;
    border: 4px solid var(--color-negro) !important;
    color: var(--color-negro);
    font-size: 7rem;
    font-family: 'Island Moments';
}
.resultados{
    background-color: #fff;
    border: 4px solid var(--color-negro);
    border-top: none;
  
}
</style>