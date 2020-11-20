<template>
  <div class="trailer_wrap">
      <iframe frameborder="0" allowfullscreen :src="trailerUrlPath"></iframe>
  </div>
</template>

<script>
export default {
    data(){
        return {
            trailerUrlPath : this.$store.state.movies[this.$route.params.id]
                .trailerPath
        };
    }
}
</script>

<style lang="scss" scoped>
.trailer_wrap {
  iframe {
    width: 100%;
    height: 500px;
  }
}
</style>