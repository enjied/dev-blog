<template>
    <div>
      <Icon type="home"></Icon>
      <Pager :total="12344" :limit="10" :current="current" @pageChange="changePage($event)"/>
    </div>
  </template>
  
  <script>
  import Pager from "./";
  
  export default {
    components: {
      Pager
    },
    data() {
      return {
        current: 50
      }
    },
    methods: {
      changePage(n) {
        console.log(n);
        this.current = n
      }
    },
  }
  </script>
  
  <style lang="less" scoped>
  .iconfont {
    font-size: 66px;
    color: red;
  }
  </style>
  