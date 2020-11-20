<template>
  <div>
      <br>
      Child counter : {{ $store.state.counters }} <br>
      <button @click="addCounter">+</button>
      <button @click="subCounter">-</button>
  </div>
</template>

<script>
export default {
    // 상위 컴포넌트에서 내려준 counter 속성을 num로 받음
    //props: ["num"]

    // Vuex를 활용하여 stroe 가 전역이 되었기 때문에 Child에서도 데이터 사용 가능 
    methods :{
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