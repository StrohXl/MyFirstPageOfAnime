<template>
  <v-navigation-drawer v-model='drawer' :mini-variant="variant" color="#272727" fixed class="Navigation" permanent width="300px" right>
    <v-list style="position: fixed; width: 100% ; top:60px" nav>
 <template  v-for="(item, i) in items">
       <v-tooltip left v-model="variant? true: false">
         <template v-slot:activator="{ on, attrs }">
           <v-hover v-slot="{ hover }">
         <v-list-item :to="item.to" router exact v-bind="attrs" v-on="on" :key="i">
            <v-list-item-action  >
             
              <v-icon :class="`${hover ? 'blue--text' : ''}`">{{ item.icon }}</v-icon>
             </v-list-item-action>
             
             <v-list-item-content>
               <v-list-item-title :class="hover ? 'blue--text' : ''">{{ item.title }}</v-list-item-title>
             </v-list-item-content>
           </v-list-item>
      
         </v-hover>
         </template>
         <span>{{item.title}}</span>
  
        </v-tooltip>
 </template>

      <v-hover v-slot="{ hover }">
        <v-list-group :value="variant? false: ''">
          <template v-slot:activator>
            <v-list-item-action>
              <v-icon :class="`${hover ? 'blue--text' : ''}`">mdi-view-grid</v-icon>
            </v-list-item-action>
            <v-list-item-content>

              <v-list-item-title v-text="'Generos'" :class="hover ? 'blue--text' : ''"></v-list-item-title>
            </v-list-item-content>
          </template>

          <v-row style="width: 300px; height: 300px; overflow: auto; ">
            <v-col cols="6">
            <template v-for="(item, index) in generos" v-if="index < ((generos.length - 1) / 2)">
                <v-hover  v-slot="{ hover }">
                  <v-list-item :key="item.mal_id">
                    <v-list-item-content >
                      <v-list-item-title :class="hover ? 'blue--text' : ''">{{ item.name }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-hover>
            </template>
            </v-col>
            <v-col cols="6">
              <v-hover v-for="(item, index) in generos" v-slot="{ hover }">
                <template v-if="index > ((generos.length - 1) / 2)">
                  <v-list-item :key="item.mal_id">
                    <v-list-item-content>
                      <v-list-item-title :class="hover ? 'blue--text' : ''">{{ item.name }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </template>
              </v-hover>
            </v-col>
          </v-row>

        </v-list-group>
      </v-hover>

    </v-list>

  </v-navigation-drawer>
</template>
<script>
import axios from 'axios';
export default {
  name: 'NavigationDrawer',
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
    }
  },
  props: ['variant','listgroup'],
  async created() {
    const ostia = await axios.get("https://api.jikan.moe/v4/genres/anime");
    this.generos = ostia.data.data;
  },

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