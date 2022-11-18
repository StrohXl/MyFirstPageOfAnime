<template lang="">
    <div>
        <v-form style="height: 60px; width: 100%;" :class="`formulario ${searchValue?' formularioResponsive': ''}`">
            <v-text-field class="mt-2" color="white" dense rounded v-model="message" 
              single-line outlined clear-icon="mdi-close-circle" clearable placeholder="Buscar" type="text"
              @click:append="toggleMarker" @click:append-outer="sendMessage" @click:clear="clearMessage">
            </v-text-field>
              <v-btn text color="#272727" fab @click="sendMessage" :to="`/Search/` + message" router exact light><v-icon class="text-h4 white--text">mdi-magnify</v-icon></v-btn>
          </v-form>
    </div>
</template>
<script>
export default {
  name: "Search",
  data() {
    return {
      message: '',
    };
  },
  props:['searchValue'],

  methods: {
    toggleMarker() {
      this.marker = !this.marker
    },
    sendMessage() {
      
      console.log(this.message)
      this.clearMessage()
    },
    clearMessage() {
      this.message = ''
    },
  },
}
</script>
<style>
    .formulario{
        display: flex;
    }
    .formularioResponsive{
        top: 0;
        right: 0;
        width: 350px !important;
        position: absolute;
    }
</style>