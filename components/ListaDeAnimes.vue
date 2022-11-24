<template>
    <div>
        <div class="mt-12">
            <div class="d-flex justify-center titulo align-center">
                    <h1 class="tituloIntersectado">Animes Recomendados
                    </h1>
                </div>
            <v-row class="mt-12">
                <template v-for="(Anime, index) in populares" >
                    <v-col class="d-flex justify-center pa-4" v-if="index < 10">
                        <v-card width="200px" style="min-height:100px;" class="carta" tile :to="`/Anime/`+ Anime.entry[1].mal_id" router exact >
                            <div style="height: 170px; " class="contentImg"  >
                                <div class="play" style="height: 170px;">
                                    <v-icon class="text-h1 blue--text">mdi-play-circle</v-icon>
                                </div>
                                <img :src="Anime.entry[1].images.jpg.image_url" class="imagenlist">
                            </div>
                            <v-card-title class="text-subtitle-2 text-center black--text">{{Anime.entry[1].title}}</v-card-title>
                           
                        </v-card>
                    </v-col>
                </template>
            </v-row>
        </div>

    </div>
</template>
<script>
import axios from 'axios'
export default{
    name: 'ListaDeAnimes',
    data(){
       return{

        populares: []
       }
    },
     async mounted(){

        const res = await axios.get('https://api.jikan.moe/v4/recommendations/anime')
        this.populares = res.data.data

        
    }
}

</script>
<style>
.play {
    display: none;
    height: 170px;
    position: absolute !important;
}
.contentImg:hover .play {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-negro-transparente);
  
    width: 100%;
    
    z-index: 100;
}

.carta {
    border: 4px solid var(--color-negro);
    background-color: rgb(255, 255, 255) !important;
}

.ListaRow {
    background: #fff;
}

.imagenlist {
    z-index: 1;
    height: 100%;
    width: 100%;
    border-bottom: 4px solid var(--color-negro);
}

.ver {
    text-decoration: none;
    color: green;
    font-size: 20px;
}
</style>