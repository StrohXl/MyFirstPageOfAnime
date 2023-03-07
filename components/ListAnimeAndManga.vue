<script>
import axios from 'axios';
export default {
    name: 'ListAnimeAndManga',
    props: ['contenido', 'Direccion', 'title', 'cantidad', 'pagina', 'tipo2', 'timeout', 'verMas'],
    data() {
        return {
            data: [],
            ApiUrl: 'https://api.jikan.moe/v4',
        }
    },

    mounted() {
        this.LoadData()
    },
    methods: {
        LoadData() {
            setTimeout(async () => {
                const auxData = await axios.get(this.ApiUrl + this.contenido, {
                params: {
                    page: this.pagina
                }
            })
            console.log(auxData.data.data)
            this.data = auxData.data.data
        }, this.timeout);

        }
    },
}
</script>
<template>
    <div class="content-card">
        <h1 class="content-card-title">
            {{ title }}

        </h1>
        <v-row>
            <template v-for="(item, index) in data">
                <v-col v-if="index < cantidad" class="col-card">
                    <nuxt-link style="text-decoration: none;" :to='`/${Direccion}/${item.mal_id || item.entry.mal_id}`'>
                        <v-card class="card">
                            <img :alt="item.title || item.entry.title" class="card-image"
                                :src="tipo2 ? item.entry.images.jpg.large_image_url : item.images.jpg.large_image_url" />
                            <div class="card-body">
                                <v-card-title class="card-title" primary-title>
                                    {{ item.title || item.entry.title }}
                                </v-card-title>
                                <v-card-title class="card-year" primary-title>
                                    {{ item.year || '' }}
                                </v-card-title>
                                <v-card-title class="card-score" primary-title>
                                    {{ item.score || '' }}
                                </v-card-title>
                            </div>
                        </v-card>
                    </nuxt-link>
                   <div style="display: flex; justify-content: space-between; margin-top: 10px;">
                     <div class="col-status">{{ item.status }}</div>
                     <div  class="col-type">{{ item.type }}</div>
                   </div>
                </v-col>
            </template>
        </v-row>

    </div>
</template>
<style>
.col-type{
    font-size: 0.7rem;
    height: 20px;
    display: flex;
    align-items: center;
    background-color: var(--color-blue);
    padding: 0 15px;
    border-radius: 10px;
}
.col-status{
    font-size: 0.7rem;
    height: 20px;
    display: flex;
    align-items: center;
    color: #fff;
    background-color: var(--color-negro);
    padding: 0 15px;
    border-radius: 10px;
}
.content-card-title {
    color: var(--color-negro);
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    border-left: 5px solid var(--color-blue);
    padding-left: 1rem;
    margin-bottom: 2rem;
}

.ver-mas {
    margin-top: 3rem;
    width: 100%;
    display: flex;
    justify-content: end;
}

.col-card {
    margin-bottom: 2.5rem;
    width: 50% !important;
    height: 150px;
    flex-basis: auto !important;
}

.card {
    width: 100%;
    height: 100%;
}

@media(min-width:600px) {
    .col-card {
        max-width: 33% !important;
        height: 180px;
    }

}

@media(min-width:960px) {
    .col-card {
        max-width: 25% !important;
        height: 200px;
    }
}

@media(min-width:1264px) {
    .col-card {
        max-width: 20% !important;
        height: 280px;
    }
}

@media(min-width:1904px) {
    .col-card {

        height: 350px;
    }
}

.card-score {
    position: absolute;
    bottom: 0;
    right: 0;
    color: #f1c914ef;

}

.card-body {
    width: 100%;
    position: absolute;
    z-index: 1;
    height: 100%;
    opacity: 0;
}

.card:hover .card-body {
    opacity: 1;
    display: flex;
    flex-direction: column;
    background-color: #000000b6;

}

.card-title {
    overflow: hidden;
    height: 50px;
    font-size: .9rem;
    padding-bottom: 0;
}

.card-year {
    padding-top: 0;
    font-size: .8rem;
}

.card-image {
    position: absolute;
    width: 100%;
    height: 100%;
}

.content-card {
    margin-top: 2.5rem;
}
</style>