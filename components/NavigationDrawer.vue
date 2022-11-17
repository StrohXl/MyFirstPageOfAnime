<template>
  <v-navigation-drawer v-model='drawer' :mini-variant="variant" color="#272727" fixed class="Navigation" permanent
    width="300px" right>
    <v-list style="position: fixed; width: 100% ; top:60px" nav>
      <template v-for="(item, i) in items">
        <v-tooltip left>
          <template v-slot:activator="{ on, attrs }">
            <v-hover v-slot="{ hover }">
              <v-list-item :to="item.to" router exact v-bind="attrs" v-on="on" :key="i" @click="cambiarValue">
                <v-list-item-action>
                  <v-icon :class="`${hover ? 'blue--text' : ''}`">{{ item.icon }}</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title :class="hover ? 'blue--text' : ''">{{ item.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-hover>
          </template>
          <span>{{ item.title }}</span>
        </v-tooltip>
      </template>
      
          <Generos :variant="variant" :generos="geners" @activarGenerosPadre="activarGeneros" />
     
    </v-list>
  </v-navigation-drawer>
</template>
<script>
import axios from 'axios';
import Generos from './Generos.vue';
export default {
  name: "NavigationDrawer",
  data() {
    return {
      epale: true,
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
  props: ["variant", "listgroup",'geners'],
  methods: {
    cambiarValue() {
      this.$emit("actualizarCambio");
    },
    activarGeneros() {
      this.$emit('activarGenerosAbuelo')
    }
  },
  components: { Generos },
}
</script>
<style >
.Navigation {
  display: none !important;
}

@media (min-width:751px) {
  .Navigation {
    display: block !important;
  }
}
</style>