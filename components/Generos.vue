<script>
import axios from 'axios';
export default {
    name: 'Generos',
    data() {
        return {
            genres: []
        }
    },
    props: ['variant', 'generos'],
    mounted() {
        this.activarGeneros()
     },
    methods: {
        async activarGeneros() {
            const ListaDeGeneros = await axios.get("https://api.jikan.moe/v4/genres/anime");
            this.genres = ListaDeGeneros.data.data;
        },
    },

}
</script>

<template >
    <v-hover v-slot="{ hover }">
        <v-list-group :value="variant ? false : ''" @click="activarGenerosHijo">
            <template v-slot:activator>
                <v-tooltip right>
                    <template v-slot:activator="{ on, attrs }" v-bind="attrs" v-on="on">

                    </template>
                    <span>Generos</span>
                </v-tooltip>
            </template>


        </v-list-group>
    </v-hover>
</template>
<style lang="">
    
</style>