//import Axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({

    // counter 라는 state int형 속성을 추가
    state: {
        counters : 0
    },
    getters: {
        getCounter : function (state){
            return state.counters;
        }
    },
    mutations: {
        addCounter : function (state){
            return state.counters++;
        },
        subCounter : function(state){
            return state.counters--;
        },
        counterChild : function (state,payload){
            console.log("payload = ",payload);
            console.log("payload.name = ",payload.name);
            state.counters += payload.value;
            //state.counters = payload;
        }
    },
    // HTTP get 요청이나 setTimeout 과 같은 비동기 로직들은 actions에 선언
    /*actions: {
        getServerData : function(context){
            return axios.get("sample.json").then(function(){

            });
        },
        delayFewMinutes: function(context){
            return setTimeout(function (){
                commit('addCounter');
            },1000);
        },


        addCounter: function(context){
            // commit의 대상인 addCounter는 mutations의 메서드를 의미
            return context.commit('addCounter');
        }
    }*/
});