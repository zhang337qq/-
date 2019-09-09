<template>
  <div class="detail">
    <!--<div v-if="list.length">-->
    <!--<van-sticky>-->
    <!--</van-sticky>-->
    <detail-header :list="list"></detail-header>
    <detail-info :listName="listName"></detail-info>
    <detail-phone :list="list"></detail-phone>
    <detail-banner :filmInfo="filmInfo"  @bannerList="bannerIndex" ></detail-banner>
    <detail-film :filmList="filmList" v-if="filmList"></detail-film>
    <detail-date :showDate="showDate" v-if="showDate.length" @dateIndex="LiIndex" :pageInfo="pageInfo"></detail-date>
    <!--</div>-->
  </div>
</template>

<script>
  import { getDetailPlay,getPlayDetail,getCinemasPlayHall } from '@/api/films'
  import DetailHeader from './components/DetailHeader'
  import DetailInfo from './components/DetailInfo'
  import DetailPhone from './components/DetailPhone'
  import DetailBanner from './components/DetailBanner'
  import DetailFilm from './components/DetailFilm'
  import DetailDate from './components/DetailDate'
  export default {
    // name: 'CinemasDetail',
    components:{
      DetailDate,
      DetailFilm,
      DetailHeader,
      DetailInfo,
      DetailPhone,
      DetailBanner
    },
    data(){
      return{
        cinemaId:null,
        filmInfo:null,
        list:[],
        listName:[],
        filmList:null,
        showDate:[],
        //时间的下标
        dateIndex:0,
        //影院的id
        pageIndex:0,
        pageInfo:null
      }
    },
    watch:{
      dateIndex:{
        handler(dateIndex){
          if(this.showDate.length == 0) return
          // console.log('=========',this.showDate[dateIndex])
          
        },
        immediate:true
      },
      pageIndex:{
        handler(pageIndex) {
          // console.log(pageIndex)
        }
      },
      immediate:true
    },
    created () {
      this.getDetailCinemaId()
    },
    methods:{
      getDetailCinemaId(){
        this.cinemaId = this.$route.params.cinemaId*1
        this.getDetailFilm(this.cinemaId)
        this.getDetail(this.cinemaId)
        
      },
      getDetailFilm(cinemaId){
        getDetailPlay(cinemaId).then(result =>{
          if (result.status == 0) {
            this.filmInfo = result.data.films
            
          }
          
        })
      },
      getDetail(cinemaId){
        getPlayDetail(cinemaId).then(result=>{
          if (result.status == 0) {
            this.list = result.data.cinema
            this.listName = this.list.services
          }
        })
      },
      //获取电影下标
      bannerIndex(index){
        this.filmList = this.filmInfo[index]
        this.showDate = this.filmInfo[index].showDate
        this.pageIndex = this.filmInfo[index].filmId
        
      },
      
      //获取影院上映的时间厅
      //时间下标
      LiIndex(dateIndex){
        this.dateIndex = dateIndex
        getCinemasPlayHall(this.pageIndex,this.cinemaId,this.showDate[dateIndex]).then(result=>{
          this.pageInfo = result.data
          console.log(this.pageInfo)
        })
      }
    }
  }
</script>

<style scoped>

</style>
