<template>
  <div class="main">
    <div class="cinema-search">
      <div class="cinema-search-input">
        <div class="input-wrap onFocus">
          <img src="@//assets/imgs/search.png" />
          <form action=".">
            <input type="text" v-model="searchContent" placeholder="请输入影城名字" class="search-input" autocomplete="off" />
          </form>
        </div>
        <div class="cancle-btn" @click="$router.go(-1)">取消</div>
      </div>
      
      <div class="cinema-init-area" v-show='searchContent.length==0'>
        <div class="cinema-nearby init-list">
          <div class="cinema-index-title">离你最近</div>
            <ul class="cinema-index-detail">
              <template v-for="(item,index) in zuijin_list">
                <router-link :to="{name:'CinemasDetail',params:{cinemaId:item.cinemaId}}" :key="index">
                  <li class="cinema-item-detail">{{item.name}}</li>
                </router-link>
              </template>
            </ul>
        </div>
      </div>
      <div class="cinema-list-wrap" v-show='searchContent.length!=0'>
        <ul class="cinema-list">
          <cinemas-list v-for="(item,index) in filter_list" :key="index" :item="item"></cinemas-list>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  // getAddressList1 是显示最近
  //getAddressList  全局搜索
  import { getAddressList,getAddressList1 } from "@/api/films";
  import CinemasList from './components/CinemasList'
  export default {
    props: {
      item: Object,
      type: {
        type: Number,
        default: 1
      }
    },
    data() {
      return {
        list: [],
        zuijin_list:[],
        searchContent:'',
        filter_list:[],      //当前筛选后的列表
      };
    },
    created() {
      getAddressList1(this.$store.state.cityId).then(res => {
        this.zuijin_list = res.data.cinemas;
      });
      getAddressList(this.$store.state.cityId).then(rfilter_listes => {
        this.list = res.data.cinemas;
      });
    },
    methods: {
      filterList(keyword){   //本地筛选列表
        this.filter_list = this.list.filter((item)=>{
          return item.name.includes(keyword)
        })
      }
    },
    watch:{
      searchContent(){
        this.filterList(this.searchContent);
      }
    },
    components:{
      CinemasList
    }
  }
</script>

<style scoped>
  .main {
    width: 100%;
    font-size: 0.28rem;
  }
  .main .cinema-search .cinema-search-input {
    height: 0.98rem;
    width: 6.9rem;
    padding: 0.19rem 0.3rem;
    background-color: #fff;
    position: relative;
    font-size: 0.2rem;
  }
  .main .cinema-search .cinema-search-input:after {
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
  .cinema-search .cinema-search-input .input-wrap {
    height: 0.6rem;
    width: 6rem;
    border-radius: 0.06rem;
    background-color: #f4f4f4;
    float: left;
  }
  .cinema-search .cinema-search-input .input-wrap img {
    width: 0.24rem;
    height: 0.24rem;
    margin-left: 0.3rem;
    padding-top: 0.16rem;
  }
  .cinema-search .cinema-search-input .input-wrap input {
    float: left;
    margin-left: 0.8rem;
    margin-top: -0.43rem;
    height: 0.6rem;
    width: 4.6rem;
    background-color: #f4f4f4;
  }
  .cinema-search .cinema-search-input .cancle-btn {
    float: right;
    margin-top: 0.1rem;
  }
  .main .cinema-search .cinema-init-area {
    padding: 0.19rem 0.3rem;
    position: relative;
  }
  .main .cinema-search .cinema-init-area:after {
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
  .main .cinema-search .cinema-init-area .cinema-index-title {
    color: #b6b6b6;
  }
  .main .cinema-search .cinema-init-area .cinema-index-detail {
    overflow: hidden;
  }
  .main .cinema-search .cinema-init-area .cinema-item-detail {
    border: 0.1rem solid #f4f4f4;
    float: left;
    background-color: #f4f4f4;
    border-radius: 0.06rem;
    margin: 0.1rem;
  }
  .main .cinema-list-wrap {
    width: 100%;
  }
  a{
    color: #000;
    font-size: 0.2rem;
  }
</style>
