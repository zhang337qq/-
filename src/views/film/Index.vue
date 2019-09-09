<template>
  <div>
    <!-- 首页的轮播图 -->
    <hz-banner-list></hz-banner-list>
    <van-sticky @scroll="onScroll">
      <hz-header-nav-bar v-show="isShowHeader"></hz-header-nav-bar>
    </van-sticky>
    <van-sticky @scroll="onScroll" :offset-top="49">
      <hz-tab-nav-bar></hz-tab-nav-bar>
    </van-sticky>
    <router-view />
  </div>
</template>
<script>
import HzBannerList from "@/views/film/components/bannerList";
import HzHeaderNavBar from "@/views/film/components/headerNavBar";
import HzTabNavBar from "@/views/film/components/tabNavBar";
export default {
  components: {
    HzBannerList,
    HzHeaderNavBar,
    HzTabNavBar
  },
  data() {
    return {
      isShowHeader: false
    };
  },
  methods: {
    onScroll(obj) {
      this.isShowHeader = obj.isFixed;
    }
  }
};
</script>
