<template lang="">
    <v-container class="black--text containerId " height="600px">
    <v-row>
         <v-col cols="4">
             <img  width="300px" height="500px" :src="imagen"></img>
             <v-rating
               small
                 :length="10"
                 v-model="anime.score"
                   background-color="orange lighten-3"
                  color="orange"
                large>
             </v-rating>
         </v-col>
         <v-col cols="7" > 
            <v-card-title class="d-flex justify-center text-h3 text-center">
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
        <div class="d-flex mt-6" >
            <div>
                      <ul>
                          <li class="mt-2">Year:</li>
                          <li class="mt-2">Episodes:</li>  
                          <li class="mt-2">Genres:</li>
                          <li class="mt-2">Status:</li>
                          <li class="mt-2">Studios:</li>
                          <li class="mt-2">Type:</li>
                          <li class="mt-2">Demographics:</li>
                      </ul>
                </div>
             <div class="ml-16">
                      <ul>
                        <li class="valueLi mt-2">{{anime.year}}</li>
                          <li class="valueLi mt-2">{{anime.episodes}}</li>
                          <li class="valueLi mt-2"><template v-for="(item, index) in anime.genres">{{item.name}}</template></li>
                          <li class="valueLi mt-2">{{anime.status}}</li>
                          <li class="valueLi mt-2"><template v-for="(item, index) in anime.studios">{{item.name}}</template></li>
                         <li class="valueLi mt-2">{{anime.type}}</li>
                         <li class="valueLi mt-2"><template v-for="(item, index) in anime.demographics">{{item.name}}</template></li>
                      </ul>
             </div>
        </div>
        </v-col>

    </v-row>
    <v-card-title primary-title>
            Episodios
        </v-card-title>
    <v-row>

   <template v-for="(item, index) in ListEpisodios" cols="3">
         <v-col v-if="item.url !== null "  > 
            <div style="border: 2px solid black; " >
              <v-card-title primary-title>
             Capitulo: {{item.mal_id}}
              </v-card-title>
            <v-img :src="imagen" height="200px"></v-img>
              <v-card-title primary-title>
             {{item.title}}
          </v-card-title>
             </div>
         </v-col>
   </template>
    </v-row>

    </v-container>
</template>
<script >
import axios from 'axios'
export default {
    data() {
        return {
            anime: {},
            imagen: '',
            ListEpisodios: [],
        }
    },
    async mounted() {
        const url = await axios.get('https://api.jikan.moe/v4/anime/' + this.$route.params.id)
        this.anime = url.data.data
        const imagen2 = await axios.get('https://api.jikan.moe/v4/anime/' + this.$route.params.id)
        this.imagen = imagen2.data.data.images.webp.image_url
        const Episodios = await axios.get('https://api.jikan.moe/v4/anime/' + this.$route.params.id + '/episodes')
        this.ListEpisodios = Episodios.data.data
    }
}

</script>
<style >
.containerId {
    border: 4px solid var(--color-negro);
    background-color: #fff;
}

.valueLi {
    list-style: none;
}
</style>