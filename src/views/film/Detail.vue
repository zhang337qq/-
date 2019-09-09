<template>
  <div>
    <div class="container">
      <div class="film-detail">
        <!-- 电影详情的大图部分 -->
        <div class="film-poster">
          <img :src="filmInfo.poster" />
        </div>
        <!-- 顶部固定标题部分start -->
        <van-sticky @scroll="onScroll">
          <header class="header-title">
            <img src="@/assets/imgs/back.png" @click="$router.go(-1)" class="go-back" />
            <span class="header-title-center" v-show="isHid">{{filmInfo.name}}</span>
          </header>
        </van-sticky>
        <!-- 电影基本说明部分 -->
        <div class="film-base-desc">
          <h2>
            {{filmInfo.name}}
            <span class="is-3d">{{filmType.name}}</span>
            <span class="grade">
              <i>{{filmInfo.grade}}</i> 分
            </span>
          </h2>
          <p>{{filmInfo.category}}</p>
          <p>{{filmInfo.premiereAt | getPremiereAt('ymd')}}上映</p>
          <p>{{filmInfo.nation}} | {{filmInfo.runtime}}分钟</p>
          <div
            ref="synopsis"
            class="film-base-synopsis"
            :class="{hide:isHide}"
            @click="isHide=!isHide"
          >{{filmInfo.synopsis}}</div>
        </div>
        <!-- 电影演员相片 -->
        <div class="film-actors-desc">
          <div class="actors">
            <div class="actors-title-bar">
              <span class="actors-title-text">演职人员</span>
            </div>
            <div style="height:150px" class="row-scroll-wrapper actors-list swiper-container">
              <ul class="row-scroll-items-nav swiper-wrapper" v-if="filmInfo && filmInfo.actors">
                <li
                  class="row-scroll-item swiper-slide"
                  v-for="(item,index) in filmInfo.actors"
                  :key="index"
                >
                  <div class="actors-item">
                    <div class="lazy-img actors-img">
                      <div class="lazy-img-wrap">
                        <img :src="item.avatarAddress" class="target-img" />
                      </div>
                    </div>
                    <span class="actors-name">{{item.name}}</span>
                    <span class="actors-role">{{item.role}}</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- 电影剧照介绍 -->
        <div>
          <div class="film-photo-desc">剧照部分</div>
          <div class="film-pic swiper-containers">
            <ul class="swiper-wrapper">
              <li class="swiper-slide" v-for="(lis,index) in filmInfo.photos" :key="index">
                <img :src="lis" class="target-img" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 选座购票 -->
      <router-link :to="'/film/'+filmInfo.filmId+'/cinemas'">
        <div class="nav-bar">
          <a href class="go-shedule">选座购票</a>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import { getFilmDetail } from "@/api/films";

export default {
  updated() {
    // console.log(1)
    var swiper = new Swiper(".swiper-container", {
      slidesPerView: 3.6,
      spaceBetween: 15,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
    var swipers = new Swiper(".swiper-containers", {
      slidesPerView: 2.3,
      spaceBetween: 15,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
    // 在获取到div真实高度之前是不能加上hide类
    let obj = this.$refs.synopsis;
    if (obj.style.height) return;
    obj.style.height = obj.offsetHeight + "px";
    this.isHide = true;
  },
  watch: {
    $route: {
      handler(val) {
        this.getDetail(val.params.id);
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    getDetail(id) {
      // console.log(id);
      getFilmDetail(id).then(res => {
        // console.log(res);
        // console.log(2)
        if (res.status == 0) {
          this.filmInfo = res.data.film;
          this.filmType = res.data.film.filmType;
          // console.log(this.filmInfo);
        }
      });
    },
    onScroll(obj) {
      // console.log(obj.scrollTop, obj.isFixed);
      if (obj.scrollTop > 45) {
        obj.isFixed = !obj.isFixed;
      }
      this.isHid = obj.isFixed;
    }
  },
  data() {
    return {
      filmInfo: {},
      filmType: {},
      isHid: false,
      isHide: false
    };
  }
};
</script>
<style lang="scss" scoped>
@import url("~@/assets/swiper/swiper.min.css");
.film-detail {
  // height: 20rem;
  background: #f4f4f4;
}
/* 顶部标题固定部分 */
.header-title {
  position: fixed;
  top: 0;
  width: 100%;
  height: 0.88rem;
  line-height: 0.88rem;
  z-index: 9000;
  color: #191a1b;
  text-align: center;
  font-size: 0.34rem;
  transition: all 0.3s;
}
.header-title .go-back {
  width: 0.6rem;
  height: 0.6rem;
  position: absolute;
  left: 0.1rem;
  top: 0.1rem;
}
.header-title-center {
  display: block;
  background-color: #fff;
  width: 100%;
  height: 100%;
}
.film-detail-title {
  transition: all 0.3s ease;
  background-color: #fff;
  color: #191a1b;
}
.film-detail-title:after {
  display: block;
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
/* 电影详情中的大图 */
.film-poster {
  height: 4.2rem;
  width: 100%;
}
.film-poster img {
  width: 100%;
}
/* 电影详情中大图下文字说明 */
.film-base-desc {
  background: #fff;
  padding: 0.3rem;
  font-size: 0.26rem;
  color: #797d82;
  h2 {
    font-size: 0.36rem;
    color: #000000;
  }
}
.film-base-desc .is-3d {
  font-size: 0.18rem;
  color: #fff;
  background-color: #d2d6dc;
  height: 0.28rem;
  line-height: 0.28rem;
  padding: 0 2px;
  border-radius: 2px;
}
.film-base-desc .grade {
  color: #ffb232;
  font-size: 0.28rem;
  float: right;
  i {
    font-size: 0.56rem;
    font-style: italic;
  }
}
.film-base-synopsis {
  background: #c2c2c2;
  color: #f1f1f1;
  padding: 0.3rem;
  line-height: 1.8em;
  transition: all 0.5s ease;
}
.film-base-synopsis.hide {
  height: 0.6rem !important;
  overflow: hidden;
}
// 演职人员介绍
.film-actors-desc {
  .actors {
    box-sizing: border-box;
    margin-top: 0.2rem;
    background-color: #fff;
    font-size: 0.32rem;
    .actors-title-bar {
      width: 100%;
      padding: 0.3rem;
      box-sizing: border-box;
      span {
        font-size: 0.32rem;
        text-align: left;
        color: #191a1b;
      }
    }
    .actors-list {
      height: 2.8rem;
      background: rgb(255, 255, 255);
      overflow: hidden;
      ul {
        height: 2.54rem;
        li {
          .actors-item {
            .actors-img {
              margin: 0 auto;
              width: 1.7rem;
              height: 1.7rem;
              img {
                width: 1.7rem;
                height: 1.7rem;
              }
            }
            span {
              font-size: 0.24rem;
              display: block;
              text-align: center;
            }
          }
        }
      }
    }
  }
}
/*剧照部分*/
.film-photo-desc {
  padding: 0.3rem;
  box-sizing: border-box;
  font-size: 0.32rem;
  color: #191a1b;
  background-color: #fff;
}
.film-pic {
  overflow: hidden;
  margin-bottom: 1.2rem;
  ul {
    display: flex;
    align-items: center;
    li {
      img {
        width: 3rem;
      }
    }
  }
}
/* 选座购票固定区域 */
.nav-bar {
  height: 0.98rem;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 100;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #fff;
}
.go-shedule {
  display: block;
  height: 0.98rem;
  line-height: 0.98rem;
  text-align: center;
  width: 100%;
  background-color: #ff5f16;
  color: #fff;
  font-size: 0.32rem;
}
</style>
