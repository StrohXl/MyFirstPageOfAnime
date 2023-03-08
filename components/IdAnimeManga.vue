<script>
import axios from 'axios'
export default {
    name: 'IdAnimeManga',
    data() {
        return {
            anime: [],
            imagen: '',
            imagenBack: '',
            id: ''
        }
    },
    props: ['direccion', 'Genres'],
    methods: {
        async LoadData() {
            const anime = await axios.get(`https://api.jikan.moe/v4/${this.direccion}/` + this.$route.params.id)
            this.anime = anime.data.data
            console.log(anime.data.data)
            this.id = this.$route.params.id
            this.imagen = anime.data.data.images.jpg.large_image_url
            this.imagenBack = anime.data.data.images.jpg.large_image_url
        }
    },
    mounted() {
        this.LoadData()
    },

}
</script>
<template>
    <div class="black--text containerId ">
        <div style="width: 100%; display: flex; flex-wrap: wrap; position: relative; z-index: 0;">
            <div class="col-content-image">
                <img :src='imagen' class="col-image" />
            </div>
            <div class="content-back-image">
                <img class="content-image" :src="imagen" />
                <div class="background"></div>
            </div>
            <div class="col-content-description">
                <v-card-title class="col-title">
                    {{ anime.title }}
                </v-card-title>
                <div class="info1 mt-2">
                    <span>
                        {{ anime.year }}
                    </span>
                    |
                    <span class="info-genres">
                        <template v-for="(item, index) in anime.genres">

                            <nuxtLink :to="`/${Genres}/genres/${item.mal_id}`">
                                <v-btn color="primary" small> {{ item.name }}</v-btn>
                            </nuxtLink>
                        </template>
                    </span>
                    |
                    <div>
                        {{ anime.type }}
                    </div>

                    |
                    <div v-if="anime.episodes">
                        Episodes {{ anime.episodes }}
                    </div>

                </div>
                <div class="col-score">
                    <v-icon class="mt-2 mb-3" style="color: #ffcb0f;">mdi-star</v-icon> {{ anime.score }}
                </div>
                <div class=" mt-3">
                    {{ anime.status }}
                </div>
                <div class="col-synopsis">
                    {{ anime.synopsis }}
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.content-back-image {
    top: -1rem;
    left: -0.75rem;
    position: absolute;
    z-index: -1;
    width: 100vw;
    height: 100%;
}


.info1 {
    font-weight: 300;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 0.5rem;
}

.col-score {
    margin-top: 1rem;
    gap: 5px;
    display: flex;
    align-items: center;
}

.info-genres {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.content-image {
    width: 100%;
    height: 100%;

}

.background {
    top: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #000000c4;
}

.col-image {
    height: 100% !important;
    width: 100% !important;

}

.value-li-genres {
    display: flex !important;
    flex-wrap: wrap;
    gap: 10px !important;
}

.col-content-image {
    height: 400px;
    width: 80%;
    margin: auto;
    margin-top: 2rem;
}

.col-content-description {
    position: relative;
    z-index: 100;
    color: #fff;
    width: 95%;
    margin: auto;
}

.col-synopsis {
    padding-bottom: 5rem;
    font-size: .8rem;
    font-weight: 300;
    margin-top: 1rem;
    text-align: justify;
}

.col-title {
    text-align: center;
    font-size: 1.2rem;
    font-weight: 600;
}

@media(min-width:750px) {
    .col-title {

        font-size: 1.5rem;
    }

    .col-content-image {
        height: 380px;
        width: 35%;
    }

    .info1 {
        align-items: center;

    }

    .col-data-info {
        font-size: 1rem;
        margin-left: 2rem;
    }

    .col-content-description {
        width: 60%;
        padding: 0 1rem 0;

    }
}

@media(min-width:1250px) {
    .col-title {
        padding-left: 0 !important;
        margin-top: 1rem;
        font-size: 1.8rem;
    }
    .col-score{
        font-size: 1.5rem ;
    }
    .col-status{
        font-weight: 300;
    }
    .col-content-image {
        margin-bottom: 3rem;
        height: 380px;
        width: 25%;
    }

    .col-content-description {
        width: 70%;
        padding: 0 1rem 0;
    }
    .col-synopsis {
        font-size: 1rem;

    }
}

@media(min-width:1600px) {
    .col-title {
        padding-left: 0 !important;
        text-align: start;
        margin-top: 2rem;
        font-size: 3rem;
    }
    .info1 span{
        font-size: 1rem !important;
    }
    .col-content-image {
        height: 500px;
        width: 25%;
    }

    .col-synopsis {

        font-size: 1.3rem;
    }

    .col-content-description {
        width: 70%;
        padding: 0 1rem 0 !important;
    }
}</style>
