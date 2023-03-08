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
      this.message.length == 0 ? '' :
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

        <v-form style="height: 60px;" class="formulario" v-on:submit.prevent="sendMessage">
            <v-text-field  class="mt-2 formulario-text" color="white" dense rounded v-model="message" 
              single-line outlined clear-icon="mdi-close-circle" clearable placeholder="Buscar Anime..." type="text"
              @click:append="toggleMarker" @click:append-outer="sendMessage" @click:clear="clearMessage">
            </v-text-field>
              <v-btn class='buscar-responsive' text color="#272727" fab @click="sendMessage"  light><v-icon class="white--text">mdi-magnify</v-icon></v-btn>
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
  .buscar-responsive{
    margin-top: .2rem;
  }
  .v-input__slot{
    margin-top: .5rem !important;
  }
.v-input__icon--clear{
  padding-bottom: 12px !important;
}
  fieldset {
    height: 35px !important;
  }

  .v-text-field__slot {
    height: 35px !important;
  }

  .formulario {
    width: 100% !important;
  }
}

@media(min-width:550px) {
  .formulario {
    width: 300px !important;
  }

  .btn-search {

    display: none;
  }

  .formulario {
    display: flex;
  }
}
@media(min-width:1200px) {
  .formulario {
    width: 400px !important;
  }}
</style>