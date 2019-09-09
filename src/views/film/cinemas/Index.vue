<template>
  <!-- 从电影详情跳转过来的影院列表页 -->
  <div class="film-cinemas">
    <!-- 头部 -->
    <header>
      <span @click="$router.go(-1)" class="goBack">
        <img src="@/assets/imgs/back.png" />
      </span>
      <div class="title">
        <p>{{filmTitle}}</p>
      </div>
      <div class="search">
        <img src="@/assets/imgs/search.png" />
      </div>
    </header>
    <!-- 全城/最近去过 -->
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item v-model="value2" :options="option2" />
    </van-dropdown-menu>
    <!-- 日期导航 -->

    <van-tabs @click="changeDate" v-model="activeName">
      <van-tab
        v-for="(item,key) in showCinemas"
        :title="key | getPremiereAt('dmd')"
        :key="key"
        :name="key"
      >
        <div class="cinema-info" v-for="item in cinemasInfo" :key="item.cinemaId">
          <router-link :to="'/cinemas/'+item.cinemaId+'/film/'">
            <div class="left">
              <p>{{item.name}}</p>
              <i>{{item.address}}</i>
            </div>
            <div class="right">
              <p>
                ￥
                <span>{{item.lowPrice/100}}</span>起
              </p>
              <!-- {{item.Distance}} -->
              <i>{{item.Distance.toFixed(1)}}km</i>
            </div>
          </router-link>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import { getfilmdCinemas, getCinemasInfo } from "@/api/filmD-cinemas";
import { getFilmDetail } from "@/api/films";
import { get } from "http";
/**
 * {
 * 1567612800:[2481, 2480, 1040, 1896, 1036, 5064 ]
 * 1567612800:[2481, 2480, 1040, 1896, 1036, 5064 ]
 * 1567612800:[2481, 2480, 1040, 1896, 1036, 5064 ]
 * }
 */
export default {
  data() {
    return {
      activeName: "",
      value1: 0,
      value2: "a",
      option1: [
        { text: "全城", value: 0 },
        { text: "邛崃市", value: 1 },
        { text: "大邑县", value: 2 }
      ],
      option2: [
        { text: "最近去过", value: "a" },
        { text: "离我最近", value: "b" }
      ],
      showCinemas: {},
      cinemasInfo: [],
      defaultCinemas: "",
      filmTitle: ""
    };
  },
  created() {
    this.getfilmDInfo();
  },
  methods: {
    getfilmDInfo() {
      let id = this.$route.params.id;
      getFilmDetail(id).then(res => {
        if (res.status == 0) {
          // console.log(res);
          this.filmTitle = res.data.film.name;
        }
        this.getDetailCinemasId(id);
      });
    },
    getDetailCinemasId(id) {
      // console.log(id);
      getfilmdCinemas(id).then(res => {
        // console.log(res);
        if (res.status == 0) {
          let obj = {};
          res.data.showCinemas.forEach((item, index) => {
            // console.log(item);
            obj[item.showDate] = item.cinemaList;
          });
          // console.log(obj);
          this.showCinemas = obj;
          this.defaultCinemas = res.data.showCinemas[1].cinemaList.toString();
          // console.log(this.defaultCinemas);
          this.getInfo();
        }
      });
    },
    getInfo() {
      let id = this.$store.state.cityId;
      getCinemasInfo(id, this.defaultCinemas).then(res => {
        // console.log(res);
        if (res.status == 0) {
          // console.log(123);
          this.cinemasInfo = res.data.cinemas;
          // console.log(this.cinemasInfo);
        }
      });
    },
    changeDate(name, title) {
      // console.log(name, title);
      // console.log("前", this.defaultCinemas);
      this.defaultCinemas = this.showCinemas[name].toString();
      // console.log("后", this.defaultCinemas);
      this.getInfo();
    }
  }
};
</script>
<style lang="scss" scoped>
.film-cinemas {
  // 头部的样式
  header {
    height: 0.88rem;
    line-height: 0.88rem;
    font-size: 0.34rem;
    display: flex;
    justify-content: space-between;
    text-align: center;
    .goBack {
      width: 0.88rem;
      font-size: 0.75rem;
      line-height: 0.88rem;
      margin-left: 0.15rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .search {
      width: 1rem;
      img {
        width: 0.5rem;
        height: 0.5rem;
      }
    }
  }
  // 影院详情的页面
  .cinema-info {
    height: 1.5rem;
    padding: 0.3rem;
    box-sizing: border-box;
    font-size: 0.3rem;
    color: #2c3e50;
    div {
      float: left;
    }
    div.left {
      width: 5.5rem;
      p {
        color: #2c3e50 !important;
        width: 100%;
        margin-bottom: 0.1rem;
      }
      i {
        display: block;
        width: 90%;
        color: #797d82;
        font-size: 0.26rem;
        overflow: hidden;
        // text-overflow: ellipsis;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    div.right {
      text-align: right;
      p {
        color: #ff5f16;
        font-size: 0.23rem;
        span {
          font-size: 0.3rem;
        }
      }
      i {
        color: #797d82;
        font-size: 0.2rem;
      }
    }
  }
}
</style>
