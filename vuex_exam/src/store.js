import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({

    // counter 라는 state int형 속성을 추가
    state: {
        counters : 0
    }
})