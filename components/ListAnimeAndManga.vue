<script>
import Loading from './Loading.vue';
export default {
    name: 'ListAnimeAndManga',
    props: ['data', 'Direccion', 'loading', 'load', 'title', 'cantidad', 'tipo2',],
    components: {
        Loading
    },

}
</script>
<template>
    <div class="content-card">
        <h1 class="content-card-title">
            {{ loading ? 'Cargando' : this.$route.name == 'Search-id' ? load ? title : `Resultados En ${Direccion}`
            : this.$route.name == 'Anime-id'? load? 'No Tiene Animes Recomendados': title : this.$route.name == 'Manga-id'?
             load? "No Tiene Mangas Recomendados": title: title  }}

        </h1>
        <v-row>
            <template v-if="loading == true">
                <template v-for="(item, index) in cantidad">
                    <v-col class="col-card loading">
                        <Loading />
                    </v-col>
                </template>
            </template>
            <template v-if="loading == false">
                <template v-for="(item, index) in data">
                    <v-col v-if="index < cantidad" class="col-card">
                        <nuxt-link style="text-decoration: none;" :to='`/${Direccion}/${item.mal_id || item.entry.mal_id}`'>
                            <v-card class="card" elevation-19>
                                <img :alt="item.title || item.entry.title" class="card-image"
                                    :src="tipo2 ? item.entry.images.webp.large_image_url : item.images.webp.large_image_url" />
                                <div class="card-body">
                                    <v-card-title class="card-title" primary-title>
                                        {{ item.title || item.entry.title }}
                                    </v-card-title>
                                    <v-card-title class="card-year" primary-title>
                                        {{ item.year || '' }}
                                    </v-card-title>
                                    <v-card-title class="card-score" primary-title>
                                        <v-icon class="mr-2 mb-1" style="color: #ffcb0f;">mdi-star</v-icon> {{ item.score ||
                                            '' }}
                                    </v-card-title>
                                </div>
                            </v-card>
                        </nuxt-link>
                        <div v-if="item.status" style="display: flex; justify-content: space-between; margin-top: 10px;">
                            <div class="col-status">{{ item.status }}</div>
                            <div class="col-type">{{ item.type }}</div>
                        </div>
                    </v-col>
                </template>
            </template>
        </v-row>

    </div>
</template>
<style>
.loading {
    margin-bottom: 6rem !important;
}

.col-type {
    font-size: 0.4rem;
    height: 14px;
    display: flex;
    align-items: center;
    background-color: var(--color-blue);
    padding: 0 8px;
    border-radius: 4px;
}

.col-status {
    font-size: 0.4rem;
    height: 14px;
    display: flex;
    align-items: center;
    color: #fff;
    background-color: var(--color-negro);
    padding: 0 8px;
    border-radius: 4px;
}

.content-card-title {
    color: var(--color-negro);
    display: flex;
    align-items: center;
    font-size: 1rem;
    border-left: 5px solid var(--color-blue);
    padding-left: 1rem;
    margin-bottom: 1rem;
}

.col-card {
    margin-bottom: .8rem;
    max-width: 50% !important;
    height: 200px;
    flex-basis: auto !important;
}

.card {
    width: 100%;
    height: 100%;
}

.card-score {
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: 0.8rem;
    color: #ffcb0f;

}

.card-body {
    width: 100%;
    position: absolute;
    z-index: 1;
    height: 100%;
    opacity: 0;
}

.card:hover .card-body {
    border-radius: 4px;
    opacity: 1;
    display: flex;
    flex-direction: column;
    background-color: #000000b6;

}

.card-title {
    overflow: hidden;
    height: 40px;
    font-size: .6rem;
    padding-bottom: 0;
}

.card-year {
    padding-top: 0;
    font-size: .5rem;
}

.card-image {
    border-radius: 1rem;
    position: absolute;
    width: 100%;
    height: 100%;
}

.content-card {
    margin-top: 3rem;
}

@media(min-width:600px) {
    .loading {
        margin-bottom: 5rem !important;
    }

    .content-card-title {
        font-size: 1.2rem;
    }

    .card-title {
        font-size: .8rem;
    }

    .card-year {
        font-size: .7rem;
    }

    .card-score {
        font-size: 1rem;
    }

    .col-status {
        height: 20px;
        font-size: 0.6rem;
    }

    .col-type {
        height: 20px;
        font-size: 0.6rem;
    }

    .col-card {
        margin-top: .7rem;
        max-width: 33% !important;
        height: 210px;
    }

}

@media(min-width:960px) {
    .loading {
        margin-bottom: 4rem !important;
    }

    .content-card-title {
        font-size: 1.4rem;
    }

    .col-card {
        max-width: 25% !important;
        height: 230px;
    }
}

@media(min-width:1264px) {
    .loading {
        margin-bottom: 0rem !important;
    }

    .content-card-title {
        font-size: 1.5rem;
    }

    .card-title {
        font-size: .9rem;
    }

    .card-year {
        font-size: .8rem;
    }

    .card-score {
        font-size: 1.2rem;
    }

    .col-status {
        height: 22px;
        font-size: 0.7rem;
    }

    .col-type {
        height: 22px;
        font-size: 0.7rem;
    }

    .col-card {
        margin-bottom: 1rem;
        max-width: 20% !important;
        height: 280px;
    }
}

@media(min-width:1904px) {
    .content-card-title {
        font-size: 1.7rem;
    }

    .card-title {
        font-size: 1.2rem;
    }

    .card-year {
        margin-top: .5rem;
        font-size: 1.1rem;
    }

    .card-score {
        font-size: 1.5rem;
    }

    .col-status {
        height: 25px;
        font-size: 0.9rem;
    }

    .col-type {
        height: 25px;
        font-size: 0.9rem;
    }

    .col-card {
        margin-bottom: 1.3rem;
        height: 350px;
    }
}</style>