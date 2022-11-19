<template >
 <v-navigation-drawer  temporary v-model='variante' style="overflow: auto; " width="340px" fixed color="#272727" class="NavigationR" left >
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
         <Generos :variant="variante" :generos="geners" @activarGenerosPadre="activarGeneros" />
         <MiniTop class="mt-6" :top="miniTop" :cartaGeneros="variant? 'cartaGenerosActive':'cartaGeneros'" />
      </v-list>
 </v-navigation-drawer>
</template>
<script>
import Generos from './Generos.vue';
import MiniTop from './MiniTop.vue';
export default {
    name: "NavigationResponsive",
    data() {
        return {
            generos: [],
            variant: false,
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
    
            ],
        };
    },
    props: ["variante","geners", "miniTop"],
    components: { Generos, MiniTop },
    methods:{
      activarGeneros() {
      this.$emit('activarGenerosAbuelo')
    }
    }
}
</script>
<style >

</style>