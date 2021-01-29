<template>
  <div>
      <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, i) in lunbotu" :key="i">
        <img :src="item.img" alt="" />
      </van-swipe-item>
    </van-swipe>
    <!-- 九宫格 -->
    <van-grid :column-num="3" square clickable :border="false">
        <van-grid-item icon="newspaper-o" text="新闻资讯" to="/home/newslist" />
        <van-grid-item icon="photo-o" text="图片分享" />
        <van-grid-item icon="cart-circle-o" text="商品购买" />
        <van-grid-item icon="comment-o" text="留言反馈" />
        <van-grid-item icon="video-o" text="视频专区" />
        <van-grid-item icon="friends-o" text="联系我们" />
    </van-grid>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lunbotu: [],
    };
  },
  created() {
    this.getlunbotu();
  },
  methods: {
    async getlunbotu() {
      const { data } = await this.$http.get("/api/getlunbo");
      if (data.status === 0) {
        this.lunbotu = data.message;
      }
      //console.log(data)
    },
  },
};
</script>

<style scoped>
/* .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center; 
  background-color: #39a9ed;
} */
.van-swipe-item img {
  width: 100%;
  height: 100%;
}
</style>