<template >
 <v-navigation-drawer  temporary v-model='variante' fixed color="#272727" class="NavigationR" right >
      <v-list style="top: 60px; position: fixed;width: 100%;">
        <v-hover v-slot="{ hover }" v-for="(item, i) in items" :key="i">
          <v-list-item :to="item.to" router exact>
            <v-list-item-action >
              <v-icon :class="hover ? 'blue--text' : ''">{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title :class="hover ? 'blue--text' : ''">{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-hover>
         <Generos :variant="variante" :generos="geners"  />
      </v-list>
 </v-navigation-drawer>
</template>
<script>
import Generos from './Generos.vue';
export default {
    name: "NavigationResponsive",
    data() {
        return {
            generos: [],
            drawer: true,
            items: [
                {
                    icon: "mdi-home",
                    title: "Inicio",
                    to: "/"
                },
                {
                    icon: "mdi-step-forward",
                    title: "Animes",
                    to: "/Animes"
                },
                {
                    icon: "mdi-star-settings-outline",
                    title: "Top Animes",
                    to: "/TopAnimes"
                },
                {
                    icon: "mdi-access-point",
                    title: "Emision",
                    to: "/Emision"
                }
            ],
        };
    },
    props: ["variante","geners"],
    components: { Generos }
}
</script>
<style >

</style>