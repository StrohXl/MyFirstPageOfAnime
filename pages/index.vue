<template>
    <div>
        <v-row class="mb-0  ">
            <v-col class=" ">
                <Carousel class="mb-12" />
                <div class="d-flex justify-center titulo align-center">
                    <h1 class="tituloIntersectado">Animes Populares
                    </h1>
                </div>
                <ListaDeAnimes />
            </v-col>
            <v-col cols="3" class="pl-0 colResponsive">
                <MiniTop />
            </v-col>
        </v-row>
    </div>
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