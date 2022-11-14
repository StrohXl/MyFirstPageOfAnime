<template>

    <v-app >
      <Nav/>
      <v-main >
        <div class="mt-16 pt-9  mx-8">
          <Nuxt />
        </div>
      </v-main>
      <Footer/>
    </v-app>

</template>
<script>
export default {
  name: 'DefaultLayout',

  data() {
    return {
    }
  },
}
</script>
<style>
:root {
  --color-blue: #2196F3;
  --color-negro: rgb(41, 41, 41);
  --color-negro-transparente: rgba(41, 41, 41, 0.671);
  --color-gris: rgb(80, 80, 80);
  --color-blanco-transparente: rgba(255, 255, 255, 0.774);
}
.v-main__wrap{
  background-image: url(../static/978587.png);
  background-size: 100% 680px;
  background-attachment: fixed;

}
.v-main{
  height: 100% !important;
}

@media (min-width:350px) and (max-width:650px) {
  .botonResponsive {
    display: flex !important;
  }
  .botones{
    display: none;
  }
  .colResponsive{
    display: none;
  }
}
</style>
