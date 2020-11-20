<template>
  <div id="app">
    Parent counter : {{ $store.state.counters }} <br>
    <button @click="addCounter">+</button>
    <button @click="subCounter">-</button>

    <!-- Child 컴포넌트를 등록하고 counters 데이터 속성을 props로 전달-->
    <!--<child v-bind:num="counters"></child>-->
    <child></child>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Child from "./Child.vue";

export default {
  components: {
    child : Child
  },
  /*data(){
    return{
      counters: 0
    };
  },*/
  methods: {
    // 이벤트 추가
    addCounter(){
      //this.counters++;
      this.$store.state.counters++;
    },
    subCounter(){
      //this.counters--;
      this.$store.state.counters--;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
