<script>
import Generos from './Generos.vue';
import MiniTop from './MiniTop.vue'
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
          to: "/Animes/page/1"
        },
        {
          icon: "mdi-star-settings-outline",
          title: "Top Animes",
          to: "/TopAnimes"
        },

      ],
    };
  },
  props: ["variant", "listgroup"],
  methods: {
    cambiarValue() {
      this.$emit("actualizarCambio");
    },
    activarGeneros() {
      this.$emit('activarGenerosAbuelo')
    }
  },
  components: { Generos, MiniTop },
}
</script>

<template>
  <v-navigation-drawer v-model='drawer' mini-variant-width="80" :mini-variant="variant" color="#272727" fixed
    class="Navigation" permanent  width="340px">
    <v-list style="position: fixed; width: 100% ; top:60px" nav>
      <template v-for="(item, i) in items">
        <v-tooltip right v-if="variant == true">
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
        <v-hover v-slot="{ hover }" v-if="variant == false">
          <v-list-item :to="item.to" router exact  :key="i" @click="cambiarValue">
            <v-list-item-action>
              <v-icon :class="`${hover ? 'blue--text' : ''}`">{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title :class="hover ? 'blue--text' : ''">{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-hover>
      </template>
      <MiniTop class="mt-6" :cartaGeneros="variant ? 'cartaGenerosActive' : 'cartaGeneros'" />
    </v-list>
  </v-navigation-drawer>
</template>

<style >
 .Navigation {
    display: none !important;
  }
@media (min-width:751px) {
  .Navigation {
    display: block !important;
    overflow: hidden;
    transition: none;
  }
  .Navigation:hover{
    overflow: auto;

  }
  .v-navigation-drawer__border{
    background-color: #00000000 !important;
  }
}
</style>