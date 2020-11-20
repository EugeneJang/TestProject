<template>
  <div id="app">
    <router-view />
    <MovieList />
  </div>
</template>

<script>
import MovieList from "@/components/MovieList";

export default {
  
  data(){
    return{};
  },
  components: {
    MovieList
  }
};
</script>

<style lang="scss">
html,
body {
  height: 100%;
  background: linear-gradient(to bottom right, #ff6b81, #8e44ad);
}
#app {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 1000px;
  box-shadow: 0 0 40px #333;

  .wrap {
    position: relative;
    padding: 150px 30px;
    background-color: rgba(0, 0, 0, 0.7);
    background-blend-mode: multiply;
    background-size: cover;
    max-height: 500px;
  }
  .colum {
    display: flex;
    padding: 15px 0;
    background: linear-gradient(to bottom right, rgb(255, 0, 191), purple);
    justify-content: space-around;
    text-align: center;

    .movie_choice {
      cursor: pointer;
    }
  }
}
</style>
