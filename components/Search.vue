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

        <v-form style="height: 60px; width: 100%;" class="formulario" v-on:submit.prevent="sendMessage">
            <v-text-field class="mt-2 formulario-text" color="white" dense rounded v-model="message" 
              single-line outlined clear-icon="mdi-close-circle" clearable placeholder="Buscar" type="text"
              @click:append="toggleMarker" @click:append-outer="sendMessage" @click:clear="clearMessage">
            </v-text-field>
              <v-btn text color="#272727" fab @click="sendMessage" :to="`/Search/` + message" router exact light><v-icon class="white--text">mdi-magnify</v-icon></v-btn>
          </v-form>

</template>

<style>


.formulario {
  display: none;
}

.header {
  padding: 0 !important;
}
.btn-search {
    min-width: 0px !important;
    width: 20px !important;

  }
@media(min-width:200px) and (max-width:500px) {
  .formulario-text{
    height: 20px !important;
  }
}

@media(min-width:700px) {
  .btn-search {

    display: none;
  }

  .formulario {
    display: flex;
  }
}
</style>