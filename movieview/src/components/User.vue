<template>
  <div>
    <div v-for="(user, idx) in users" :key="idx" style="display:inline-block; margin:10px">
      <div v-if="user.id < 7">
        <h2 v-for="(col, index) in colors" :key="index">
          <h2 v-if="user.id === col.id" v-bind:style="{color:[col.color]}">
          <!-- v-bind:style="color.color">  -->
            {{ user.first_name }}
          </h2>
        </h2>
      </div>
      <div v-else>
        <h2 v-for="(col, index) in colors" :key="index">
          <h2 v-if="user.id-6 === col.id" v-bind:style="{color:[col.color]}">
          <!-- v-bind:style="color.color">  -->
            {{ user.first_name }}
          </h2>
        </h2>
        <!-- {{ user.first_name }} -->
      </div>
      <!-- <h2 v-bind:id=" user.id "> {{ user.first_name }}</h2> -->
      <h2>{{ user.last_name }}</h2>
      <img :src="'https://i.pinimg.com/474x/7d/56/56/7d5656879b5d6ed45779f89c4e89c91a.jpg'" style="width:100px; height:100px" alt />
      <h2>{{ user.email }}</h2>
    </div>
    <Paging :totalPage="totalPage" @movepage="movepage" />
  </div>
</template>

<script>
import axios from "axios";
import Paging from "./Paging";

export default {
  data() {
    return {
      users: null,
      colors : null,
      totalPage: null,
      pageNum: 1
    };
  },
  methods: {
    fetchData(pageNum) {
      console.log("User.vue Call fetchData() axios");
      axios
        .get("https://reqres.in/api/users?page=" + pageNum)
        .then(res => {
          this.users = res.data.data;
          this.totalPage = res.data.total_pages;
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    movepage(page) {
      console.log("User.vue Call movepage()");
      this.fetchData(page);
    }
  },
  created() {
    console.log("User.vue created()");
    
    axios
        .get("https://reqres.in/api/unknown")
        .then(res =>{
          this.colors = res.data.data;
          console.log(res.data);
          // alert(colors);
        this.fetchData(this.pageNum);
    });
  },
  components: {
    Paging
  }
};
</script>