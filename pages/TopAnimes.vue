<template >
    <div>
        <div class="tituloTop bg-white">Top Animes</div>
    <v-content height="800" class="contentTop bg-white"></v-content>
    </div>
</template>
<script>
export default {
    name: "TopAnimes.vue"
}
</script>
<style >
    .tituloTop {  
    text-align: center;
    border: 4px solid var(--color-negro);
    color: var(--color-negro);
    font-size: 7rem;
    font-family: 'Island Moments';
}
.contentTop{

    border: 4px solid var(--color-negro);
    border-top: none;
}
  
</style>