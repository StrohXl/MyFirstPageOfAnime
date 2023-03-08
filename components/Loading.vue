
<script>
  export default {
    inject: {
      theme: {
        default: { isDark: false },
      },
    },
  }
</script>

<template>
  <v-sheet class="pa-3" color="grey lighten-5">
    <v-skeleton-loader  type="card"></v-skeleton-loader>
  </v-sheet>
</template>

<style>
.v-skeleton-loader{
  height: 100% !important;
}
.v-sheet {
  border-radius: 4px;
}
.v-skeleton-loader__card{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100% !important;
}
</style>