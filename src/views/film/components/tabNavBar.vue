<template>
  <div>
    <div class="tab-bar-wrap">
      <ul class="tab-bar-nav">
        <li>
          <router-link to="/films/nowPlaying">正在热映</router-link>
        </li>
        <li>
          <router-link to="/films/comingSoon">即将上映</router-link>
        </li>
      </ul>
      <div class="tab-bar-line-wrap" :style="{transform:'translate3d('+tbPercent+'%, 0px, 0px)'}">
        <span class="tab-bar-line"></span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      tbPercent: 0
    };
  },
  watch: {
    $route: {
      handler(newVal) {
        // console.log("路由变化了", newVal);
        this.tbPercent = newVal.path === "/films/comingSoon" ? 100 : 0;
        // console.log(this.tbPercent);
      },
      deep: true,
      immediate: true
    }
  }
};
</script>
<style scoped>
.tab-bar-wrap {
  height: 0.88rem;
  background: #fff;
  width: 100%;
  font-size: 0.28rem;
  position: relative;
  z-index: 199;
}
.tab-bar-wrap:after {
  content: " ";
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: 1px;
  border-bottom: 1px solid #ededed;
  color: #ededed;
  -webkit-transform-origin: 0 100%;
  -ms-transform-origin: 0 100%;
  transform-origin: 0 100%;
  -webkit-transform: scaleY(0.5);
  -ms-transform: scaleY(0.5);
  transform: scaleY(0.5);
}
.tab-bar {
  position: fixed;
  top: 0.98rem;
}
.tab-bar-nav {
  display: flex;
  flex-direction: row;
  background-color: #fff;
}
.tab-bar-nav li {
  flex: 1;
  text-align: center;
}
.tab-bar-nav a {
  display: block;
  line-height: 0.88rem;
  color: #191a1b;
}
.tab-bar-nav a.active {
  color: #ff5f16;
}
.tab-bar-line-wrap {
  position: absolute;
  bottom: 0;
  width: 50%;
  z-index: 200;
  left: 0;
  transition: transform 0.2s;
  transform: translate3d(0%, 0px, 0px);
}
.tab-bar-line {
  border-bottom: 2px solid #ff5f16;
  border-radius: 20px;
  display: block;
  margin: auto;
  width: 1.12rem;
}
</style>
