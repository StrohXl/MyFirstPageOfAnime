<template lang="">
    <v-container class="black--text containerId " height="600px">
    <v-row>
         <v-col cols="3">
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
         <v-col cols="8" class="ml-12" > 
            <v-card-title class="d-flex justify-center text-h3 text-center">
                {{anime.title}}
            </v-card-title>
            <div>
                <v-card-title class="d-flex justify-center">
             Sinopsis  
            </v-card-title>
            <div class="text-justify">
                {{anime.synopsis}}
            </div>
            </div>
        </v-col>

    </v-row>
    <v-divider></v-divider>
  

   
    
       
    </v-container>
</template>
<script >
import axios from 'axios'
export default {
    data() {
        return {
            anime: {},
            imagen: ''
        }
    },
    async created() {
        const url = await axios.get('https://api.jikan.moe/v4/anime/' + this.$route.params.id)
        const imagen2 = await axios.get('https://api.jikan.moe/v4/anime/' + this.$route.params.id)
        this.imagen = imagen2.data.data.images.webp.image_url
        this.anime = url.data.data
        console.log(url.data.data)


    }


}



</script>
<style >
.containerId {
    border: 4px solid var(--color-negro);
    background-color: #fff;
}
</style>