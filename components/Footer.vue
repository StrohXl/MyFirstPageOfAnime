<template>
    <v-footer
      padless
    >
      <v-row
   
        justify="center"
        no-gutters
      >
        <v-btn
          v-for="link in links"
          :key="link.name"
          color="white"
          text
          rounded
          class="my-2"
          :to="link.to"
          router
          exact
        >
          {{ link.name }}
        </v-btn>
        <v-col
          class=" py-4 text-center white--text text-caption"
          cols="12"
        >
          {{ new Date().getFullYear() }} — <strong>VueAnime Created for Xavier Mayora</strong>
        </v-col>
      </v-row>
    </v-footer>
  </template>
<script>
export default {
    name: "Footer",
    data: () => ({
      links: [
        { name: "Inicio", to: "/"},
        { name: "Animes", to: "/Animes"},
        { name: "TopAnimes", to: "/Animes/TopAnimes/1"},
        { name: "Emision", to: "/Animes/seasons-now/1"},
        { name: "Mangas", to: "/Mangas"},
        { name: "TopMangas", to: "/Mangas/TopMangas/1"},
      ],
    }),
}
</script>
<style>

</style>