<script>
export default {
    name: 'IdAnimeManga',
    props: ['anime', 'imagen']
}
</script>
<template>
    <div class="black--text containerId " height="600px">
        <v-row style="width: 100%;">
            <div class="col-content-image">
                <img :src='imagen' class="col-image" />
            </div>
            <div class="col-content-description">
                <v-card-title class="col-title">
                    {{ anime.title }}
                </v-card-title>
                <div>
                    <v-card-title class="d-flex justify-center">
                        Sinopsis
                    </v-card-title>
                </div>
                <div class="col-synopsis">
                    {{ anime.synopsis }}
                </div>
                <div class="col-data-info">
                    <div>
                        <ul>
                            <li class="mt-2">Year:</li>
                            <li class="mt-2">Episodes:</li>
                            <li class="mt-2">Genres:</li>
                            <li class="mt-2">Status:</li>
                            <li class="mt-2">Studios:</li>
                            <li class="mt-2">Type:</li>
                            <li class="mt-2">Puntuacion:</li>
                            <li class="mt-2">Demographics:</li>
                        </ul>
                    </div>
                    <div class="ml-16">
                        <ul>
                            <li class="valueLi mt-2">{{ anime.year }}</li>
                            <li class="valueLi mt-2">{{ anime.episodes }}</li>
                            <li class="valueLi mt-2 value-li-genres">
                                <template v-for="(item, index) in anime.genres">
                            
                                    <v-btn color="primary" small> {{ item.name }}</v-btn>
                            </template>
                            </li>
                            <li class="valueLi mt-2">{{ anime.status }}</li>
                            <li class="valueLi mt-2"><template v-for="(item, index) in anime.studios">{{ item.name
                            }}</template></li>
                            <li class="valueLi mt-2">{{ anime.type }}</li>
                            <li class="valueLi mt-2 value-li-genres">
                                <template v-for="(item, index) in anime.demographics">
                                    <div> {{ item.name }}</div>
                                </template>
                            </li>
                            <li class="valueLi mt-2">{{ anime.score }}</li>

                        </ul>
                    </div>
                </div>
            </div>

        </v-row>
        <v-card-title primary-title>
            Episodios
        </v-card-title>
    </div>
</template>
<style>
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
    width: 70%;
    margin: auto;
    margin-top: 2rem;
}

.col-content-description {
    width: 95%;
    margin: auto;
}

.col-synopsis {
    text-align: justify;
}

.col-data-info {
    display: flex;
    margin-top: 1rem;
    font-size: .7rem;
}

.col-title {
    text-align: center;
    display: flex;
    justify-content: center;
}

@media(min-width:900px) {
    .col-title {
        font-size: 2rem;

    }

    .col-content-image {
        height: 500px;
        width: 30%;
        margin-top: 0.5rem;

    }

    .col-data-info {
        font-size: 1rem;
        margin-left: 2rem;
    }

    .col-synopsis {
        margin-left: 2rem;
    }

    .col-content-description {
        width: 70%;
        margin: auto;

    }
}</style>