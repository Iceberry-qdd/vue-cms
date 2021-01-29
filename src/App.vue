<template>
  <div class="app-container">
    <van-sticky>
      <van-nav-bar
        title="黑马程序员·Vue项目"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
    </van-sticky>

    <transition>
      <router-view />
    </transition>

    <van-tabbar v-model="active" route>
      <van-tabbar-item replace icon="wap-home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item replace icon="user-circle-o" to="/vip">会员</van-tabbar-item>
      <van-tabbar-item replace icon="cart-o" badge="5" to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item replace icon="search" to="/search">搜索</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Toast } from "vant";

export default {
  data() {
    return {
      active: 0,
    };
  },
  methods: {
    onClickLeft() {
      Toast("返回");
    },
    onClickRight() {
      Toast("按钮");
    },
  },
};
</script>

<style  scoped>
.app-container{
  overflow: hidden;
  padding-bottom: 50px;
}
.van-nav-bar {
  background-color: #1989fa;
}
h3 {
  font-size: 24px;
  text-align: center;
}
.v-enter {
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}
.v-leave-active,
.v-enter-active {
  transition: all 0.4s ease;
}
</style>
