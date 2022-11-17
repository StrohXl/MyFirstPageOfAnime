<template>
        <v-row class="mb-0">
            <v-col>
                <Carousel class="mb-12" />
                <div class="d-flex justify-center titulo align-center">
                    <h1 class="tituloIntersectado">Animes Populares
                    </h1>
                </div>
                <ListaDeAnimes />
            </v-col>

        </v-row>

</template>
<script >

export default {
    name: "IndexPage"

}

</script>
<style>

.tituloIntersectado {
    color: black !important;
    font-size: 80px;
    font-family: 'Island Moments';
    padding-bottom: 0px;
}

.titulo {
    border: 4px solid var(--color-negro);
    height: 80px;
    background-color: var(--color-blanco-transparente);
}

</style>