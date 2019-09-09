<template>
  <ul class="nav-bar">
    <li>
      <router-link to="/films">
        <img src="@/assets/imgs/films.png" />
        <span :style="{color:films}">电影</span>
      </router-link>
    </li>
    <li>
      <router-link to="/cinemas">
        <img src="@/assets/imgs/download.png" />
        <span :style="{color:cinemas}">影院</span>
      </router-link>
    </li>
    <li>
      <a href="https://m.maizuo.com/mz-act/active/ElzMZU125260">
        <img src="@/assets/imgs/news.png" />
        <span>资讯</span>
      </a>
    </li>
    <li>
      <router-link to="/center">
        <img src="@/assets/imgs/my.png" />
        <span :style="{color:center}">我的</span>
      </router-link>
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      films: "",
      cinemas: "",
      center: ""
    };
  },
  watch: {
    $route: {
      handler(fullPath) {
        // console.log(fullPath.path)
        if (fullPath.path === "/films/nowPlaying") {
          this.films = "#ff5f16";
          this.center = "";
          this.cinemas = "";
        } else if (fullPath.path === "/center") {
          this.center = "#ff5f16";
          this.films = "";
          this.cinemas = "";
        } else if (fullPath.path === "/cinemas") {
          this.cinemas = "#ff5f16";
          this.center = "";
          this.films = "";
        }
      },
      deep: true,
      immediate: true
    }
  }
};
</script>
<style scoped lang="scss">
.nav-bar {
  height: 0.98rem;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 100;
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 0.2rem;
  background-color: #fff;
  /*!important;*/
}
.nav-bar:before {
  content: " ";
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  height: 1px;
  border-top: 1px solid #ededed;
  color: #ededed;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
}
.nav-bar li {
  flex: 1;
  text-align: center;
  height: 0.98rem;
}
.nav-bar a {
  color: #797d82;
  display: block;
  height: 0.98rem;
  line-height: 0.56rem;
  width: 100%;
  position: relative;
  padding-top: 0.08rem;
  box-sizing: border-box;
}
.nav-bar img {
  width: 0.42rem;
  height: 0.42rem;
}
.nav-bar span {
  position: absolute;
  top: 0.5rem;
  left: 50%;
  transform: translateX(-50%);
}
</style>
