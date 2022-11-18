<template>
      <v-row>
        <v-col class="d-flex align-center"  >
          
          <v-toolbar-title class="tituloNav">Vue
            <span class="white--text">Anime</span>
          </v-toolbar-title>
        </v-col>
        <v-col class="mr-16">
        <Search :searchValue='value'/>
        </v-col>
   
      </v-row>
</template>
<script>
import Search from './Search.vue';
import NavigationDrawer from './NavigationDrawer.vue';
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
  mounted(){
    window.addEventListener('resize', this.CheckScreen);
     this.CheckScreen();
  },


  components: {
    NavigationDrawer,
    Search
  },
  methods: {
    CheckScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.value = true;
        return;
      }
      else{
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
<style >
.tituloNav{
  color: var(--color-blue);
  font-size: 35px;
  display: flex;
  margin-left: 15px;
}
@media (min-width:350px)and (max-width:750px){
  .tituloNav{
    display: none !important;
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