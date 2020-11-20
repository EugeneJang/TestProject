import Vue from 'vue'
import App from './App.vue'

// store.js를 불러오는 코드
import { store } from "./store";

//Vue.config.productionTip = false

new Vue({
  el: "#app",
  // 뷰 인스턴스의 store 속성에 연결
  store: store,
  render: h => h(App)
});
//.$mount('#app')
