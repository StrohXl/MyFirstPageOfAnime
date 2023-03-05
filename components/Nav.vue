<script>
import Search from './Search.vue';
export default {
  name: "Nav",
  data() {
    return {
      password: 'Password',
      show: false,
      message: '',
      iconIndex: 0,
      value: true,

    };
  },
  mounted() {
    window.addEventListener('resize', this.CheckScreen);
    this.CheckScreen();
  },

  components: {
    Search
  },
  methods: {
    CheckScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.value = true;
        return;
      }
      else {
        this.value = false;
        return;
      }
    },
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
    changeIcon() {
      this.iconIndex === this.icons.length - 1
        ? this.iconIndex = 0
        : this.iconIndex++
    },
  },
}
</script>

<template>
  <v-row>
    <v-col class="d-flex align-center">

      <v-toolbar-title class="tituloNav">VUE
        <span class="white--text">ANIME</span>
      </v-toolbar-title>
    </v-col>
    <v-col class=" d-flex justify-end">
      <Search :searchValue='value' />
    </v-col>

  </v-row>
</template>

<style >

.tituloNav {
  font-weight: bold;
  color: var(--color-blue);
  font-size: 20px;
  display: flex;
  margin-left: 15px;
}
@media(min-width: 600px){
  .tituloNav{
    font-size: 25px;
  }
}
@media (min-width: 1264px) {
  .tituloNav{
    font-size: 30px;
  }
}

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