<template>
  <ul class="paging" style="padding-inline-start:0px;">
    <button v-for="(page, idx) in totalPage" :key="idx" @click="movepage(page)" style="display:inline-block; padding : 5px; margin : 5px;">{{ page }}</button>
    <!--<li v-for="(page, idx) in totalPage" :key="idx" @click="movepage(page)" style="display:inline-block; padding : 5px;" v-on="mouseover: doMouseOver">{{page}}</li>-->
  </ul>
</template>

<script>
export default {
  props: ["totalPage"],
  data() {
    console.log("childe.vue Paging Data init");
    return {};
  },
  methods: {
    movepage(page) {
      console.log("childe.vue method movepage return");
      this.$emit("movepage", page);
    },
    doMouseOver:()=>{

    }
  }
};
</script>