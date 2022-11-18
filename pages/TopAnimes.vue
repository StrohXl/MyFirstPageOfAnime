<template >
    <div>
        <div class="tituloTop">
            <v-row v-for="(anime, index) in topCompleto" style="border-bottom: 4px solid var(--color-negro);" >
         <v-col cols="3">
             
             <img  width="200px" :src="anime.images.webp.image_url" class="mt-10"></img>
            <div class="text-h4 blue--text">Top: {{index+1}}</div>
         </v-col>
         <v-col class="mb-16"  cols="8"> 
            <v-card-title class="d-flex justify-center text-h4 text-center">
                {{anime.title}}
            </v-card-title>
            <div>
               <v-card-title class="d-flex justify-center">
               Sinopsis  
             </v-card-title>
            </div>
            <div class="text-justify">
                {{anime.synopsis}}
            </div >
            
        </v-col>
        <v-btn class="mt-16" color="blue" :to="`/Anime/`+ anime.mal_id" route exact >Ver</v-btn>

    </v-row>
    
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: "TopAnimes.vue",
    data() {
    return {
      topCompleto:[],
    };
  },
  async mounted() {
    const listaCompleta = await axios.get('https://api.jikan.moe/v4/top/anime')
    this.topCompleto = listaCompleta.data.data
   
  },
}
</script>
<style >
    .tituloTop {  
    text-align: center;
    border: 4px solid var(--color-negro);
    background-color: #fff;
    color: var(--color-negro);

}
.contentTop{

    border: 4px solid var(--color-negro);
    border-top: none;
}
  
</style>