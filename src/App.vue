<template>
   <div id="app">
     <router-view></router-view>
     <footer-nav-bar v-show="isNavShow"></footer-nav-bar>
   </div>
</template>

<script>
import FooterNavBar from "@/components/FooterNavBar"
    export default {
      name: "App",
      data(){
        return{
          isNavShow:false
        }
      },
      watch:{
        $route:{
          handler(newVal){
            //判断这两个有没有
            if (newVal.meta && newVal.meta.hasFooterNav){
              // console.log(newVal)
              this.isNavShow = true
            }else {
              this.isNavShow = false
            }
          },
          //立即执行
          deep:true,
          immediate:true
        }
      },
      components:{
        FooterNavBar
        // console.log(FooterNavBer)
      }
    }
</script>

<style lang="scss">

</style>
