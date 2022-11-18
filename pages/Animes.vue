<template lang="">
    <div>
          <div class="tituloAnimes">Lista De Animes</div>
         <v-row no-gutters justify="space-around" class="pa-12 rowAnimes">
        <template v-for="(Anime, index) in Lista">
            <v-col class="d-flex justify-center pa-2 pb-5  " v-if="index < cantidad">
                <v-card width="200" height="300px" tile class="cartaAnimes" :to="`/` + index" route exact>
                    <div style="height: 220px;" class="contentImg">
                        <div class="play play-active" style="height:240px;">
                            <v-icon color="blue" class="text-h1">mdi-play-circle</v-icon>
                        </div>
                        <img :src="Anime.src" class="imagen">
                    </div>
                    <v-card-title class="text-subtitle-2" >
                        {{ Anime.name }}
                    </v-card-title>
                </v-card>
            </v-col>
        </template>
          <div class="text-center buttomAnimes"  >
        <v-btn color="blue" class="ma-3" @click="aumentar" >Ver mas</v-btn>
    </div>
    </v-row>
  
    </div>
</template>
<script>
import ListaDeAnimes from '../json/Lista1.json';
import axios from 'axios'
export default {
    name: "Animes",
    data() {
        return {
            Lista: ListaDeAnimes,
            cantidad: 40,
            generos: []
        }
    },
    methods: {
        aumentar() {
            this.cantidad = this.cantidad + 40
        }
    },
    async created() {

  },
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