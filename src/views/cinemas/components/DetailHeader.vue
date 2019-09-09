<template>
    <header>
      <!--<template v-for="(item) in list">-->
        <div class="Go-back" @click="$router.go(-1)">
          <img src="@/assets/imgs/back.png" alt="">
        </div>
        <div class="header-title">
          {{list.name}}
        </div>
      <!--</template>-->
    </header>
</template>

<script>
  export default {
    name: 'Detailheader',
    props:{
      list:{}
    }
  }
</script>

<style scoped lang="scss">
  header{
    background: #ffffff;
    overflow: hidden;
    padding-top: 0.88rem;
    /*min-height: 100vh;*/
    .Go-back{
      position: fixed;
      top: 0;
      height: 0.88rem;
      line-height: 0.88rem;
      padding-left: 0.3rem;
      z-index: 303;
      img{
        width: 0.22rem;
        height: 0.36rem;
        vertical-align: middle;
      }
    }
    .header-title{
      position: relative;
      text-align: center;
      font-size: 0.34rem;
      color: #191a1b;
      overflow: hidden;
      -o-text-overflow: ellipsis;
      text-overflow: ellipsis;
      white-space: nowrap;
      padding: 0 15px;
      background: #fff;
      top: 0;
      height: 0.88rem;
      line-height: 0.88rem;
      z-index: 302;
    }
  }
</style>
