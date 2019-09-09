<template>
    <div>
      <van-sticky>
        <cinemas-search></cinemas-search>
        <cinemas-tab></cinemas-tab>
      </van-sticky>
      <cinemas-list v-for="(item,index) in list" :key="index" :item="item"></cinemas-list>
    </div>
</template>

<script>
  import CinemasSearch from './components/CinemasSearch'
  import CinemasTab from './components/CinemasTab'
  import CinemasList from './components/CinemasList'
  import { getCinemasList } from "@/api/films";
  export default {
        name: "Index",
      data: function () {
        return {
          list:[],
          pageInfo:{
            pageNum:0,
            pageSize:10
          }
        }
      },
      components:{
        CinemasSearch,
        CinemasTab,
        CinemasList
      },
      created () {
        this.getList()
      },
      methods:{
        getList(){
          // console.log(this.$store.state.cityId)
          getCinemasList(this.$store.state.cityId).then(result=>{
            if (result.status == 0) {
              this.list = result.data.cinemas
              // console.log(this.list)
            }
          })
        }
      }
    }
</script>

<style scoped>

</style>
