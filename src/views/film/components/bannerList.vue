<template>
  <div class="banner-wrap">
    <!-- 显示在banner之上的城市选项 -->
    <router-link to="/City">
      <div class="fixed-city">
        <span>
          <i>{{$store.state.cityName}}</i>
          <img src="@/assets/imgs/down-arrow.png" />
        </span>
      </div>
    </router-link>
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in list" :key="item.bannerId">
        <img :src="item.imgUrl" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
import { getBanner } from "@/api/films";
export default {
  data() {
    return {
      list: []
    };
  },
  created() {
    this.getBannerList();
  },
  methods: {
    getBannerList() {
      getBanner().then(res => {
        if (res.status == 0) {
          this.list = res.data;
          // console.log(this.list);
        }
      });
    }
  }
};
</script>
<style scoped>
.fixed-city {
  position: absolute;
  top: 0.36rem;
  left: 0.14rem;
  color: #fff;
  padding: 0 0.1rem;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  height: 0.6rem;
  line-height: 0.6rem;
  font-size: 0.26rem;
  z-index: 300;
}

.fixed-city span img {
  width: 0.2rem;
  margin-left: 0.1rem;
}

.banner-wrap {
  height: 4.2rem;
  background-color: #ccc;
}

.banner-wrap img {
  width: 100%;
}
</style>
