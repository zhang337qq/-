<template>
    <div class="header-search">
      <div class="left">
        <router-link to="/city">
              <span class="city">{{$store.state.cityName}}</span>
        </router-link>
      </div>
      <div class="title">
        <span>影院</span>
      </div>
      <div class="right-search">
        <router-link to="/search">
          <div class="toCinemaSearch">
            <img src="@/assets/imgs/search.png" alt="">
          </div>
        </router-link>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'CinemasSearch',
    
  }
</script>

<style scoped lang="scss">
  .header-search{
    height: 0.88rem;
    line-height: .88rem;
    overflow: hidden;
    background-color: #fff;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    .left{
      min-width: 15%;
      margin-left: 15px;
      /*float: left;*/
      /*height: 44px;*/
      .city{
        display: inline-block;
        font-size: 0.26rem;
        max-width: 1.04rem;
        height: .88rem;
        line-height:  .88rem;
        overflow: hidden;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding-right: 0.24rem;
        color: #191a1b;
        background: url("~@/assets/imgs/xz.png") no-repeat center right;
        background-size:0.12rem 0.06rem;
      }
    }
    .title{
      text-align: center;
      font-size: 17px;
      color: #191a1b;
      -webkit-box-flex: 1;
      -webkit-flex: 1;
      -ms-flex: 1;
      flex: 1;
      overflow: hidden;
      -o-text-overflow: ellipsis;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .right-search{
      width: 15%;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
      margin-right: 15px;
      .toCinemaSearch{
        width: 100%;
        text-align: right;
        img{
          width: 0.36rem;
          height: 0.36rem;
          line-height: 0.88rem;
          vertical-align: middle;
        }
      }
    }
  }
</style>
