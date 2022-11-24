<template>
        <v-row class="mb-0">
            <v-col>
                <Carousel class="mb-12" />
                <ListaDeAnimes />
                <ListaDeMangas/>
            </v-col>

        </v-row>

</template>
<script >
import ListaDeMangas from '../components/ListaDeMangas.vue';


export default {
    name: "IndexPage",
    components: { ListaDeMangas }
}

</script>
<style>

.tituloIntersectado {
    color: #000 !important;
    font-size: 80px;
    font-family: 'Island Moments';
    padding-bottom: 0px;

}

.titulo {
    border: 4px solid var(--color-negro);
    height: 80px;
    height: 100px;
    background-color: #fff;
}

</style>