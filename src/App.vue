<template>
  <div>
    <Avatar url="https://accounts.meister.co/assets/activation-mail-f78380cded6b7ac687ecd0f304c57deee21a21acb769dbb8abb6741a532ecfbd.svg"></Avatar>
    <Icon type="home"></Icon>
    <Pager :total="12344" :limit="10" :current="current" @pageChange="changePage($event)"/>
  </div>
</template>

<script>
import Avatar from "./components/Avatar";
import Icon from "./components/Icon";
import Pager from "./components/Pager";

export default {
  name: "App",
  components: {
    Avatar,
    Icon,
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
