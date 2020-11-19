<template>
  <ul class="paging" style="padding-inline-start:0px;">
    <li v-for="(page, idx) in totalPage" :key="idx" @click="movepage(page)" style="display:inline-block; padding : 5px;">{{page}}</li>
  </ul>
</template>

<script>
export default {
  props: ["totalPage"],
  data() {
    return {};
  },
  methods: {
    movepage(page) {
      this.$emit("movepage", page);
    }
  }
};
</script>