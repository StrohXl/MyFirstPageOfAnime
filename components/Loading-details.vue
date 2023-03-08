<script>
  export default {
    data: () => ({
      attrs: {
        class: 'mb-6',
        boilerplate: true,
        elevation: 2,
      },
    }),
  }
</script>

<template>
      <v-sheet class="pa-3 mt-16" color="grey lighten-5">
          <v-skeleton-loader     v-bind="attrs" color="grey lighten-1" type="article, actions"></v-skeleton-loader>
      </v-sheet>
</template>