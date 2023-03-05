<template lang="">
    <div>
          <ListAnimeAndManga contenido="/anime" title="Animes" Direccion="Anime" :page='pagina' cantidad="25" />
            <template>
  <div class="text-center">
    <v-container>
      <v-row justify="center">
        <v-col cols="8">
          <v-container class="max-width">
            <v-pagination
              v-model="pagina"
              :value=3
               @input='cambioDePagina'
              class="my-4"
              total-visible="10"
              :length="50"
            ></v-pagination>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </div>
<v-btn outline @click='cambioDePagina' color="primary" dark>text</v-btn>
</template>
  
    </div>
</template>
<script>
import ListAnimeAndManga from '../../../components/ListAnimeAndManga.vue'
export default {
    name: "Animes",
    data() {
        return {
            aleatorio: [],
            cantidad: 15,
            pagina: 1

        }
    },
    components:{ListAnimeAndManga},
    methods: {
        ruta() {
            this.pagina = this.$route.params.id
        },
        cambioDePagina(){
          alert(this.pagina)
      
        }
    },
     mounted() {
      this.ruta()
      
    }

}
</script>
<style>
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

}

.tituloAnimes {

    text-align: center;
    color: var(--color-negro);
    font-size: 7rem;
    font-family: 'Island Moments';
}
</style>