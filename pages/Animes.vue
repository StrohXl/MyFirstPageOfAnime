<template lang="">
    <div>
          <div class="tituloAnimes">Lista De Animessssssssss</div>
         <v-row no-gutters justify="space-around" class="pa-12 rowAnimes">
        <template v-for="(anime, index) in aleatorio">
            <v-col class="d-flex justify-center pa-2 pb-5 " v-if="index < cantidad">
                <v-card width="200" height="300px" tile class="cartaAnimes" tile :to="`/Anime/`+ anime.entry[0].mal_id" router exact>
                    <div style="height: 220px;" class="contentImg">
                        <div class="play play-active" style="height:240px;">
                            <v-icon color="blue" class="text-h1">mdi-play-circle</v-icon>
                        </div>
                        <img :src="anime.entry[0].images.jpg.image_url" class="imagen">
                    </div>
                    <v-card-title class="text-subtitle-2" >
                        {{anime.entry[0].title}}
                    </v-card-title>
                </v-card>
            </v-col>
            <v-col class="d-flex justify-center pa-2 pb-5 " v-if="index < cantidad">
                <v-card width="200" height="300px" tile class="cartaAnimes" tile :to="`/Anime/`+ anime.entry[1].mal_id" router exact>
                    <div style="height: 220px;" class="contentImg">
                        <div class="play play-active" style="height:240px;">
                            <v-icon color="blue" class="text-h1">mdi-play-circle</v-icon>
                        </div>
                        <img :src="anime.entry[1].images.jpg.image_url" class="imagen">
                    </div>
                    <v-card-title class="text-subtitle-2" >
                        {{anime.entry[1].title}}
                    </v-card-title>
                </v-card>
            </v-col>
        </template>
        <v-col cols="10">
          <div class="text-center buttomAnimes"  >
         <v-btn color="blue" class="ma-3" @click="aumentar" >Ver mas</v-btn>
        </div>
    </v-col>
    </v-row>
  
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: "Animes",
    data() {
        return {
            aleatorio: [],
            cantidad: 15,
        }
    },
    methods: {
        aumentar() {
            this.cantidad = this.cantidad + 15
        }
    },
    async mounted(){
    const ale = await axios.get('https://api.jikan.moe/v4/recommendations/anime')
    this.aleatorio = ale.data.data

  }
}
</script>
<style>
.buttomAnimes{
    
    background-color: #fff;
    border-top: none;
}
.rowAnimes{
    background-color: #fff;
    border: 4px solid var(--color-negro);
    border-top: none;
  
}
.cartaAnimes {
    border: 2px solid var(--color-negro);
}
.ver {
    text-decoration: none;
    color: green;
    font-size: 20px;
}
.play {
    display: none;
}
.contentImg:hover .play {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-negro-transparente);
    height: 190px;
    width: 100%;
    position: absolute !important;
    z-index: 100;
}
.imagen {
    transition: 1s all !important;
    object-fit: fill !important;
    z-index: 1;
    height: 100%;
    width: 100%;
    border-bottom: 2px solid var(--color-negro);
}
.tituloAnimes {  
    background-color: #fff;
    text-align: center;
    border: 4px solid var(--color-negro) !important;
    color: var(--color-negro);
    font-size: 7rem;
    font-family: 'Island Moments';
}
</style>