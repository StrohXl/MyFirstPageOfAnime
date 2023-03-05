<script>
export default {
  name: "Search",
  props: ['searchValue'],
  data() {
    return {
      message: '',
    };
  },

  methods: {
    toggleMarker() {
      this.marker = !this.marker
    },
    sendMessage() {
      this.$router.push('/Search/' + this.message)
      this.clearMessage()
    },
    clearMessage() {
      this.message = ''
    },
  },
}
</script>
<template lang="">
    <div>
        <v-form style="height: 60px; width: 100%;" class="formulario" v-on:submit.prevent="sendMessage">
            <v-text-field class="mt-2" color="white" dense rounded v-model="message" 
              single-line outlined clear-icon="mdi-close-circle" clearable placeholder="Buscar" type="text"
              @click:append="toggleMarker" @click:append-outer="sendMessage" @click:clear="clearMessage">
            </v-text-field>
              <v-btn text color="#272727" fab @click="sendMessage" :to="`/Search/` + message" router exact light><v-icon class="text-h4 white--text">mdi-magnify</v-icon></v-btn>
          </v-form>
    </div>
</template>

<style>
.formulario {
  display: flex;
  width: 400px !important;
}

@media(min-width:200px) {
  .formulario {
    display: none;
  }
}

@media(min-width:750px) {
  .formulario {
    display: flex;
  }
}
</style>