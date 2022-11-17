<template>
      <v-row>
        <v-col class="d-flex align-center"  >
          
          <v-toolbar-title class="blue--text text-h4 d-flex align-center ml-3">Vue
            <span class="white--text">Anime</span>
          </v-toolbar-title>
        </v-col>
        <v-col class="mr-16">
          <v-form style="height: 60px;">
            <v-text-field class="mt-5" color="white" dense rounded v-model="message" append-outer-icon="mdi-magnify"
              single-line outlined clear-icon="mdi-close-circle" clearable placeholder="Buscar" type="text"
              @click:append="toggleMarker" @click:append-outer="sendMessage" @click:clear="clearMessage"></v-text-field>

          </v-form>
        </v-col>
      </v-row>
</template>
<script>
import NavigationDrawer from './NavigationDrawer.vue';
export default {
  name: "Nav",
  data() {
    return {
   
      password: 'Password',
      show: false,
      message: '',
      iconIndex: 0,

    };
  },

  components: {
    NavigationDrawer
  },
  methods: {
    toggleMarker() {
      this.marker = !this.marker
    },
    sendMessage() {

      this.clearMessage()
    },
    clearMessage() {
      this.message = ''
    },
    changeIcon() {
      this.iconIndex === this.icons.length - 1
        ? this.iconIndex = 0
        : this.iconIndex++
    },
  },
}
</script>
<style >
.botones {
  color: #fff !important;
  font-size: 20px !important;
}

.botones:hover {

  background-color: var(--color-blue) !important;
}

.botonResponsive {
  display: none;
}
</style>