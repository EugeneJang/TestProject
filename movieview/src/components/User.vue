<template>
  <div>
    <div v-for="(user, idx) in users" :key="idx" style="display:inline-block; margin:10px">
      <h2>{{user.first_name}}</h2>
      <img :src="'https://i.pinimg.com/474x/7d/56/56/7d5656879b5d6ed45779f89c4e89c91a.jpg'" style="width:100px; height:100px" alt />
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
      totalPage: null,
      pageNum: 1
    };
  },
  methods: {
    fetchData(pageNum) {
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
      this.fetchData(page);
    }
  },
  created() {
    this.fetchData(this.pageNum);
  },
  components: {
    Paging
  }
};
</script>