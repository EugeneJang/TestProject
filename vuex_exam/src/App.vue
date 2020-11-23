<template>
  <div id="app">
    <!-- Parent counter : {{ this.$store.state.counters }} 1방식 -->
    <!-- Parent counter {{ parentCounter }} 2방식 -->
    Parent counter : {{ getCounter }} <!-- 3방식 -->
    <br>
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
import { mapGetters } from 'vuex';
import { mapMutations } from 'vuex';

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
    /*
    addCounter(){
      //this.counters++;
      //this.$store.state.counters++;
      this.$store.commit('addCounter');
    },*/
    /*
    subCounter(){
      //this.counters--;
      //this.$store.state.counters--;
      this.$store.commit('subCounter');
    },
    */
    // Vuex 의 Mutations 메서드 명과 App.vue 메서드 명이 동일할 때 [] 사용
    ...mapMutations([
      'addCounter',
      'subCounter'
    ])
      
    

  },
  // 3방식
  computed: mapGetters([
    'getCounter'
  ])
  /* 2방식 
  computed: mapGetters({
    parentCounter : 'getCounter'
  })
  */
  /*
  2방식
  computed:{
    parentCounter(){
      //return this.$store.state.counters;
      this.$store.getters.getCounter;
    }
  }*/
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
