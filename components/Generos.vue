<script>
import axios from 'axios';
export default {
    data() {
        return {
            data: [],
            valor: ''
        }
    },
    props: ['genres','variant','direccion'],
    mounted() {
        this.LoadData(
            
        )
    },

    methods: {
        LoadData() {
            setTimeout(async () => {
                const genres = await axios.get(`https://api.jikan.moe/v4/genres/${this.genres}`)
                this.data = genres.data.data
            }, 2000)
        },
        CerrarSubMenus() {
            this.valor = ''
        },
    }
}

</script>

<template>
    <v-list-group  v-model="valor" :key="800" :class="variant != false ? 'sub-menu-none' : ''">
        <template v-for="(x, index) in data">
            <v-list-item class="ml-12" @click="CerrarSubMenus()" :key="x.mal_id" :to="`/${direccion}/genres/${x.mal_id}`" router exact
                v-if="index < 50">
                {{ x.name }}
            </v-list-item>
        </template>
    </v-list-group>
</template>

<style></style>