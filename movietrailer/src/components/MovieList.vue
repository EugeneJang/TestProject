<template>
  <div class="colum">
      <div v-for="(movie, index) in movies" :key="index" class="movie_choice">
          <router-link :to="`/${movie.id}`" tag="li">
            <img :src="`${movie.smallImgSrc}`" width="200px" height="100px" alt />
          </router-link>
      </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    data(){
        return {};
    },
    computed: {
        ...mapState(["movies"])
    }

};
</script>

<style>

</style>