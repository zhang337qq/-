<template>
  <div class="DetailBanner">
    <div class="swiper-container banner">
      <div class="film-bg">
        <div class="img" :style="{backgroundImage:'url('+bgImg+')'}"></div>
      </div>
      <div class="swiper-wrapper">
        <template v-for="(item,index) in filmInfo">
          <div class="swiper-slide" :key="index">
            <!--<router-link to="{name:'filmId',params:{filmId:item.filmId}}">-->
            <img :src="item.poster" alt />
            <!--</router-link>-->
          </div>
        </template>
      </div>
      <div class="triangle">
        <img src="@/assets/imgs/jiantou.png" alt />
      </div>
    
    </div>
  </div>
</template>

<script>
  // import { getCinemasList,getPlayDetail } from '@/api/films'
  
  import Swiper from 'swiper'
  export default {
    name: 'DetailBanner',
    data () {
      return {
        listIndex: 0,
        bannerIndex: 0,
        bgImg: ''
      }
    },
    watch: {
      listIndex: {
        handler (j) {
          // console.log(j);
          this.bannerIndex = j
          this.filmIndex()
        },
        deep: true,
        immediate: true
      }
    },
    props: {
      filmInfo: Array,
      filmList: Object
    },
    updated () {
      let that = this
      var swiper = new Swiper('.banner', {
        slidesPerView: 4,
        spaceBetween: 4,
        centeredSlides: true,
        slideToClickedSlide: true,
        loop: false,
        on: {
          // 初始化时调用一次
          init: function () {
            this.emit('transitionEnd')
            that.listIndex = this.activeIndex
            // console.log(this.activeIndex)
            // that.bgImg = that.filmInfo[this.activeIndex].poster
            that.filmIndex()
          },
          // 动画结束时调用一次
          transitionEnd: function () {
            // console.log(this.activeIndex)
            // that.listIndex = this.activeIndex
            that.filmIndex()
            that.listIndex = this.activeIndex
            document.querySelector(
              '.img'
            ).style.background = `url(${that.filmInfo[this.activeIndex].poster})`
          }
        }
      })
    },
    created () {},
    methods: {
      // 像父元素传递下标
      filmIndex () {
        this.$emit('bannerList', this.bannerIndex)
      }
    }
  }
</script>

<style scoped lang="scss">
  @import url("~@/assets/swiper/swiper.min.css");
  .swiper-container {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .film-bg {
    position: absolute;
    top: 0;
    height: 3.2rem;
    width: 100%;
    padding: 15px 0;
    overflow: hidden;
    .img {
      height: 3.2rem;
      width: 100%;
      filter: blur(30px);
      -webkit-filter: blur(30px);
    }
  }
  .swiper-wrapper {
    padding: 15px 0;
    a {
      width: 1.8rem !important;
      height: 2.6rem;
    }
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    transition: 300ms;
    transform: scale(0.8);
    width: 1.8rem !important;
    height: 2.6rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .swiper-slide-active,
  .swiper-slide-duplicate-active {
    transform: scale(1);
  }
  .triangle {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    img {
      width: 0.4rem;
      height: 0.2rem;
    }
  }
</style>
