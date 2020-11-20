<template>
    <div 
        :style="{ 'background-image' : selectedMovie.largeImgSrc }" 
        :class="[{ 'favorite' : selectedMovie.favorite }, 'wrap']"
    >
        <header class="nav">
            <router-link to="/" class="btn_home">Home</router-link>
            <strong>VUECHA PLAY</strong>
        </header>
        <div class="desc">
            <h1>{{ selectedMovie.title }}</h1>
            <ul class="sub_title">
                <li>{{ selectedMovie.duration }}</li>
                <li>{{ selectedMovie.genre }}</li>
                <li>{{ selectedMovie.releaseDate }}</li>
            </ul>
            <p>{{ selectedMovie.description }}</p>
        </div>
        <div class="link">
            <router-link
                :to="{path : '/' + $route.params.id + '/trailer' }"
                tag="button"
                class="btn_play"
            >Play</router-link>
            <button class="btn_favorite" @click="addFavorite(selectedMovie)">
                <span v-show="!selectedMovie.favorite">Add to</span>
                <span v-show="selectedMovie.favorite">Remove from</span>
                Favorite
            </button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            selectedMovie: this.$store.state.movies[this.$route.params.id]
        };
    },
    watch: {
        $route(){
            this.selectMovie();
        }
    },
    methods: {
        selectMovie(){
            this.$set(
                this.data,
                "selectedMovie",
                this.$store.state.movies[this.$route.params.id]
            );
        },
        addFavorite(selectedMovie){
            console.log(selectedMovie);
            this.$store.state.movies[this.$route.params.id].favorite = !this.$store
                .state.movies[this.$route.params.id].favorite;
        }
    }
}
</script>


<style lang="scss" scoped>
.favorite {
  box-shadow: 0 -15px 50px gold;
}
.nav {
  display: flex;
  position: absolute;
  left: 0;
  top: 0;
  padding: 0 30px;
  width: 100%;
  height: 50px;
  align-items: center;

  .btn_home {
    font-size: 20px;
    color: #fff;
    font-weight: bold;
  }
  strong {
    margin-left: auto;
    font-size: 20px;
    color: #fc038c;
    font-weight: bold;
  }
}
.desc {
  h1 {
    font-size: 50px;
    color: #fff;
    font-weight: bold;
  }
  .sub_title {
    display: flex;
    padding: 15px 0;

    li {
      padding-right: 6px;
      font-size: 15px;
      color: #fc038c;
    }
  }
  p {
    width: 60%;
    font-size: 18px;
    color: #fff;
    line-height: 1.4;
  }
}
.btn_play {
  margin: 30px 0 0;
  width: 150px;
  height: 50px;
  background: #fc038c;
  border-radius: 15px;
  font-size: 15px;
  color: #fff;
  letter-spacing: 2px;
  box-shadow: 0 0 10px #fc038c;
}
.btn_favorite {
  margin-left: 20px;
  padding: 0 15px;
  width: auto;
  height: 50px;
  border: 1px solid #fff;
  border-radius: 15px;
  font-size: 15px;
  color: #fff;
}
</style>