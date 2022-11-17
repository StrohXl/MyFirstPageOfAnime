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

        <v-hover v-slot="{ hover }">
          <v-list-group>
            <template v-slot:activator>
              <v-list-item-action>
                <v-icon :class="hover ? 'blue--text' : ''">mdi-view-grid</v-icon>
              </v-list-item-action>
              <v-list-item-content>

                <v-list-item-title v-text="'Generos'" :class="hover ? 'blue--text' : ''"></v-list-item-title>
              </v-list-item-content>
            </template>

            <v-row>
              <v-col v-for="(item, index) in generos" cols="6">
                <v-hover v-slot="{ hover }">
                  <v-list-item :key="item.mal_id">
                    <v-list-item-content v-if="index < ((generos.length - 1) / 2)">
                      <v-list-item-title :class="hover ? 'blue--text' : ''">{{ item.name }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-hover>
              </v-col>
              <v-col v-for="(item, index) in generos">
                <v-list-item :key="item.mal_id">

                  <v-list-item-content v-if="index > ((generos.length - 1) / 2)">
                    <v-list-item-title class="white--text" >{{ item.name }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

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
    name: 'NavigationResponsive',
    data(){
        return{
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
    props:['variante'],
    async created() {
    const ostia = await axios.get("https://api.jikan.moe/v4/genres/anime");
    this.generos = ostia.data.data;
  },
    
}
</script>
<style >

</style>