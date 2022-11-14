<template lang="">
    <v-container class="black--text white" height="600px">
    <v-row>
         <v-col cols="3">
                <img  :src="imagen"></img>
         </v-col>
         <v-col> 
            <v-card-title class="d-flex justify-center">
                {{anime.title}}
            </v-card-title>
            <div>
                <v-card-title class="d-flex justify-center">
             Sinopsis  
            </v-card-title>
            <div>
                {{anime.synopsis}}
               
            </div>
            </div>
        </v-col>

    </v-row>

   
    
       
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
<style lang="">
    
</style>