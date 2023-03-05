<script>
import axios from 'axios';
export default {
    name: 'ListAnimeAndManga',
    props: ['contenido', 'Direccion', 'title', 'cantidad', 'pagina', 'tipo2'],
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
        async LoadData() {
            const auxData = await axios.get(this.ApiUrl + this.contenido, {
                params: {
                    page: this.pagina
                }
            })
            this.data = auxData.data.data
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
                            <img :alt="item.title || item.entry.title" class="card-image" :src="tipo2? item.entry.images.jpg.large_image_url: item.images.jpg.large_image_url" />
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
                </v-col>
            </template>
        </v-row>
        <div class="ver-mas">
            <v-btn color="primary" elevation="5">
                Ver mas

            </v-btn>
        </div>
    </div>
</template>
<style>
.content-card-title {
    color: #000;
    font-size: 2rem;
    border-left: 7px solid var(--color-blue);
    height: 40px;
    padding-left: 1rem;
    margin-bottom: 2rem;
}

.ver-mas {
    margin-top: 1rem;
    width: 100%;
    color: #000;
    display: flex;
    justify-content: end;
}

.col-card {
    width: 50% !important;
    height: 250px;
    flex-basis: auto !important;
}

.card {
    width: 100%;
    height: 100%;
}

@media(min-width:600px) {
    .col-card {
        max-width: 33% !important;
        height: 280px;
    }
    
}
@media(min-width:960px) {
    .col-card {
        max-width: 25% !important;
        height: 290px;
    }
}
@media(min-width:1264px) {
    .col-card {
        max-width: 20% !important;
        height: 300px;
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
    margin-top: 2rem;
}</style>